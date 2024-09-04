import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const useFormikCustomHook = (signUpSchema, initialValues, postData) => {
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

        Object.keys(values).forEach((key) => {
          // Exclude DD, MM, YYYY from being directly appended
          if (key !== "DD" && key !== "MM" && key !== "YYYY") {
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
        const actionResult = await dispatch(postData(formData));
        unwrapResult(actionResult);
        //after This Successfull Sigin Want to success alert and success mail and redirect to login component
      } catch (error) {
        const backendError = error.message;
        const errorCode = backendError.code;
        const errorKey = Object.keys(error.message.keyValue)[0];
        const errorValue = error.message.keyValue[errorKey];

        if (errorCode === 11000) {
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
