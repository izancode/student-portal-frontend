import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../utils/CustomAlert/cutomToast";
import { useNavigate } from "react-router-dom";

export const useFormikSignHook = (signUpSchema, initialValues, postData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          navigate("/");
        }
        resetForm();
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

export const useFormikLoginHook = (
  loginSchema,
  loginInitialValues,
  postData
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    validationSchema: loginSchema,
    initialValues: loginInitialValues,
    onSubmit: async (values) => {
      try {
        const actionResult = await dispatch(postData(values));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/verify-otp");
          customToast("success", dataPass.message);
        }
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

export const useFormikOtpHook = (otpSchema, otpInitialValues, postData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const identifier = useSelector(
    (state) => state.login.login[0]?.data?.identifier
  );

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
    validationSchema: otpSchema,
    initialValues: otpInitialValues,
    onSubmit: async (values) => {
      try {
        const login_verify_otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;

        const apiData = {
          finding_with_email: identifier,
          login_verify_otp,
        };

        const actionResult = await dispatch(postData(apiData));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/home");
          customToast("success", dataPass.message);
        }
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
