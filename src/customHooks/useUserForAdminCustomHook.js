import { useEffect, useState } from "react";
import { allUserGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks";
import { customToast } from "../utils/CustomAlert/cutomToast";

export const useUserForAdminCustomHook = () => {
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(2);
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allUserdata, setallUserdata] = useState("");

  const searchKeyFunction = (keyword) => {
    setKey(keyword);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLimit(2);
        setLoading(true);

        const AllUserDataForAdmin = await allUserGetDataThunk(
          pageNo,
          limit,
          key
        );

        if (isMounted) {
          setallUserdata(AllUserDataForAdmin.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        customToast("error", error.message);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [key, pageNo, limit]);

  const displayPageNo = Math.ceil(allUserdata?.only_Login_User_length / limit);

  const paginationClick = async (id) => {
    if (id < 1 || id > displayPageNo) {
      return;
    }
    setPageNo(id);
  };
  return {
    loading,
    allUserdata,
    paginationClick,
    pageNo,
    displayPageNo,
    searchKeyFunction,
    key,
  };
};
