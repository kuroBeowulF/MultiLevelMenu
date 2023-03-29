import styled from "@emotion/styled";
import { MenuContext } from "./../../Helpers/Context";
import { useContext } from "react";
const Item = styled("div")({
  width: "120px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "blue",
  borderRadius: "10px",
  color: "#fff",
  margin: "3px 0 0 5px",
});
const MenuItem = ({ name }) => {
  const { setSelectedMenuItem, selectedMenuItem } = useContext(MenuContext);
  return (
    <Item onClick={() => setSelectedMenuItem(name)}>
      {name}
      {name === selectedMenuItem && <span>&#9757;</span>}
    </Item>
  );
};
export default MenuItem;
