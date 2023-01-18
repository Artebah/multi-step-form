import React from "react";

import ThankYouImage from "../assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="card-content__thank-you thank-you">
      <div className="thank-you__img">
        <img src={ThankYouImage} alt="Thank you" />
      </div>
      <h2 className="thank-you__title">Thank you!</h2>
      <p className="thank-you__text">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export { ThankYou };
