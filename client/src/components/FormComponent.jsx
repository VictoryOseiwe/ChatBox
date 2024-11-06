export const FormSection = ({ children }) => (
  <div className="form-group">{children}</div>
);

export const FormInput = ({
  label,
  type,
  name,
  required,
  helperText,
  value,
  ...rest
}) => (
  <div className="form-input">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      {...rest}
    />
    {helperText && <p className="helper-text">{helperText}</p>}
  </div>
);
