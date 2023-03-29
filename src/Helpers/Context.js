import React, { useState } from "react";
export const MenuContext = React.createContext();

const MenuContextProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, mode: "" });
  const [showAlert, setShowAlert] = useState({
    display: "none",
    errorMessage: "",
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  return (
    <MenuContext.Provider
      value={{
        menuData,
        setMenuData,
        modalInfo,
        setModalInfo,
        selectedMenuItem,
        setSelectedMenuItem,
        showAlert,
        setShowAlert,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContextProvider;
