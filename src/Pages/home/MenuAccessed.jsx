import SelectBox from "../../Components/FormFilled/SelectBox";
import CheckBox from "../../Components/FormFilled/CheckBox";
import { useFormikMenuHook } from "../../customHooks/useFormikCustomHook";
import { menuSchema, menuInitialValues } from "../../utils/Formik/formik";

import { useFetchMenuCustomHooks } from "../../customHooks/useFetchMenuCustomHooks";
export const MenuAccessed = () => {
  const options = ["Admin", "Faculty", "Student", "Father", "Mother"];
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormikMenuHook(menuSchema, menuInitialValues);
  const { menu } = useFetchMenuCustomHooks();
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2 "
    >
      <div className="col-span-12 lg:col-span-3  p-3 border">
        <p>Select Role For Menu Access</p>
        <SelectBox
          name="select_role_for_menu"
          placeholder="Select Role for Menu"
          options={options}
          fieldClassName="w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          values={values.select_role_for_menu}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.select_role_for_menu}
          touched={touched.select_role_for_menu}
        />
      </div>
      <div className="col-span-12 lg:col-span-9   p-3 border h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <p>Check For Make the Menu visible</p>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-y-[15px] gap-x-[10px]  sm:gap-y-[10px] sm:gap-x-[30px] lg:gap-y-[10px] lg:gap-x-[4rem] w-full">
          {menu.map((item) => (
            <div
              className={`relative w-[120px] h-[120px]  rounded-lg flex flex-col justify-center border text-center ${
                item._id === "683c26f2ec71a511fc6b7467" ||
                item._id === "683c26e2ec71a511fc6b7465"
                  ? "bg-[#342b7c] text-white"
                  : ""
              }`}
              key={item._id}
            >
              <img
                className="w-[55px] h-[55px] mx-auto"
                src={item.imgSrc}
                alt=""
              />
              <CheckBox
                name={item.title}
                img={item.imgSrc}
                className={`min-w-full min-h-full top-0 left-0 opacity-100 cursor-[url('https://res.cloudinary.com/dlqylweq6/image/upload/v1749019567/download_1_gyjokj.png')_14_14,_auto]`}
              />
              <label
                className={`text-[10px]  lg:text-xs mt-2`}
                htmlFor={item.title}
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
