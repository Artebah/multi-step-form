import React from "react";

import { useFirstStep } from "./use-first-step";

const FirstStepForm = () => {
  const {
    inputObjects: [name, email, phone],
    formHandler,
    inputHandler,
  } = useFirstStep();

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

  return (
    <form className="card-content__form form-stepone-content">
      {inputsArray.map((input) => (
        <label
          key={input.nameId}
          className="form-stepone-content__label"
          htmlFor={input.nameId}>
          <div className="form-stepone-content__label-text">
            <p>{input.name}</p>
            {input.data.requiredAlert && (
              <span className="required-alert">This field is required</span>
            )}
          </div>
          <input
            onChange={(e) => inputHandler(e, input.data.requiredAlert)}
            value={input.data.value}
            className="form-stepone-content__input"
            placeholder={input.placeholder}
            name={input.name}
            id={input.nameId}
            type={input.type}
          />
        </label>
      ))}
    </form>
  );
};

export { FirstStepForm };
