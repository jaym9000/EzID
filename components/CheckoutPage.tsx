"use client"; // Indicates that this component is a client component in Next.js

import React, { useEffect, useState } from "react"; // Importing React and hooks
import {
  useStripe, // Hook to access Stripe's API
  useElements, // Hook to manage Stripe elements
  PaymentElement, // Component to render the payment form
} from "@stripe/react-stripe-js"; // Importing Stripe React components
import convertToSubcurrency from "../lib/convertToSubcurrency"; // Utility function to convert amount to subcurrency (cents)

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe(); // Accessing Stripe instance
  const elements = useElements(); // Accessing Stripe elements

  // State variables to manage error messages, client secret, and loading state
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Effect to create a payment intent when the component mounts or amount changes
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST", // Sending a POST request
      headers: {
        "Content-Type": "application/json", // Setting content type to JSON
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }), // Sending the amount in cents
    })
      .then((res) => res.json()) // Parsing the response as JSON
      .then((data) => setClientSecret(data.clientSecret)); // Setting the client secret from the response
  }, [amount]); // Dependency array to run effect when amount changes

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Preventing default form submission behavior
    setLoading(true); // Setting loading state to true
    if (!stripe || !elements) return; // Ensuring Stripe and elements are loaded

    // Submitting the payment form
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message); // Setting error message if submission fails
      setLoading(false); // Resetting loading state
      return; // Exiting the function
    }

    // Confirming the payment with Stripe
    const { error } = await stripe.confirmPayment({
      elements, // Passing the Stripe elements
      clientSecret, // Passing the client secret
      confirmParams: {
        return_url: "http://localhost:3000/success", // URL to redirect after payment confirmation
      },
    });

    if (error) {
      setErrorMessage(error.message); // Setting error message if confirmation fails
      setLoading(false); // Resetting loading state
    } else {
      // Payment succeeded, handle success (e.g., redirect to success page)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md">
      {
        clientSecret && (
          <PaymentElement />
        ) /* Rendering the payment form if client secret is available */
      }
      {
        errorMessage && (
          <div className="text-red-500">{errorMessage}</div>
        ) /* Displaying error message if present*/
      }
      <button
        type="submit" // Setting button type to submit
        disabled={!stripe || loading} // Disabling button if Stripe is not loaded or if loading
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {
          !loading
            ? `Pay $${amount}`
            : "Processing..." /* Button text changes based on loading state */
        }
      </button>
    </form>
  );
};

export default CheckoutPage; // Exporting the CheckoutPage component
