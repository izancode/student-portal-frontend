import { useEffect, useState } from "react";
import { allMenuGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks.jsx";

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
