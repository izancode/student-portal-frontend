import { useEffect, useState } from "react";
import {
  allMenuGetDataThunk,
  allAdminMenuGetDataThunk,
  updateAdminMenuGetDataThunk,
} from "../Redux/ReduxThunk/fetchDataThunks.jsx";
import { useFormikMenuHook } from "../customHooks/useFormikCustomHook.js";
import { menuSchema, menuInitialValues } from "../utils/Formik/formik.jsx";
import { customToast } from "../utils/CustomAlert/cutomToast.jsx";

export const useFetchMenuCustomHooks = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await allMenuGetDataThunk();
        if (isMounted) {
          setMenu(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    menu,
  };
};
export const useFetchMenuCustomHooksAdmin = () => {
  const [menu, setMenu] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const options = ["Admin", "Faculty", "Student", "Father", "Mother"];

  const handleRoleChange = async (e) => {
    const role = e.target.value.toLowerCase();

    handleChange(e);

    setSelectedRole(role);
  };

  const handleCheck = async (item) => {
    console.log("clecked.................");
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
        const updateData = await allAdminMenuGetDataThunk(selectedRole);
        console.log("updateData", updateData);
        setMenu(updateData.data);
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
        const data = await allAdminMenuGetDataThunk(selectedRole);
        console.log("data", data);

        if (isMounted) {
          setMenu(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [selectedRole]);

  return {
    menu,
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
