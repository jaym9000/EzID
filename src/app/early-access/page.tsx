"use client"; // Indicates that this component is a client-side component in Next.js

import CheckoutPage from "../../../components/CheckoutPage"; // Importing the CheckoutPage component
import convertToSubcurrency from "../../../lib/convertToSubcurrency"; // Importing utility function to convert amount to subcurrency (cents)
import { Elements } from "@stripe/react-stripe-js"; // Importing Elements component from Stripe for payment processing
import { loadStripe } from "@stripe/stripe-js"; // Importing loadStripe function to initialize Stripe

// Check if the Stripe public key is set in the environment variables
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set"); // Throw an error if the key is not set
}

// Load the Stripe instance with the public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// Main component for the Early Access page
export default function EarlyAccess() {
  const amount = 49.99; // Amount to be charged

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#171717] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] -z-10"></div>

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">JM</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16">
          has requested <span className="text-green-500">${amount}</span>
        </h2>
        {/* Add early access content here */}
      </section>

      {/* Stripe Elements provider for payment processing */}
      <Elements
        stripe={stripePromise} // Passing the loaded Stripe instance
        options={{
          mode: "payment", // Setting the mode to payment
          amount: convertToSubcurrency(amount), // Converting amount to cents
          currency: "usd", // Setting the currency to USD
        }}
      >
        <CheckoutPage amount={amount} />{" "}
        {/* Rendering the CheckoutPage component with the amount */}
      </Elements>
    </div>
  );
}
