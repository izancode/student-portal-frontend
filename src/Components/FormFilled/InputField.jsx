import PropTypes from "prop-types";
const InputField = ({
  name,
  placeholder,
  fieldClassName,
  inputType,
  labelClassName,
  pattern,
  values,
  handleChange,
  handleBlur,
  error,
  touched,
  disabled,
}) => {
  return (
    <div className="relative mb-5">
      <input
        type={inputType}
        autoComplete="off"
        pattern={pattern}
        id={name}
        name={name}
        className={fieldClassName}
        placeholder=""
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <label htmlFor={name} className={labelClassName}>
        {placeholder}
      </label>
      {error && touched ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  fieldClassName: PropTypes.string,
  inputType: PropTypes.string,
  labelClassName: PropTypes.string,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,

  handleChange: PropTypes.func, // Add handleChange here
  handleBlur: PropTypes.func, // Add handleBlur here
};

export default InputField;
