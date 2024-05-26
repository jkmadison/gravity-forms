import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Text = forwardRef<any, any>(
  ({ field, errors, onBlur, onChange, name }, ref) => {
    return (
      <div key={field.id} style={{ display: "flex", flexDirection: "column" }}>
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
        />
        <ErrorMessage errors={errors} name={field.id} />
      </div>
    );
  }
);

export default Text;
