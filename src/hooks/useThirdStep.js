import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addAddon,
  removeAddon,
  selectAddons,
  changeAddonsPrice,
} from "../features/addons/addons-slice";
import { selectPlan } from "../features/plan/plan-slice";

function useThirdStep(addonsInfo) {
  const dispatch = useDispatch();
  const { planType } = useSelector(selectPlan);
  const addons = useSelector(selectAddons);

  const verifyIsAddonAdded = (id) => {
    const addon = addons.find((addon) => addon.id === id);

    return addon ? true : false;
  };

  React.useEffect(() => {
    dispatch(changeAddonsPrice({ addonsInfo, planType }));
  }, [planType, dispatch, addonsInfo]);

  const addonCheckboxHandle = (e, { title, monthlyPrice, yearlyPrice, id }) => {
    const checked = e.target.checked;
    const price = planType === "monthly" ? monthlyPrice : yearlyPrice;

    if (checked) {
      dispatch(addAddon({ title, id, price }));
    } else {
      dispatch(removeAddon(id));
    }
  };

  return { addonCheckboxHandle, verifyIsAddonAdded, planType };
}

export { useThirdStep };
