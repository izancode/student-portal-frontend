import { useEffect, useState } from "react";
import {
  allMenuGetDataThunk,
  allAdminMenuGetDataThunk,
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
  const [selectRole, setSelectRole] = useState("faculty");

  const options = ["Admin", "Faculty", "Student", "Father", "Mother"];
  const {
    values,
    errors,
    touched,
    handleBlur,

    handleSubmit,
  } = useFormikMenuHook(menuSchema, menuInitialValues);
  const handleChangeRole = async (e) => {
    console.log("selected Role:", e.target.value.toLowerCase());
    setSelectRole(e.target.value.toLowerCase());
  };
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        console.log("selectRoleeee", selectRole);
        const data = await allAdminMenuGetDataThunk(selectRole);

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
    options,
    values,
    errors,
    touched,
    handleBlur,
    handleChangeRole,
    handleSubmit,
  };
};
