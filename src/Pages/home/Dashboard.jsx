import { Rheader } from "../../Components/RightSideContent/Rheader";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../../Redux/Slice/toggleSlice";
import {
  HeaderLayout,
  SidebarMenuLayout,
} from "../../Components/Layout/Layout";
export const Profile = () => {
  const dispatch = useDispatch();
  return (
    <HeaderLayout>
      <SidebarMenuLayout>
        <div
          className="col-span-4  lg:col-span-10 "
          onClick={() => dispatch(closeSideBar())}
        >
          <Rheader />
        </div>
      </SidebarMenuLayout>
    </HeaderLayout>
  );
};

HeaderLayout.propTypes = {
  children: PropTypes.node,
};
SidebarMenuLayout.propTypes = {
  children: PropTypes.node,
};
