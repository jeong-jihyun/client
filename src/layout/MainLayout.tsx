import React from "react";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";
import MenuBarContainer from "../containers/common/MenuBarContainer";
import Footer from "../components/common/Footer";

type WrapperProp = {
  children: React.ReactElement;
};
function MainLayout({ children }: WrapperProp) {
  return (
    <div style={{ textAlign: "center" }}>
      <MainHeaderContainer />
      <MenuBarContainer />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
