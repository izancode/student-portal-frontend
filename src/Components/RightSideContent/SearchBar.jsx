import InputField from "../FormFilled/InputField";
import { useFormikSearchUserHook } from "../../customHooks/useFormikCustomHook";
import { searchInitialValues, searchSchema } from "../../utils/Formik/formik";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const SearchBar = ({ onGetSearchKey }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormikSearchUserHook(searchSchema, searchInitialValues);

  useEffect(() => {
    if (values.search_bar !== undefined) {
      onGetSearchKey(values.search_bar); // ✅ safe inside useEffect
    }
  }, [values.search_bar, onGetSearchKey]);
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        name="search_bar"
        inputType="input"
        placeholder="Search..."
        labelClassName="cursor-text absolute   appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        fieldClassName="block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full  text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer "
        values={values.search_bar}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.search_bar}
        touched={touched.search_bar}
      />
    </form>
  );
};
SearchBar.propTypes = {
  onGetSearchKey: PropTypes.func,
};
