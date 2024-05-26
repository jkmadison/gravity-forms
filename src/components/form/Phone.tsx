import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Phone = forwardRef<any, any>(
  ({ field, errors, onBlur, onChange, name }, ref) => {
    return (
      <div className="flex flex-col items-start">
        <label>{field.label}</label>
        <input
          type="phone"
          placeholder={field.label}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          className={`block border flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-full ring-gray-300 ${
            errors[field.id] ? "border-red-500" : "border-gray-300"
          }`}
        />
        <ErrorMessage errors={errors} name={field.id} />
      </div>
    );
  }
);

export default Phone;
