import { useContext } from "react";
import { MenuContext } from "./../../Helpers/Context";
import styled from "@emotion/styled";
const ToolsBarBox = styled("div")({
  width: "100%",
  height: "70px",
  display: "flex",
  justifyContent: "center",
});
const ToolsBarButton = styled("button")({
  width: "120px",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
  borderRadius: "25px",
  margin: "0 10px",
  cursor: "pointer",
});
const ToolsBar = () => {
  const { setShowAlert, setModalInfo, selectedMenuItem } =
    useContext(MenuContext);
  return (
    <ToolsBarBox>
      <ToolsBarButton
        onClick={() => setModalInfo({ isOpen: true, mode: "Add" })}
      >
        Add
      </ToolsBarButton>
      <ToolsBarButton
        onClick={() => {
          if (!selectedMenuItem)
            setShowAlert({
              display: "flex",
              errorMessage: "you should select a menu item first",
            });
          else setModalInfo({ isOpen: true, mode: "Remove" });
        }}
      >
        Remove
      </ToolsBarButton>
      <ToolsBarButton
        onClick={() => {
          if (!selectedMenuItem)
            setShowAlert({
              display: "flex",
              errorMessage: "you should select a menu item first",
            });
          else setModalInfo({ isOpen: true, mode: "Update" });
        }}
      >
        Change Name
      </ToolsBarButton>
    </ToolsBarBox>
  );
};
export default ToolsBar;
