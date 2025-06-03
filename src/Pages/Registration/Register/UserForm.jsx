import React from "react";
import { useSelector } from "react-redux";
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
  arrayAdminField,
} from "../../../utils/Formik/formik";
import { useDataCustomHook } from "../../../customHooks/useDataCustomHook";
import { LoaderInfinitySpin } from "../../../utils/Loader/Loader";
export const StudentForm = ({
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
  normal_User_Role,
  userId,
}) => {
  const role = useSelector(
    (state) => normal_User_Role || state.user?.userDetail?.role
  );

  let skipFields = [];
  if (role === "student") {
    skipFields = [
      "_id",
      "student_father_name",
      "student_father_number",
      "student_father_email",
      "student_mother_name",
      "student_mother_number",
      "student_mother_email",

      "mother_profile_image",
      "father_profile_image",
      "student_father_occupation",
      "student_mother_occupation",
      "in_case_of_guardian_please_specify_the_relationship",
      "image_public_id",
      "__v",
      "createdAt",
      "updatedAt",
    ];
  } else if (role === "faculty") {
    skipFields = [
      "_id",
      "profile_image",
      "image_public_id",
      "__v",
      "createdAt",
      "updatedAt",
    ];
  } else if (role === "admin") {
    skipFields = [
      "_id",
      "profile_image",
      "image_public_id",
      "__v",
      "createdAt",
      "updatedAt",
    ];
  } else if (role === "father") {
    skipFields = [
      "_id",
      "student_school",
      "student_programs",
      "student_degree",
      "student_specialisation",
      "student_how_did_you_hear_about_us",
      "profile_image",
      "first_name",
      "middle_name",
      "last_name",
      "nationality",
      "address",
      "apartment",
      "country",
      "state",
      "city",
      "postal_code",
      "phone_number",
      "email",
      "DD",
      "MM",
      "YYYY",
      "gender",
      "student_blood_group",
      "student_caste_category",
      "instagram_url",
      "linkedin_url",
      "previous_college_grade_10_details",
      "previous_college_percentage_grade_secured",
      "previous_college_marks_secured",
      "previous_college_marks_out_of",
      "previous_college_academic_year",
      "previous_college_examination_board",
      "previous_college_state",
      "previous_college_city",
      "previous_college_grade_12th_school_details",
      "previous_college_name",
      "student_mother_name",
      "student_mother_occupation",
      "student_mother_number",
      "student_mother_email",
      "mother_profile_image",
      "statement_of_purpose",
      "__v",
      "createdAt",
      "updatedAt",
    ];
  } else if (role === "mother") {
    skipFields = [
      "_id",
      "student_school",
      "student_programs",
      "student_degree",
      "student_specialisation",
      "student_how_did_you_hear_about_us",
      "profile_image",
      "first_name",
      "middle_name",
      "last_name",
      "nationality",
      "address",
      "apartment",
      "country",
      "state",
      "city",
      "postal_code",
      "phone_number",
      "email",
      "DD",
      "MM",
      "YYYY",
      "gender",
      "student_blood_group",
      "student_caste_category",
      "instagram_url",
      "linkedin_url",
      "previous_college_grade_10_details",
      "previous_college_percentage_grade_secured",
      "previous_college_marks_secured",
      "previous_college_marks_out_of",
      "previous_college_academic_year",
      "previous_college_examination_board",
      "previous_college_state",
      "previous_college_city",
      "previous_college_grade_12th_school_details",
      "previous_college_name",
      "student_father_name",
      "student_father_occupation",
      "student_father_number",
      "student_father_email",
      "father_profile_image",
      "statement_of_purpose",
      "__v",
      "createdAt",
      "updatedAt",
    ];
  }

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
  } = useDataCustomHook(
    dumyInitialValues,
    initialValues,
    postData,
    apiFrom,
    skipFields,
    role,
    userId
  );

  const updatedArray = arrayStudentField.map((material) => {
    const underDate = material.multipleFields;

    // Check if multipleFields exists
    const updatedMultipleFields = underDate
      ? underDate.map((dateName) =>
          skipFields.includes(dateName.name)
            ? {
                ...dateName,
                labelClassName: dateName.labelClassName
                  ? `${dateName.labelClassName} text-gray-400 select-none pointer-events-none`
                  : `${dateName.labelClassName}`,
                inputClass: dateName.inputClass
                  ? `${dateName.inputClass} text-gray-400 select-none pointer-events-none`
                  : `${dateName.inputClass}`,
                disabled: true,
              }
            : dateName
        )
      : undefined;

    if (skipFields.includes(material.name)) {
      return {
        ...material,
        multipleFields: updatedMultipleFields,
        labelClassName: material.labelClassName
          ? `${material.labelClassName} text-gray-400 select-none pointer-events-none`
          : `${material.labelClassName}`,
        fieldClassName: material.fieldClassName
          ? `${material.fieldClassName} text-gray-400 select-none pointer-events-none`
          : `${material.fieldClassName}`,
        buttonClassName: material.buttonClassName
          ? `${material.buttonClassName} text-gray-400 select-none pointer-events-none`
          : `${material.buttonClassName}`,
        disabled: true,
      };
    }

    return {
      ...material,
      multipleFields: updatedMultipleFields,
    };
  });
  const mainArrayForField =
    apiFrom === "post"
      ? arrayStudentField
      : apiFrom === "update" || apiFrom === "admin-update"
      ? updatedArray
      : null;

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoaderInfinitySpin heightClass="h-96" />
      ) : (
        <div className="flex flex-wrap ">
          {mainArrayForField.map((field, fieldIndex) => {
            console.log(field.options);
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
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      error={errors[field.name]}
                      touched={!!touched[field.name]}
                      apiFrom={apiFrom}
                      query={{ normal_User_Role, userId }}
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
                      btnname={
                        apiFrom === "update" || apiFrom === "admin-update"
                          ? "Save"
                          : field.btnname
                      }
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
  normal_User_Role,
  userId,
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
  } = useDataCustomHook(
    dumyInitialValues,
    initialValues,
    postData,
    apiFrom,
    undefined,
    normal_User_Role,
    userId
  );

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoaderInfinitySpin heightClass="h-96" />
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
                      apiFrom={apiFrom}
                      query={{ normal_User_Role, userId }}
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
                      btnname={
                        apiFrom === "update" || apiFrom === "admin-update"
                          ? "Save"
                          : field.btnname
                      }
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

export const AdminForm = ({
  dumyInitialValues,
  initialValues,
  postData,
  apiFrom,
  normal_User_Role,
  userId,
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
  } = useDataCustomHook(
    dumyInitialValues,
    initialValues,
    postData,
    apiFrom,
    undefined,
    normal_User_Role,
    userId
  );

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoaderInfinitySpin heightClass="h-96" />
      ) : (
        <div className="flex flex-wrap">
          {arrayAdminField.map((field, fieldIndex) => {
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
                      apiFrom={apiFrom}
                      query={{ normal_User_Role, userId }}
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
                      btnname={
                        apiFrom === "update" || apiFrom === "admin-update"
                          ? "Save"
                          : field.btnname
                      }
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
  normal_User_Role: PropTypes.string.isRequired,
  userId: PropTypes.string,
};
FacultyForm.propTypes = {
  dumyInitialValues: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  postData: PropTypes.func,
  apiFrom: PropTypes.string.isRequired,
  normal_User_Role: PropTypes.string.isRequired,
  userId: PropTypes.string,
};
AdminForm.propTypes = {
  dumyInitialValues: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  postData: PropTypes.func,
  apiFrom: PropTypes.string.isRequired,
  normal_User_Role: PropTypes.string.isRequired,
  userId: PropTypes.string,
};
