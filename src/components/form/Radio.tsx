import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Radio = forwardRef<any, any>(
  ({ field, errors, onBlur, onChange, name }, ref) => {
    return (
      <div key={field.id}>
        <label className="flex-1">{field.label}</label>
        <div className="flex items-center gap-8">
          {field.choices.map((choice: any) => (
            <div key={choice.value} className="flex items-center gap-2">
              <input
                type="radio"
                defaultChecked={field.isSelected}
                id={choice.value}
                name={name}
                value={choice.value}
                ref={ref}
                onBlur={onBlur}
                onChange={onChange}
              />
              <label htmlFor={choice.value}>{choice.text}</label>
            </div>
          ))}
        </div>
        <ErrorMessage errors={errors} name={field.id} />
      </div>
    );
  }
);

export default Radio;
