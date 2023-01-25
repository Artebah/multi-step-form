import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAddons, addAddon, removeAddon } from "../../features/addons/addons-slice";

const ThirdStep = () => {
  const dispatch = useDispatch();
  const addons = useSelector(selectAddons);

  const addonsInfo = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      monthlyPrice: "+$1/mo",
      yearlyPrice: "+$10/yr",
      id: "addon-card-checkbox-online-service",
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
      id: "addon-card-checkbox-larger-storage",
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
      id: "addon-card-checkbox-customizable-profile",
    },
  ];

  const addonCheckboxHandle = (e, addon) => {
    const checked = e.target.checked;

    if (checked) {
      dispatch(addAddon(addon));
    } else {
      dispatch(removeAddon(addon));
    }
  };

  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Pick add-ons</h1>
        <h2 className="card-content__subtitle">
          Add-ons help enhance your gaming experience.
        </h2>
      </div>
      <form className="card-content__form form-stepthree-content">
        <div className="form-stepthree-content__addons">
          {addonsInfo.map((addonObj, index) => (
            <label
              htmlFor={addonObj.id}
              key={addonObj.id}
              className="form-stepthree-content__addon addon-card form-card">
              <div className="addon-card__checkbox">
                <input
                  onChange={(e) => addonCheckboxHandle(e, addonObj)}
                  type="checkbox"
                  id={addonObj.id}
                />
                <span></span>
              </div>
              <div className="addon-card__text">
                <h2>{addonObj.title}</h2>
                <h3>{addonObj.subtitle}</h3>
              </div>
              <div className="addon-card__price">{addonObj.monthlyPrice}</div>
            </label>
          ))}
        </div>
      </form>
    </>
  );
};

export { ThirdStep };
