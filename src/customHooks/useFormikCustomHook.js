import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../utils/CustomAlert/cutomToast";
import { useNavigate } from "react-router-dom";
import { userGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks";

export const useFormikSignHook = (
  signUpSchema,
  initialValues,
  postData,
  setLoading,
  apiFrom,
  skipFields,
  role,
  userId
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
    resetForm,
  } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);

        const UpdatedValue = Object.keys(values)
          .filter((key) => !skipFields?.includes(key))
          .reduce((acc, key) => {
            acc[key] = values[key];
            return acc;
          }, {});

        const comeFrom =
          apiFrom === "post"
            ? values
            : apiFrom === "update" || apiFrom === "admin-update"
            ? UpdatedValue
            : null;

        const formData = new FormData();

        Object.keys(comeFrom).forEach((key) => {
          if (key !== "DD" && key !== "MM" && key !== "YYYY") {
            formData.append(key, comeFrom[key]);
          }
        });
        const { DD, MM, YYYY } = comeFrom;
        if (DD && MM && YYYY) {
          const dateOfBirth = new Date(YYYY, MM - 1, DD);
          if (!isNaN(dateOfBirth.getTime())) {
            formData.append("dob", dateOfBirth.toISOString());
          }
        }
        console.log(formData);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
        let actionResult;
        console.log("apiFrom", apiFrom);
        if (apiFrom === "admin-update") {
          const query = { userId: userId, role: role };
          actionResult = await dispatch(postData({ formData, query }));
          console.log("query", query);
        } else {
          actionResult = await dispatch(postData({ formData }));
          console.log("query no");
        }

        const dataPass = unwrapResult(actionResult);
        if (dataPass) {
          customToast("success", dataPass.message);

          apiFrom === "post"
            ? navigate("/")
            : apiFrom === "update"
            ? navigate("/profile")
            : apiFrom === "admin-update"
            ? navigate("/user")
            : null;
          setLoading(false);
        }

        apiFrom === "post"
          ? resetForm()
          : apiFrom === "update"
          ? dispatch(userGetDataThunk())
          : null;
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
  postData,
  setLoading
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
        setLoading(true);
        const actionResult = await dispatch(postData(values));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/verify-otp");
          customToast("success", dataPass.message);
          setLoading(false);
          sessionStorage.setItem("loginField", dataPass.data.identifier);
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

export const useFormikOtpHook = (
  otpSchema,
  otpInitialValues,
  postData,
  setLoading
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const identifier = sessionStorage.getItem("loginField");

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
        setLoading(true);
        const login_verify_otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;

        const apiData = {
          finding_with_email: identifier,
          login_verify_otp,
        };

        const actionResult = await dispatch(postData(apiData));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/menu");
          customToast("success", dataPass.message);
          sessionStorage.removeItem("loginField");
          setLoading(false);
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

export const useFormikSearchUserHook = (searchSchema, searchInitialValues) => {
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
    validationSchema: searchSchema,
    initialValues: searchInitialValues,
    onSubmit: async () => {},
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

export const useFormikMenuHook = (menuSchema, menuInitialValues) => {
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
    validationScehma: menuSchema,
    initialValues: menuInitialValues,
    onSubmit: async () => {
      console.log("values", values);
      try {
        // const data = await allAdminMenuGetDataThunk(values);
      } catch (error) {
        console.log("error", error);
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
