import { useDispatch, useSelector } from "react-redux";
import { addInputValue, addInputAlert, selectFirstStepValues } from "./first-step-slice";

function useFirstStep() {
  const { name, email, phone } = useSelector(selectFirstStepValues);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    for (let i = 0; i < form.elements.length; i++) {
      const input = form.elements[i];
      if (input.className === "form-stepone-content__input") {
        if (input.value.length === 0) {
          dispatch(addInputAlert({ name: input.name, requiredAlert: true }));
        }
      }
    }
  };

  const inputHandler = (e, requiredAlert) => {
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

  return { inputObjects: [name, email, phone], formHandler, inputHandler };
}

export { useFirstStep };
