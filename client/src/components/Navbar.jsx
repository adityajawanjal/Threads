import { GoHomeFill, GoSearch } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const one = useMediaQuery("(min-width:700px)");
  return (
    <Stack
      flexDirection={"row"}
      width={one ? "60%" : "100%"}
      justifyContent={"space-between"}
      px={"5px"}
    >
      <Link to={"/"}>
        <GoHomeFill size={one ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/search"}>
        <GoSearch size={one ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/edit"}>
        <FiEdit size={one ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/activity"}>
        <AiOutlineHeart size={one ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/profile"}>
        <AiOutlineUser size={one ? 28 : 24} color="#000" />
      </Link>
    </Stack>
  );
};

export default Navbar;
