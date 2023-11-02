import { GoHomeFill, GoSearch } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <Stack
      flexDirection={"row"}
      width={_700 ? "60%" : "100%"}
      justifyContent={"space-between"}
      px={"5px"}
      zIndex={1}
    >
      <Link to={"/"}>
        <GoHomeFill size={_700 ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/search"}>
        <GoSearch size={_700 ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/edit"}>
        <FiEdit size={_700 ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/activity"}>
        <AiOutlineHeart size={_700 ? 28 : 24} color="#000" />
      </Link>
      <Link to={"/profile"}>
        <AiOutlineUser size={_700 ? 28 : 24} color="#000" />
      </Link>
    </Stack>
  );
};

export default Navbar;
