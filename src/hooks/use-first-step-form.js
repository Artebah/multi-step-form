import { useDispatch, useSelector } from "react-redux";
import {
  addInputValue,
  addInputAlert,
  selectFirstStepValues,
} from "../features/first-step/first-step-slice";

function useFirstStepForm() {
  const { name, email, phone } = useSelector(selectFirstStepValues);
  const dispatch = useDispatch();

  const inputsArray = [
    {
      name: "name",
      placeholder: "e.g. Stephen King",
      nameId: "form-stepone-input-name",
      type: "text",
      data: name,
    },
    {
      name: "email",
      placeholder: "e.g. stephenking@lorem.com",
      nameId: "form-stepone-input-email",
      type: "email",
      data: email,
    },
    {
      name: "phone",
      placeholder: "e.g. +1 234 567 890",
      nameId: "form-stepone-input-phone",
      type: "text",
      data: phone,
    },
  ];

  const inputOnChangeHandler = (e, requiredAlert) => {
    const input = e.target;

    dispatch(
      addInputValue({
        name: input.name,
        value: input.value,
      })
    );

    if (input.value) {
      if (requiredAlert) {
        dispatch(addInputAlert({ name: input.name, requiredAlert: false }));
      }
    }
  };

  return { inputsArray, inputOnChangeHandler };
}

export { useFirstStepForm };
