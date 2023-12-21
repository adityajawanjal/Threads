import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

const ProfileLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _400 = useMediaQuery("(min-width:400px)");

  const { myself, darkMode } = useSelector((state) => state.services);
  const params = useParams();
  // console.log(myself?.followers.length);

  return (
    <Layout>
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
              {myself?.userName ? myself.userName : ""}
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography fontSize={_400 ? "1rem" : "0.7rem"}>
                {myself?.email ? myself.email : ""}
              </Typography>
              <Chip
                label="threads.net"
                size={_400 ? "medium" : "small"}
                sx={{ color: "gray" }}
              />
            </Stack>
          </Box>
          <Avatar
            src={myself?.profilePic ? myself.profilePic : ""}
            alt={myself?.userName ? myself.username : ""}
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
            {myself?.followers?.length > 0 ? (
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
                {myself?.followers?.length > 0
                  ? myself.followers.map((e) => {
                      return <Avatar alt="Remy Sharp" src="" />;
                    })
                  : null}
              </AvatarGroup>
            ) : (
              "No followers"
            )}
            {/* <Button>
              <Typography color={"gray"} fontSize={_400 ? "1rem" : "0.8rem"}>
                {myself
                  ? Array.isArray(myself.followers)
                    ? myself.followers.length
                    : 0
                  : 0}{" "}
                followers
              </Typography>
            </Button> */}
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
          <NavLink
            to={`/profile/threads/${params?.id}`}
            className={`link ${darkMode === "dark" ? "link-dark" : ""}`}
          >
            Threads
          </NavLink>
          <NavLink
            to={`/profile/replies/${params?.id}`}
            className={`link ${darkMode === "dark" ? "link-dark" : ""}`}
          >
            Replies
          </NavLink>
          <NavLink
            to={`/profile/reposts/${params?.id}`}
            className={`link ${darkMode === "dark" ? "link-dark" : ""}`}
          >
            Repost
          </NavLink>
        </Stack>
        <Outlet />
      </Stack>
    </Layout>
  );
};

export default ProfileLayout;
