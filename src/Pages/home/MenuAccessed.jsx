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
    <form onSubmit={handleSubmit} className="grid grid-cols-12 w-full  ">
      <div className="col-span-3   p-3 border">
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
      <div className="col-span-9   p-3 border h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <p>Check For Make the Menu visible</p>
        <div className="grid grid-cols-12">
          {menu.map((item) => (
            <div className="col-span-3 p-5" key={item._id}>
              <CheckBox
                name={item.title}
                img={item.imgSrc}
                className="w-full h-full absolute top-0"
              />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
