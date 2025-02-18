import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../Components/FormFilled/InputField";
import SelectBox from "../../../Components/FormFilled/SelectBox";
import ChooseFile from "../../../Components/FormFilled/ChooseFile";
import Textarea from "../../../Components/FormFilled/Textarea";
import MutlipleField from "../../../Components/FormFilled/MutlipleField";
import CustomButton from "../../../Components/Button/CustomButton";
import {
  arrayStudentField,
  arrayFacultyField,
} from "../../../utils/Formik/formik";
import { useDataCustomHook } from "../../../customHooks/useDataCustomHook";
import { LoaderInfinitySpin } from "../../../utils/Loader/Loader";
export const StudentForm = ({
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
}) => {
  const skipFields = [
    "student_father_name",
    "student_father_number",
    "student_father_email",
    "student_mother_name",
    "student_mother_number",
    "student_mother_email",
    "student_father_occupation",
    "student_mother_occupation",
    "in_case_of_guardian_please_specify_the_relationship",
  ];
  const {
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
  } = useDataCustomHook(dumyInitialValues, initialValues, postData, apiFrom);
  const updatedArray = arrayStudentField.map((material) => {
    if (skipFields.includes(material.name)) {
      return {
        ...material,
        labelClassName: material.labelClassName
          ? `${material.labelClassName} text-gray-400 select-none pointer-events-none`
          : `${material.labelClassName}`,
        fieldClassName: material.fieldClassName
          ? `${material.fieldClassName} text-gray-400 select-none pointer-events-none`
          : `${material.labelClassName}`,
        disabled: true,
      };
    }
    return material;
  });
  const mainArrayForField =
    apiFrom === "post"
      ? arrayStudentField
      : apiFrom === "update"
      ? updatedArray
      : null;
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoaderInfinitySpin />
      ) : (
        <div className="flex flex-wrap ">
          {mainArrayForField.map((field, fieldIndex) => {
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
                      disabled={field.disabled}
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
                      imageBUrl={values.student_profile_image}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={!!touched[field.name]}
                      apiFrom={apiFrom}
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
                      values={(() => {
                        const multipleFieldValues = {};
                        field.multipleFields.forEach((subField) => {
                          multipleFieldValues[subField.name] =
                            values[subField.name] || "";
                        });
                        return multipleFieldValues;
                      })()}
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
                      btnname={apiFrom === "update" ? "Save" : field.btnname}
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
export const FacultyForm = ({
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
}) => {
  const {
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
  } = useDataCustomHook(dumyInitialValues, initialValues, postData, apiFrom);
  const skipFields = [
    "student_first_name",
    "student_middle_name",
    "student_last_name",
    "student_email",
    "student_phone_number",
    "student_father_name",
    "student_father_number",
    "student_father_email",
    "student_mother_name",
    "student_mother_number",
    "student_mother_email",
    "student_father_occupation",
    "student_mother_occupation",
    "in_case_of_guardian_please_specify_the_relationship",
  ];
  const updatedArray = arrayFacultyField.map((material) => {
    if (skipFields.includes(material.name)) {
      return {
        ...material,
        labelClassName: material.labelClassName
          ? `${material.labelClassName} text-gray-400 select-none pointer-events-none`
          : `${material.labelClassName}`,
        fieldClassName: material.fieldClassName
          ? `${material.fieldClassName} text-gray-400 select-none pointer-events-none`
          : `${material.labelClassName}`,
        disabled: true,
      };
    }
    return material;
  });
  console.log(updatedArray);

  const mainArrayForField =
    apiFrom === "post"
      ? arrayStudentField
      : apiFrom === "update"
      ? updatedArray
      : null;
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoaderInfinitySpin />
      ) : (
        <div className="flex flex-wrap">
          {mainArrayForField.map((field, fieldIndex) => {
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
                      values={(() => {
                        const multipleFieldValues = {};
                        field.multipleFields.forEach((subField) => {
                          multipleFieldValues[subField.name] =
                            values[subField.name] || "";
                        });
                        return multipleFieldValues;
                      })()}
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
StudentForm.propTypes = {
  dumyInitialValues: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  postData: PropTypes.func,
  apiFrom: PropTypes.string.isRequired,
};
FacultyForm.propTypes = {
  dumyInitialValues: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  postData: PropTypes.func,
  apiFrom: PropTypes.string.isRequired,
};
