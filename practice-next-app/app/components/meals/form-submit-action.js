"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button disabled={pending} type="submit">
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </div>
  );
};

export default FormSubmitButton;
