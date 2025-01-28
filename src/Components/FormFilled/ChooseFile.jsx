import PropTypes from "prop-types";
import { useState } from "react";
const ChooseFile = ({
  name,
  profileImage,
  type,
  fieldClassName,
  buttonClassName,
  imageBUrl,
  handleBlur,
  error,
  touched,
  setFieldValue,
}) => {
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dlqylweq6/image/upload/v1738059447/image_5_yfieap.png"
  );
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageUrl = e.target.result;

        setImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }

    setFieldValue(name, file);
  };

  if (typeof imageBUrl === "object") {
    imageBUrl = null;
  }
  return (
    <div className="relative mb-5">
      <div className="font-bold relative">
        <img
          src={imageBUrl ? imageBUrl : imageUrl}
          alt=""
          className="w-[45px] h-[45px] rounded-[50%] right-[1%] top-[8%] absolute"
        />
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
  imageBUrl: PropTypes.oneOfType([
    PropTypes.string, // Allows a string
    PropTypes.object, // Allows an object
  ]),
  error: PropTypes.string,
  setFieldValue: PropTypes.func,
  handleBlur: PropTypes.func,
  touched: PropTypes.bool,
};
export default ChooseFile;
