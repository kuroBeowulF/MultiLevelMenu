import styled from "@emotion/styled";
import { Box } from "@mui/material";

const HeaderBox = styled("div")({
  width: "100%",
  height: "120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5px",
  color: "white",
  boxShadow: "1px 1px 2px black",
  backgroundColor: "#216132",
});
const Header = () => {
  return (
    <HeaderBox>
      <Box>
        <h3>MultiLvlMenu</h3>
      </Box>
      <Box>
        <h5>
          Before doing any action you should Select a Menu item instead of add ,
          but if you want add a subMenu you should do the same !!
        </h5>
      </Box>
    </HeaderBox>
  );
};
export default Header;
