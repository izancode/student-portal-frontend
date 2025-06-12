import SelectBox from "../../Components/FormFilled/SelectBox";
import CheckBox from "../../Components/FormFilled/CheckBox";
import { useSelector } from "react-redux";

import { useFetchMenuCustomHooksAdmin } from "../../customHooks/useFetchMenuCustomHooks";
export const MenuAccessed = () => {
  const {
    menu,
    options,
    values,
    errors,
    touched,
    handleRoleChange,
    handleBlur,
    handleSubmit,
    handleCheck,
  } = useFetchMenuCustomHooksAdmin();
  console.log("useFetchMenuCustomHooksAdmin menu", menu);
  const menuList = useSelector(
    (state) => state?.user?.adminMenuItems?.menuList
  );

  const userMenu = useSelector(
    (state) => state?.user?.adminMenuItems?.userMenu
  );
  console.log("useSelector menuuuu", menuList);
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
          fieldClassName="w-full bg-[#F0F0F0] font-semibold h-10 rounded-lg px-2.5 text-[12px] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          values={values.select_role_for_menu}
          handleChange={handleRoleChange}
          handleBlur={handleBlur}
          error={errors.select_role_for_menu}
          touched={touched.select_role_for_menu}
        />
      </div>
      <div className="col-span-12 lg:col-span-9   p-3 border h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <p>Check For Make the Menu visible</p>
        <div className="grid grid-cols-3 md:grid-cols-6  xl:grid-cols-8   gap-y-[20px]   w-full">
          {menuList?.map((item) => {
            const isSelected = userMenu.some(
              (selected) => selected._id === item._id
            );

            return (
              <div
                className={`relative w-[80px] h-[80px]   md:w-[90px] md:h-[90px] rounded-2xl flex flex-col justify-center border text-center hover:bg-[#342b7c] hover:text-white ${
                  isSelected ? "bg-[#342b7c] text-white" : ""
                }`}
                key={item._id}
              >
                <img
                  className=" w-[25px] h-[25px]   md:w-[30px] md:h-[30px] mx-auto"
                  src={item.imgSrc}
                  alt=""
                />
                <CheckBox
                  name={item.title}
                  img={item.imgSrc}
                  className={`min-w-full min-h-full top-0 left-0  opacity-0 cursor-[url('https://res.cloudinary.com/dlqylweq6/image/upload/v1749019567/download_1_gyjokj.png')_14_14,_auto] `}
                  checked={isSelected ?? false}
                  handleChange={() => handleCheck(item)}
                />
                <label className={`text-[10px] mt-2`} htmlFor={item.title}>
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};
