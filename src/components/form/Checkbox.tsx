import { forwardRef } from "react";

const Checkbox = forwardRef<any, any>((props, ref) => {
  const { field, onBlur, onChange, name } = props;
  return (
    <div className="space-x-2">
      <input
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        type="checkbox"
      />
      <label>{field.label}</label>
    </div>
  );
});

export default Checkbox;
