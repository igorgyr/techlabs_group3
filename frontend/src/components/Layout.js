import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import background from "../images/background.svg";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: repeat-y;
  background-size: cover;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
`;

const SidebarContainer = styled.div`
  height: 100vh;
`;

const ContentContainer = styled.div`
  margin-left: 10px;
`;
