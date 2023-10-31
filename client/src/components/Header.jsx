import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
    const one = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Grid container p={1}>
        <Grid
          item
          xs={one ? 2 : 6}
          display={"flex"}
          justifyContent={one ? "flex-start" : "flex-end"}
          py={1}
          px={one ? 2 : 0}
        >
          <img src="/logo.png" alt="logo" id="logo" />
        </Grid>
        <Grid
          item
          xs={one ? 8 : 12}
          py={1}
          position={one ? "static" : "fixed"}
          bottom={0}
          width={"95%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Navbar />
        </Grid>
        <Grid
          item
          xs={one ? 2 : 6}
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
