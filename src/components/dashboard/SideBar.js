import React from "react";
import { Text, Box } from "@chakra-ui/react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "./Styles.css";
import { FaCreditCard } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = ({ handleClick, initialState }) => {
  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarContent>
            <Menu>
              <Box as="div">
                <MenuItem
                  onClick={initialState ? undefined : handleClick}
                  active={initialState ? true : false}
                  icon={<FiHome style={initialState ? {color: "white"}: {color: "black"}} />}
                >
                  <Text
                    color={initialState ? "white" : "black"}
                    fontSize="sm"
                    ml="13px"
                  >
                    Dashboard
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="30px">
                <MenuItem
                  onClick={initialState ? handleClick : undefined}
                  active={initialState ? false : true}
                  icon={<FaCreditCard style={initialState ? {color: "black"}: {color: "white"}}/>}
                >
                  <Text
                    color={initialState ? "black" : "white"}
                    fontSize="sm"
                    ml="13px"
                  >
                    My cards
                  </Text>
                </MenuItem>
              </Box>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
              <MenuItem icon={<FiLogOut style={{color: "#FF6464"}}/>}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
