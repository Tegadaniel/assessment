import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Dashboard() {
    const [activated, setActive] = useState(true);

    const handleClick = () => {
        setActive(!activated);
      };

  return (
    <div>
      <Header />
        <SideBar 
        handleClick = {handleClick} 
        initialState= {activated} />
        <Content/>
    </div>
  );
}
