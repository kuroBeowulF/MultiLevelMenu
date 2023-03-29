import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MenuContext } from "./../../Helpers/Context";
import styled from "@emotion/styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: "100px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  paddingTop: "5px",
};
const ModalTitle = styled("div")({
  width: "100%",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  color: "green",
});
const ModalInput = styled("input")({
  width: "200px",
  height: "40px",
});
const ModalButton = styled("button")({
  width: "100px",
  height: "40px",
  backgroundColor: "greenyellow",
  color: "white",
  border: "none",
  borderRadius: 10,
});

export const MenuModal = () => {
  const {
    modalInfo,
    setModalInfo,
    setMenuData,
    menuData,
    setSelectedMenuItem,
    selectedMenuItem,
    setShowAlert,
  } = React.useContext(MenuContext);
  console.log({ modalInfo, menuData, selectedMenuItem });
  const [inputValue, setInputValue] = React.useState("");
  const update = () => {
    return (
      <ModalInput
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    );
  };
  const remove = () => {
    return <div>Are you sure?!!</div>;
  };
  const add = () => {
    return (
      <ModalInput
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    );
  };
  const isThisItemInMenuList = (array, name) => {
    return array.some((item) => item.name === name);
  };
  const onConfirmModal = () => {
    const selectedItemData = menuData.find(
      (item) => item.name === selectedMenuItem
    );
    if (modalInfo?.mode === "Add") {
      if (isThisItemInMenuList(menuData, inputValue)) {
        setShowAlert({
          display: "flex",
          errorMessage: "there is an item with this name",
        });
      } else {
        if (!selectedMenuItem) {
          setMenuData((prev) => [
            ...prev,
            { name: inputValue, id: `${inputValue}`, lvl: 1 },
          ]);
        } else {
          if (selectedItemData?.lvl === 1) {
            const newMenuData = menuData;
            newMenuData.splice(
              menuData.indexOf(
                menuData.find((item) => item.name === selectedMenuItem)
              ) + 1,
              0,
              {
                name: inputValue,
                id: `${inputValue}`,
                lvl: 2,
                parent: selectedMenuItem,
              }
            );
            setMenuData(newMenuData);
          }
        }
      }
    }
    if (modalInfo?.mode === "Remove") {
      if (selectedItemData?.lvl === 2) {
        const newMenuData = menuData?.filter(
          (item) => item.name !== selectedItemData.name
        );
        setMenuData(newMenuData);
      } else if (selectedItemData?.lvl === 1) {
        const newMenuData = menuData?.filter(
          (item) =>
            item.name !== selectedItemData.name &&
            item.parent !== selectedItemData.name
        );
        setMenuData(newMenuData);
      }
    }
    if (modalInfo?.mode === "Update") {
      if (isThisItemInMenuList(menuData, inputValue)) {
        setShowAlert({
          display: "flex",
          errorMessage: "there is an item with this name",
        });
      } else {
        const newMenuData = menuData?.map((item) => {
          if (item.name === selectedItemData.name)
            return { ...item, name: inputValue };
          else if (item.parent === selectedItemData.name)
            return { ...item, parent: inputValue };
          else return item;
        });
        setMenuData(newMenuData);
      }
    }
    setModalInfo({ isOpen: false, mode: "" });
    setInputValue("");
    setSelectedMenuItem("");
  };

  return (
    <div>
      <Modal
        open={modalInfo?.isOpen}
        onClose={() => setModalInfo({ isOpen: false, mode: "" })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTitle>
            {modalInfo?.mode === "Add"
              ? "Add Item (click on a Top menu item to add subMenu )"
              : modalInfo?.mode === "Remove"
              ? "Remove a Menu Item"
              : "Update a Menu Item's Name"}
          </ModalTitle>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }}
          >
            {modalInfo?.mode === "Add"
              ? add()
              : modalInfo?.mode === "Remove"
              ? remove()
              : update()}
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "4px 0" }}
          >
            <ModalButton onClick={onConfirmModal}>Confirm</ModalButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
