import PropTypes from "prop-types";

const SelectBox = (props) => {
  const {
    name,
    placeholder,
    options,
    fieldClassName,
    values,
    handleChange,
    handleBlur,
    error,
    touched,
  } = props;
  console.log(values);
  return (
    <div className="relative mb-5">
      <select
        name={name}
        className={fieldClassName}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && touched ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};
SelectBox.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  fieldClassName: PropTypes.string,
  values: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
};
export default SelectBox;
