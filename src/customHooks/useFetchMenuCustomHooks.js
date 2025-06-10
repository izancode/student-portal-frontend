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

  const options = ["Admin", "Faculty", "Student", "Father", "Mother"];
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormikMenuHook(menuSchema, menuInitialValues);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await allAdminMenuGetDataThunk();

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
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
