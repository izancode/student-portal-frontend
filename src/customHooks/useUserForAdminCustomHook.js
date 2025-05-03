import { useEffect, useState } from "react";
import { allUserGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks";
import { customToast } from "../utils/CustomAlert/cutomToast";
//useUserForAdmin
export const useUserForAdminCustomHook = () => {
  const [pageNo, setPageNo] = useState(1);
  const [allUserdata, setallUserdata] = useState("");
  const [loading, setLoading] = useState(false);
  const limit = 2;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const AllUserDataForAdmin = await allUserGetDataThunk(pageNo, limit);

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
  }, [pageNo]);

  const displayPageNo = Math.ceil(
    allUserdata?.number_Of_Login_User?.length / limit
  );

  const displayPageNoInBox = Array.from({ length: displayPageNo });
  const paginationClick = async (id) => {
    if (id < 1 || id > displayPageNo) {
      return;
    }
    setPageNo(id);
  };
  return {
    loading,
    allUserdata,
    displayPageNoInBox,
    paginationClick,
    pageNo,
    displayPageNo,
  };
};
