import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Select = forwardRef<any, any>(
  ({ field, errors, onBlur, onChange, name }, ref) => {
    field.choices = [
      {
        text: "Yes",
        value: "yes",
      },
      {
        text: "No",
        value: "no",
      },
    ];
    return (
      <div>
        <label className="flex-1">{field.label}</label>
        <select ref={ref} name={name} onBlur={onBlur} onChange={onChange}>
          {field.choices.map((choice: any) => (
            <option key={choice.value} id={choice.value} value={choice.value}>
              {choice.text}
            </option>
          ))}
        </select>
        <ErrorMessage errors={errors} name={field.id} />
      </div>
    );
  }
);

export default Select;
