import { useState } from "react";
import { useRef } from "react";
import { useFormikSignHook } from "../customHooks/useFormikCustomHook";
import { studentSignUpSchema } from "../utils/Formik/formik";

const isProduction = import.meta.env.MODE === "production";

export const useDataCustomHook = (
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
  skipFields
) => {
  const studentEnvironmentValues = isProduction
    ? initialValues
    : dumyInitialValues;

  const updatedStudentEnvironmentValues = { ...studentEnvironmentValues };
  if (updatedStudentEnvironmentValues.dob) {
    const dobDate = new Date(updatedStudentEnvironmentValues.dob);
    updatedStudentEnvironmentValues.DD = String(dobDate.getDate()).padStart(
      2,
      "0"
    );
    updatedStudentEnvironmentValues.MM = String(
      dobDate.getMonth() + 1
    ).padStart(2, "0");
    updatedStudentEnvironmentValues.YYYY = String(dobDate.getFullYear());
    delete updatedStudentEnvironmentValues.dob;
  }

  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (e, fieldKey) => {
    console.log("e" + e.target.id);
    console.log("fieldKey" + fieldKey);
    if (/^[A-Za-z]*$/.test(e.target.value)) {
      e.target.value = "";
    }
    if (fieldKey === 0 && e.target.id === "dd") {
      if (e.target.value > 31) {
        e.target.value = 31;
      }
    } else if (fieldKey === 1 && e.target.id === "mm") {
      if (e.target.value > 12) {
        e.target.value = 12;
      }
    } else if (fieldKey === 2 && e.target.id === "yyyy") {
      if (e.target.value > 1990) {
        e.target.value = 1990;
      }
    }
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
    studentSignUpSchema,
    updatedStudentEnvironmentValues,
    postData,
    setLoading,
    apiFrom,
    skipFields
  );
  return {
    updatedStudentEnvironmentValues,
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
