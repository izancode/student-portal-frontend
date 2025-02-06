import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../../utils/CustomAlert/cutomToast";
import { userGetDataThunk } from "../../Redux/ReduxThunk/fetchDataThunks";

import { studentImageUpdateData } from "../../Redux/ReduxThunk/updationThunks";
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
  apiFrom,
}) => {
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dlqylweq6/image/upload/v1738059447/image_5_yfieap.png"
  );
  const [updateApiFile, setUpdateApiFile] = useState(false);

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    console.log(apiFrom);
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

    if (apiFrom === "update") {
      setUpdateApiFile(true);
      updateImage(file);
    }
  };

  const updateImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("student_profile_image", file);
      const fileUploaded = await dispatch(studentImageUpdateData(formData));
      const dataPass = unwrapResult(fileUploaded);
      if (dataPass) {
        customToast("success", dataPass.message);
        setUpdateApiFile(false);
        dispatch(userGetDataThunk());
      }
    } catch (error) {
      customToast("error", error.message);
    }
  };

  if (typeof imageBUrl === "object") {
    imageBUrl = null;
  }
  return (
    <div className="relative mb-5">
      {updateApiFile ? (
        "Updating Image..."
      ) : (
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
      )}
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
  apiFrom: PropTypes.string,
};
export default ChooseFile;
