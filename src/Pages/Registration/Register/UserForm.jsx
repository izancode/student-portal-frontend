import React from "react";

import InputField from "../../../Components/FormFilled/InputField";
import SelectBox from "../../../Components/FormFilled/SelectBox";
import ChooseFile from "../../../Components/FormFilled/ChooseFile";
import Textarea from "../../../Components/FormFilled/Textarea";
import MutlipleField from "../../../Components/FormFilled/MutlipleField";
import CustomButton from "../../../Components/Button/CustomButton";
import { useFormikSignHook } from "../../../customHooks/useFormikCustomHook";
import { useRef } from "react";
import {
  studentSignUpSchema,
  studentInitialValues,
  studentDumyInitialValues,
  arrayStudentField,
  facultySignUpSchema,
  facultyInitialValues,
  facultyDumyInitialValues,
  arrayFacultyField,
} from "../../../utils/Formik/formik";

import {
  studentPostData,
  facultyPostData,
} from "../../../Redux/ReduxThunk/registerationThunks";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
const isProduction = import.meta.env.MODE === "production";
const studentEnvironmentValues = isProduction
  ? studentInitialValues
  : studentDumyInitialValues;
const facultyEnvironmentValues = isProduction
  ? facultyInitialValues
  : facultyDumyInitialValues;

export const StudentForm = () => {
  const waitingForPostApi = useSelector((state) => state.student.status);

  const inputRefs = useRef([]);

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
    studentEnvironmentValues,
    studentPostData
  );

  const handleInputChange = (e, fieldKey) => {
    if (/^[A-Za-z]*$/.test(e.target.value)) {
      e.target.value = "";
    }
    if (fieldKey === 0 && e.target.id === "dd") {
      if (e.target.value > 31) {
        e.target.value = 31;
      }
    } else if (fieldKey === 1 && e.target.id === "mm") {
      console.log("Month", e.target.value);
      if (e.target.value > 12) {
        e.target.value = 12;
      }
    } else if (fieldKey === 2 && e.target.id === "yyyy") {
      if (e.target.value > 2000) {
        e.target.value = 2000;
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const { value } = e.target;
    if (e.key === "Backspace" && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {waitingForPostApi === "loading" ? (
        <div className="flex justify-center h-96 items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#1c22c1"
            ariaLabel="infinity-spin-loading"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <div className="flex flex-wrap ">
          {arrayStudentField.map((field, fieldIndex) => {
            return (
              <React.Fragment key={`${field.name}-${fieldIndex}`}>
                {field.type === "heading" ? (
                  <div className={field.divclassName}>
                    <h2 className={field.className}>{field.heading}</h2>
                  </div>
                ) : field.type === "input" ? (
                  <div className={field.divclassName}>
                    <InputField
                      name={field.name}
                      placeholder={field.placeholder}
                      fieldClassName={field.fieldClassName}
                      inputType={field.inputType}
                      labelClassName={field.labelClassName}
                      pattern={field.pattern}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "select" ? (
                  <div className={field.divclassName}>
                    <SelectBox
                      name={field.name}
                      placeholder={field.placeholder}
                      options={field.options}
                      fieldClassName={field.fieldClassName}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "file" ? (
                  <div className={field.divclassName}>
                    <ChooseFile
                      name={field.name}
                      profileImage={field.profileImage}
                      type={field.type}
                      fieldClassName={field.fieldClassName}
                      buttonClassName={field.buttonClassName}
                      values={values[field.name]}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={!!touched[field.name]}
                    />
                  </div>
                ) : field.type === "textarea" ? (
                  <div className={field.divclassName}>
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      fieldClassName={field.fieldClassName}
                      labelClassName={field.labelClassName}
                      rows={field.rows}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "multiple" ? (
                  <div className={field.divclassName}>
                    <MutlipleField
                      Allfields={field.multipleFields}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                      keyDown={handleKeyDown}
                      handleInputChange={handleInputChange}
                      inputRefs={inputRefs}
                    />
                  </div>
                ) : (
                  <div className={field.className}>
                    <CustomButton
                      btnname={field.btnname}
                      type={field.btnType}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </form>
  );
};

export const FacultyForm = () => {
  const waitingForPostApi = useSelector((state) => state.faculty.status);
  const inputRefs = useRef([]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormikSignHook(
    facultySignUpSchema,
    facultyEnvironmentValues,
    facultyPostData
  );
  const handleInputChange = (e, fieldKey) => {
    if (/^[A-Za-z]*$/.test(e.target.value)) {
      e.target.value = "";
    }
    if (fieldKey === 0 && e.target.id === "dd") {
      if (e.target.value > 31) {
        e.target.value = 31;
      }
    } else if (fieldKey === 1 && e.target.id === "mm") {
      console.log("Month", e.target.value);
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
  return (
    <form onSubmit={handleSubmit}>
      {waitingForPostApi === "loading" ? (
        <div className="flex justify-center h-96 items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#1c22c1"
            ariaLabel="infinity-spin-loading"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {arrayFacultyField.map((field, fieldIndex) => {
            return (
              <React.Fragment key={`${field.name}-${fieldIndex}`}>
                {field.type === "heading" ? (
                  <div className={field.divclassName}>
                    <h2 className={field.className}>{field.heading}</h2>
                  </div>
                ) : field.type === "input" ? (
                  <div className={field.divclassName}>
                    <InputField
                      name={field.name}
                      placeholder={field.placeholder}
                      fieldClassName={field.fieldClassName}
                      inputType={field.inputType}
                      labelClassName={field.labelClassName}
                      pattern={field.pattern}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "select" ? (
                  <div className={field.divclassName}>
                    <SelectBox
                      name={field.name}
                      placeholder={field.placeholder}
                      options={field.options}
                      fieldClassName={field.fieldClassName}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "file" ? (
                  <div className={field.divclassName}>
                    <ChooseFile
                      name={field.name}
                      profileImage={field.profileImage}
                      type={field.type}
                      fieldClassName={field.fieldClassName}
                      buttonClassName={field.buttonClassName}
                      values={values[field.name]}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={!!touched[field.name]}
                    />
                  </div>
                ) : field.type === "textarea" ? (
                  <div className={field.divclassName}>
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      fieldClassName={field.fieldClassName}
                      labelClassName={field.labelClassName}
                      rows={field.rows}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                    />
                  </div>
                ) : field.type === "multiple" ? (
                  <div className={field.divclassName}>
                    <MutlipleField
                      Allfields={field.multipleFields}
                      values={values[field.name]}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                      keyDown={handleKeyDown}
                      handleInputChange={handleInputChange}
                      inputRefs={inputRefs}
                    />
                  </div>
                ) : (
                  <div className={field.className}>
                    <CustomButton
                      btnname={field.btnname}
                      type={field.btnType}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </form>
  );
};
