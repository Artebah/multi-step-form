import { useDispatch, useSelector } from "react-redux";
import {
  addInputAlert,
  selectFirstStepValues,
} from "../features/first-step/first-step-slice";

import { decStep, incStep } from "../features/steps-counter/steps-counter-slice";

function useStepButtonHandles({ isFirstStep, isLastStep, setIsConfirmed }) {
  const dispatch = useDispatch();
  const firstStepValues = useSelector(selectFirstStepValues);

  const buttonBackHandle = () => {
    dispatch(decStep());
  };

  const buttonNextHandle = () => {
    if (isFirstStep) {
      let blocked = false;
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      for (const key in firstStepValues) {
        if (Object.hasOwnProperty.call(firstStepValues, key)) {
          const element = firstStepValues[key];
          if (!element.value) {
            blocked = true;
            dispatch(
              addInputAlert({
                name: key,
                requiredAlert: true,
                requiredAlertMessage: "This field is required",
              })
            );
          } else if (key === "email" && !EMAIL_REGEXP.test(element.value)) {
            blocked = true;
            dispatch(
              addInputAlert({
                name: key,
                requiredAlert: true,
                requiredAlertMessage: "Email is incorrect",
              })
            );
          } else if (key === "phone" && element.value.length < 10) {
            blocked = true;
            dispatch(
              addInputAlert({
                name: key,
                requiredAlert: true,
                requiredAlertMessage: "Phone number is incorrect",
              })
            );
          }
        }
      }
      if (!blocked) {
        dispatch(incStep());
      }
    } else if (isLastStep) {
      setIsConfirmed(true);
    } else {
      dispatch(incStep());
    }
  };

  return { buttonBackHandle, buttonNextHandle };
}
export { useStepButtonHandles };
