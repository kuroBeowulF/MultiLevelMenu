import { Alert, AlertTitle, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useContext } from "react";
import { MenuContext } from "./../../Helpers/Context";
const AlertConfirmButton = styled("button")({
  width: "120px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "orange",
  color: "green",
  borderRadius: "25px",
  margin: "10px",
  cursor: "pointer",
  border: "none",
});
export const AlertError = () => {
  const { setShowAlert, showAlert } = useContext(MenuContext);
  return (
    <Box
      display={showAlert?.display}
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgb(120, 120, 120, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 10000,
      }}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {showAlert?.errorMessage}
      </Alert>
      <AlertConfirmButton
        onClick={() => setShowAlert({ display: "none", errorMessage: "" })}
      >
        Got It
      </AlertConfirmButton>
    </Box>
  );
};
