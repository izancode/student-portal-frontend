import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateAdminMenuGetDataThunk,
  allAdminMenuGetDataThunk2,
} from "../Redux/ReduxThunk/fetchDataThunks.jsx";
import { useFormikMenuHook } from "../customHooks/useFormikCustomHook.js";
import { menuSchema, menuInitialValues } from "../utils/Formik/formik.jsx";
import { customToast } from "../utils/CustomAlert/cutomToast.jsx";
import { menuGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks.jsx";
export const useFetchMenuCustomHooksAdmin = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const dispatch = useDispatch();
  const options = ["Admin", "Faculty", "Student", "Father", "Mother"];

  const handleRoleChange = async (e) => {
    const role = e.target.value.toLowerCase();
    handleChange(e);
    setSelectedRole(role);
  };

  const handleCheck = async (item) => {
    if (!selectedRole) {
      return customToast("error", "Please select a role first");
    }
    try {
      const data = await updateAdminMenuGetDataThunk({
        _id: item._id,
        role: selectedRole,
      });
      console.log("data.status", data.data.status);
      if (data.data.status) {
        dispatch(allAdminMenuGetDataThunk2(selectedRole));
        dispatch(menuGetDataThunk());

        customToast("success", data.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormikMenuHook(menuSchema, menuInitialValues);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (isMounted) {
          dispatch(allAdminMenuGetDataThunk2(selectedRole));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [selectedRole, dispatch]);
  return {
    options,
    values,
    errors,
    touched,
    handleRoleChange,
    handleBlur,
    handleSubmit,
    handleCheck,
  };
};
