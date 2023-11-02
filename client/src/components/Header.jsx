import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Grid container position={_700 ? "fixed" : "static"} px={1} top={0} zIndex={3}>
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
          <BiMenuAltRight size={36} color="gray" />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
