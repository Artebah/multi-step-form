import { useDispatch, useSelector } from "react-redux";
import { selectAddons } from "../features/addons/addons-slice";
import { selectPlan } from "../features/plan/plan-slice";
import { resetStep } from "../features/steps-counter/steps-counter-slice";

function useSummary() {
  const dispatch = useDispatch();
  const { planName, planType, planPrice } = useSelector(selectPlan);
  const addons = useSelector(selectAddons);

  const buttonChangeInfoHandle = () => {
    dispatch(resetStep());
  };

  const getTotalPrice = () => {
    const addonsPrices = [];
    const planPriceDigit = +planPrice.match(/\d+/);

    addons.forEach((addon) => {
      const price = +addon.price.match(/\d+/);
      addonsPrices.push(price);
    });

    const totalAddonsPrice = addonsPrices.reduce((pr, cur) => pr + cur, 0);

    const totalPrice = totalAddonsPrice + planPriceDigit;

    if (planType === "monthly") {
      return `+$${totalPrice}/mo`;
    } else {
      return `+$${totalPrice}/yr`;
    }
  };

  return { planName, planType, buttonChangeInfoHandle, planPrice, addons, getTotalPrice };
}

export { useSummary };
