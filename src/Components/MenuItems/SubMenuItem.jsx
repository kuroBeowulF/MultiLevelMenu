import styled from "@emotion/styled";
import { useContext } from "react";
import { MenuContext } from "./../../Helpers/Context";
const SubItem = styled("div")({
  width: "100px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "green",
  color: "#fff",
  margin: "3px 0 0 35px",
  borderRadius: "8px",
});
export const SubMenuItem = ({ name }) => {
  const { setSelectedMenuItem, selectedMenuItem } = useContext(MenuContext);

  return (
    <SubItem onClick={() => setSelectedMenuItem(name)}>
      {name}
      {name === selectedMenuItem && <span>&#9757;</span>}
    </SubItem>
  );
};
