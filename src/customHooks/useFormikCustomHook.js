import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { signUpSchema } from "../Components/Login/FormikFile/Formvalidation";
import { initialValues } from "../Components/Login/FormikFile/initialValues";
import { studentPostData } from "../Redux/ReduxThunk/studentThunks";
import { unwrapResult } from "@reduxjs/toolkit";

const useFormikCustomHook = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const formData = new FormData();

        if (values.student_profile_image) {
          formData.append(
            "student_profile_image",
            values.student_profile_image
          );
        }

        Object.keys(values).forEach((key) => {
          if (key !== "student_profile_image") {
            formData.append(key, values[key]);
          }
        });

        const { DD, MM, YYYY } = values;
        if (DD && MM && YYYY) {
          const dateOfBirth = new Date(YYYY, MM - 1, DD);
          if (!isNaN(dateOfBirth.getTime())) {
            formData.append("dob", dateOfBirth.toISOString());
          }
        }
        const actionResult = await dispatch(studentPostData(formData));
        unwrapResult(actionResult);
        //after This Successfull Sigin Want to success alert and success mail and redirect to login component
      } catch (error) {
        console.error(error.message);

        const backendError = error.message;
        const errorCode = backendError.code;
        const errorKey = Object.keys(error.message.keyValue)[0];
        const errorValue = error.message.keyValue[errorKey];
        console.log(errorCode);
        if (errorCode === 11000) {
          console.log("error code", errorCode);
          console.log("key", errorKey);
          console.log("value", errorValue);
          setFieldError(errorKey, `This ${errorValue} is already exists`);
        }
      }
    },
  });
  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  };
};

export default useFormikCustomHook;
