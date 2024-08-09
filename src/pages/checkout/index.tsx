/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import React, { FC, useEffect, useState } from "react";
import {
  createElement,
  loadAirwallex,
  confirmPaymentIntent,
  getElement,
} from "airwallex-payment-elements";
import { Button, Loading, Toast } from "@arco-design/mobile-react";

const routeApi = getRouteApi("/checkout");
const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { intentId, clientSecret }: any = routeApi.useSearch();
  const [elementShow, setElementShow] = useState(false); // Example: show element state
  const [isSubmitting, setIsSubmitting] = useState(false); // Example: show submission processing state
  const [errorMessage, setErrorMessage] = useState<any>(); // Example: set error state
  const [inputErrorMessage, setInputErrorMessage] = useState<any>(); //  Example: set input error state

  useEffect(() => {
    // STEP #2: Initialize Airwallex with the appropriate Airwallex environment and other configurations
    loadAirwallex({
      env: import.meta.env.VITE_AIR_WALLEX_MODE, // Can choose other production environments, 'staging | 'demo' | 'prod'
      origin: window.location.origin, // Setup your event target to receive the browser events message
      // For more detailed documentation at https://github.com/airwallex/airwallex-payment-demo/tree/master/docs
    }).then(() => {
      // STEP #4: Create the card element
      const card = createElement("card");
      // STEP #5: Mount the card element to the empty container created previously
      card?.mount("card"); // This 'card' id MUST MATCH the id on your empty container created in Step 3
    });

    // STEP #7: Add an event listener to ensure the element is mounted
    const onReady = (event: any) => {
      /**
       * ...Handle events on element ready
       */
      setElementShow(true); // Example: sets show once mounted
      getElement("card")?.focus(); // Example: focuses on input field
      console.log(`The Card element is ready, ${JSON.stringify(event.detail)}`);
    };

    // STEP #8: Add an event listener to respond to errors
    const onError = (event: any) => {
      /**
       * ... Handle events on error
       */
      const { error } = event.detail;
      setIsSubmitting(false);
      setErrorMessage(error.message);
      console.error("There was an error", error);
    };

    // STEP #9: Add an event listener to get input focus status
    const onFocus = () => {
      setInputErrorMessage(""); // Example: clear input error message
    };

    // STEP #10: Add an event listener to show input error message when finish typing
    const onBlur = (event: any) => {
      const { error } = event.detail;
      setInputErrorMessage(error?.message ?? JSON.stringify(error)); // Example: set input error message
    };

    const domElement = document.getElementById("card");
    domElement?.addEventListener("onReady", onReady);
    domElement?.addEventListener("onError", onError);
    domElement?.addEventListener("onBlur", onBlur);
    domElement?.addEventListener("onFocus", onFocus);
    return () => {
      domElement?.removeEventListener("onReady", onReady);
      domElement?.removeEventListener("onError", onError);
      domElement?.removeEventListener("onFocus", onFocus);
      domElement?.removeEventListener("onBlur", onBlur);
    };
  }, [clientSecret, intentId]); // This effect should ONLY RUN ONCE as we do not want to reload Airwallex and remount the elements

  // STEP #6a: Add a button handler to trigger the payment request
  const onTriggerConfirm = () => {
    setIsSubmitting(true); // Example: sets loading state
    setErrorMessage(""); // Example: reset error message
    const card = getElement("card");
    confirmPaymentIntent({
      element: card as any,
      id: intentId,
      client_secret: clientSecret,
    })
      .then(() => {
        navigate({ to: "/" });
        Toast.success("Payment Successful");
      })
      // STEP #6c: Listen to the request failure response
      .catch((error) => {
        /**
         * ... Handle error response
         */
        setIsSubmitting(false); // Example: sets loading state
        setErrorMessage(error.message ?? JSON.stringify(error)); // Example: set error message
        console.error("There was an error", error);
      });
  };

  const inputStyle = {
    // Custom styling for the inputs, can be placed in css
    border: "1px solid",
    borderRadius: "5px",
    padding: "5px 10px",
    marginTop: "8px",
    height: "28px",
  };

  return (
    <div>
      {!elementShow && <Loading />}
      {errorMessage?.length > 0 && <p id="error">{errorMessage}</p>}
      <div
        className="field-container"
        style={{ display: elementShow ? "block" : "none" }}
      >
        <div id="card" style={inputStyle} />
        <p style={{ color: "red" }}>{inputErrorMessage}</p>
        <Button onClick={onTriggerConfirm} disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
