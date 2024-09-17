import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../utils/CustomAlert/cutomToast";
const useFormikCustomHook = (
  signUpSchema,
  initialValues,
  postData,
  handleSignUpPageProps
) => {
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
    resetForm,
  } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
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
        const dataPass = unwrapResult(actionResult);
        if (dataPass) {
          customToast("success", dataPass.message);
          handleSignUpPageProps();
        }
        resetForm();
        //after This Successfull Sigin Want to success alert and success mail and redirect to login component
      } catch (error) {
        customToast("error", error.message);
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
