import styled from "@emotion/styled";
import { useContext } from "react";
import { MenuContext } from "../../Helpers/Context";
import MenuItem from "./MenuItem";
import { SubMenuItem } from "./SubMenuItem";

const MenuBox = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const MenuContent = () => {
  const { menuData } = useContext(MenuContext);
  return (
    <MenuBox>
      {menuData?.map((item, index) => {
        if (item?.lvl === 1)
          return <MenuItem name={item.name} key={`${item.name}+${index}`} />;
        else
          return <SubMenuItem name={item.name} key={`${item.name}+${index}`} />;
      })}
    </MenuBox>
  );
};
export default MenuContent;
