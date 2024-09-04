import PropTypes from "prop-types";
const ChooseFile = ({
  name,
  profileImage,
  type,
  fieldClassName,
  buttonClassName,
  handleBlur,
  error,
  touched,
  setFieldValue,
}) => {
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];

    setFieldValue(name, file);
  };
  return (
    <div className="relative mb-5">
      <div className="font-bold relative ">
        <input
          type={type}
          name={name}
          className={fieldClassName}
          onChange={handleFileChange}
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
  error: PropTypes.string,
  setFieldValue: PropTypes.func,
  handleBlur: PropTypes.func,
  touched: PropTypes.bool,
};
export default ChooseFile;
