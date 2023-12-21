import { Button, Grid, Menu, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from "./Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToken, toggleDarkMode } from "../redux/slice";

const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleToggleMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleAppearence = () => {
    handleToggleMode();
    handleClose();
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(addToken(null));
  };

  return (
    <>
      <Grid
        container
        position={_700 ? "fixed" : "static"}
        px={1}
        top={0}
        zIndex={3}
      >
        <Grid
          item
          xs={_700 ? 2 : 6}
          display={"flex"}
          justifyContent={_700 ? "flex-start" : "flex-end"}
          py={1}
          px={_700 ? 2 : 0}
        >
          <img src="/logo.png" alt="logo" id="logo" />
        </Grid>
        <Grid
          item
          xs={_700 ? 8 : 12}
          py={1.5}
          position={_700 ? "static" : "fixed"}
          bottom={0}
          left={0}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          className={"bg"}
          zIndex={2}
        >
          <Navbar />
        </Grid>
        <Grid
          item
          xs={_700 ? 2 : 6}
          display={"flex"}
          justifyContent={"flex-end"}
          py={1}
        >
          <Button onClick={handleClick}>
            <BiMenuAltRight size={36} color="gray" />
          </Button>
          <Menu
            anchorEl={openMenu}
            open={open}
            onClose={handleClose}
            elevation={5}
            sx={{
              "& .MuiMenuItem-root": {
                fontWeight: 600,
              },
            }}
          >
            <MenuItem onClick={handleAppearence}>Switch apperance</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Report a problem</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
