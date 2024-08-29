import PropTypes from "prop-types";
const ChooseFile = ({
  name,
  profileImage,

  type,
  fieldClassName,
  buttonClassName,
  values,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <div className="relative mb-5">
      <div className="font-bold relative ">
        <input
          type={type}
          name={name}
          className={fieldClassName}
          value={values}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={buttonClassName}>{profileImage}</div>
      </div>
      {error && touched ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};
ChooseFile.propTypes = {
  name: PropTypes.string,
  profileImage: PropTypes.string,
  type: PropTypes.string,
  fieldClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  values: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  touched: PropTypes.bool,
};

export default ChooseFile;
