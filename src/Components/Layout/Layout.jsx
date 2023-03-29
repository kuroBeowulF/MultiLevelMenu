import styled from "@emotion/styled";

const Box = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  marginTop: "10px",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "5px",
  color: "white",
});
const Layout = (props) => {
  return <Box>{props.children}</Box>;
};
export default Layout;
