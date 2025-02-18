import PropTypes from "prop-types";

const MultipleField = ({
  Allfields,
  values,
  handleBlur,
  error,
  touched,
  keyDown,
  handleInputChange,
  inputRefs,
}) => {
  console.log(values);
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
              className={filled.inputClass}
              placeholder=""
              value={values?.[filled?.name] || values.filled}
              onBlur={handleBlur}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => keyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
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
  values: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  touched: PropTypes.bool,
  keyDown: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputRefs: PropTypes.object.isRequired,
};
export default MultipleField;
