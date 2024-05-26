import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Text = forwardRef<any, any>(
  ({ field, errors, onBlur, onChange, name }, ref) => {
    return (
      <div className="flex flex-col items-start">
        <label>{field.label}</label>
        <input
          type="text"
          placeholder={field.label}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          style={{
            border: errors[field.id] ? "1px solid red" : "1px solid black",
          }}
          className="p-2 border rounded-md w-full"
        />
        <ErrorMessage errors={errors} name={field.id} />
      </div>
    );
  }
);

export default Text;
