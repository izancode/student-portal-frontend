import PropTypes from "prop-types";

const MultipleField = ({
  Allfields,
  values,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <div className="flex flex-wrap mb-4">
      {Allfields.map((filled, index) => {
        return (
          <div key={index} className={`relative ${filled.divClass}`}>
            <input
              type={filled.type}
              pattern={filled.pattern}
              id={filled.key}
              name={filled.name}
              values={filled.name}
              className={filled.inputClass}
              placeholder=" "
              value={values}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor={filled.key} className={filled.labelClassName}>
              {filled.name}
            </label>
            {error && touched ? <p className="text-red-500">{error}</p> : null}
          </div>
        );
      })}
    </div>
  );
};
MultipleField.propTypes = {
  Allfields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      pattern: PropTypes.string,
      divClass: PropTypes.string,
      inputClass: PropTypes.string,
    })
  ).isRequired,
  error: PropTypes.string,
  values: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  touched: PropTypes.bool,
};
export default MultipleField;
