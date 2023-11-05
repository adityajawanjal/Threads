import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BsInstagram } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _400 = useMediaQuery("(min-width:400px)");
  return (
    <>
      <Stack
        justifyContent={"center"}
        maxWidth={"620px"}
        mx={"auto"}
        mt={_700 ? 14 : 0}
        px={2}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography fontWeight={700} fontSize={_400 ? "1.3rem" : "1rem"}>
              Salman_Khan
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography fontSize={_400 ? "1rem" : "0.7rem"}>
                Salman_Khan
              </Typography>
              <Chip
                label="threads.net"
                size={_400 ? "medium" : "small"}
                sx={{ color: "gray" }}
              />
            </Stack>
          </Box>
          <Avatar
            src=""
            alt="PK"
            sx={{
              width: _700 ? "80px" : _400 ? "60px" : "40px",
              height: _700 ? "80px" : _400 ? "60px" : "40px",
            }}
          />
        </Stack>
        <Typography my={2}>This is my bio.</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
            <AvatarGroup
              max={3}
              sx={{
                "& .MuiAvatar-root": {
                  width: 20,
                  height: 20,
                  fontSize: "0.6rem",
                },
              }}
            >
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Remy Sharp" src="" />
            </AvatarGroup>
            <Typography color={"gray"} fontSize={_400 ? "1rem" : "0.8rem"}>
              3 followers
            </Typography>
          </Stack>
          <BsInstagram size={32} />
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={5}
          gap={5}
          borderBottom={"2px solid"}
          pb={2}
          borderColor={"gray"}
        >
          <NavLink to={"/profile/threads"} className={"link"}>
            Threads
          </NavLink>
          <NavLink to={"/profile/replies"} className={"link"}>
            Replies
          </NavLink>
          <NavLink to={"/profile/reposts"} className={"link"}>
            Repost
          </NavLink>
        </Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export default ProfileLayout;
