import PropTypes from "prop-types";
const Textarea = ({
  name,
  placeholder,

  fieldClassName,

  labelClassName,
  rows,
  values,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <div className="relative mb-5">
      <textarea
        id={placeholder}
        name={name}
        rows={rows}
        className={fieldClassName}
        placeholder=" "
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      <label htmlFor={placeholder} className={labelClassName}>
        {placeholder}
      </label>
      {error && touched ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};
Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,

  fieldClassName: PropTypes.string,
  rows: PropTypes.string,
  labelClassName: PropTypes.string,
  values: PropTypes.string,
  handleChange: PropTypes.func, // Add handleChange here
  handleBlur: PropTypes.func, // Add handleBlur here
  error: PropTypes.string,
  touched: PropTypes.bool,
};
export default Textarea;
