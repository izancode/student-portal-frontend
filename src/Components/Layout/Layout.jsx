import Header from "../../Components/include/Header";
import { HomeMenu, SideBarMenu } from "../../Components/Menu/MenuLayout";
import { Rheader } from "../../Components/RightSideContent/Rheader";
import { closeSideBar } from "../../Redux/Slice/toggleSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export const HeaderLayout = ({ children }) => {
  return (
    <div className="pt-[50px] lg:pt-[60px] bg-[#FAFAFA] relative lg:static">
      <Header />
      {children}
    </div>
  );
};

export const SidebarMenuLayout = ({ children }) => {
  return (
    <div className="lg:max-w-[1920px] mx-auto h-[calc(100vh-50px)] lg:h-[calc(100vh-60px)] flex items-top">
      <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-y-[0px] lg:gap-x-[0px] w-full ">
        <SideBarMenu />
        {children}
      </div>
    </div>
  );
};

export const Rcontent = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <HeaderLayout>
      <SidebarMenuLayout>
        <div
          className="col-span-4  lg:col-span-10 "
          onClick={() => dispatch(closeSideBar())}
        >
          <Rheader />
          {children}
        </div>
      </SidebarMenuLayout>
    </HeaderLayout>
  );
};
export const MenuPage = () => {
  console.log("MenuPage render");
  return (
    <HeaderLayout>
      <HomeMenu />
    </HeaderLayout>
  );
};

HeaderLayout.propTypes = {
  children: PropTypes.node,
};
SidebarMenuLayout.propTypes = {
  children: PropTypes.node,
};
Rcontent.propTypes = {
  children: PropTypes.node,
};
