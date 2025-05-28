import { useState } from "react";
import { useRef } from "react";
import { useFormikSignHook } from "../customHooks/useFormikCustomHook";
import {
  studentSignUpSchema,
  facultySignUpSchema,
  adminSignUpSchema,
} from "../utils/Formik/formik";
import { useSelector } from "react-redux";

const isProduction = import.meta.env.MODE === "production";

export const useDataCustomHook = (
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
  skipFields,
  normal_User_Role,
  userId
) => {
  const role = useSelector(
    (state) => normal_User_Role || state.user?.userDetail?.role
  );
  // console.log("useDataCustomHook role", role);
  // console.log("useDataCustomHook userId", userId);

  let SignUpSchema;
  if (role === "student" || role === "father" || role === "mother") {
    SignUpSchema = studentSignUpSchema;
  } else if (role === "faculty") {
    SignUpSchema = facultySignUpSchema;
  } else if (role === "admin") {
    SignUpSchema = adminSignUpSchema;
  }

  const environmentValues = isProduction ? initialValues : dumyInitialValues;

  const updatedEnvironmentValues = { ...environmentValues };
  if (updatedEnvironmentValues.dob) {
    const dobDate = new Date(updatedEnvironmentValues.dob);
    updatedEnvironmentValues.DD = String(dobDate.getDate()).padStart(2, "0");
    updatedEnvironmentValues.MM = String(dobDate.getMonth() + 1).padStart(
      2,
      "0"
    );
    updatedEnvironmentValues.YYYY = String(dobDate.getFullYear());
    delete updatedEnvironmentValues.dob;
  }

  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (!Number(value)) {
      value = "";
    }
    if (name === "DD") {
      if (value > 31) return;
    }
    if (name === "MM") {
      if (value > 12) return;
    }
    if (name === "YYYY") {
      if (value > 2005) return;
    }
    setFieldValue(name, value);
  };

  const handleKeyDown = (e, index) => {
    const { value } = e.target;
    if (e.key === "Backspace" && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormikSignHook(
    SignUpSchema,
    updatedEnvironmentValues,
    postData,
    setLoading,
    apiFrom,
    skipFields,
    role,
    userId
  );
  console.log("useFormikSignHook", values);
  return {
    updatedEnvironmentValues,
    loading,
    inputRefs,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleInputChange,
    handleKeyDown,
  };
};
