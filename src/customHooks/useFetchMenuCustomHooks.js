import { useEffect, useState } from "react";
import {
  allMenuGetDataThunk,
  allAdminMenuGetDataThunk,
  updateAdminMenuGetDataThunk,
} from "../Redux/ReduxThunk/fetchDataThunks.jsx";
import { useFormikMenuHook } from "../customHooks/useFormikCustomHook.js";
import { menuSchema, menuInitialValues } from "../utils/Formik/formik.jsx";

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
    console.log("eee", e.target.name);

    handleChange(e);

    setSelectedRole(role);
  };

  const handleCheck = async (item) => {
    console.log("handleCheck", item._id);
    console.log("selectedRole", selectedRole);

    try {
      const data = await updateAdminMenuGetDataThunk({
        _id: item._id,
        role: selectedRole,
      });

      console.log(data);
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
