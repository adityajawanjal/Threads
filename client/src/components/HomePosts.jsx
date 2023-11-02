import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
// import { createStyles, makeStyles } from "@mui/material/styles";

const HomePosts = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _350 = useMediaQuery("(min-width:350px)");
  const _500 = useMediaQuery("(min-width:500px)");
  return (
    <>
      <Grid
        container
        maxWidth={"620px"}
        mx={"auto"}
        justifyContent={"center"}
        my={2}
        gap={_300 ? 0 : 1}
        pb={3}
        className="my-border"
      >
        <Grid item xs={_500 ? 1 : _350 ? 1.5 : 2}>
          <Stack flexDirection={"column"} alignItems={"center"} height={"100%"}>
            <Badge
              badgeContent={"+"}
              color="primary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "black",
                  color: "white",
                  border: "1.5px solid white",
                  position: "relative",
                  right: "30px",
                  top: "13px",
                },
              }}
            >
              <Avatar
                src="https://i0.wp.com/www.desimag.co.uk/wp-content/uploads/2014/01/salman-khan-jai-ho.jpg"
                alt="salman khan"
              />
            </Badge>
            <Box
              height={"100%"}
              mt={1}
              width={"0.1px"}
              border={"1px solid gray"}
            ></Box>
            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": {
                  width: 16,
                  height: 16,
                  fontSize: "0.5rem",
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
          </Stack>
        </Grid>
        <Grid item xs={_500 ? 10.5 : _350 ? 10 : _300 ? 9.5 : 8}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography
              variant="h2"
              fontWeight={"700"}
              fontSize={_300 ? "1rem" : "0.6rem"}
            >
              salman_khan
            </Typography>
            <Stack flexDirection={"row"} alignItems={"flex-start"} gap={2}>
              <Typography
                variant="subtitle2"
                fontSize={_300 ? "1rem" : "0.6rem"}
                color={"gray"}
              >
                24min
              </Typography>
              <FiMoreHorizontal size={_300 ? 20 : 16} />
            </Stack>
          </Stack>
          <Typography variant="subtitle2" fontSize={_300 ? "1rem" : "0.6rem"}>
            How is your day going folks ! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur, doloremque!
          </Typography>
          <img
            src="https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?pid=ImgDet&rs=1"
            alt="bg"
            width={"100%"}
            height={"auto"}
          />
          <Stack flexDirection={"row"} mt={1} gap={_350 ? 2 : 1}>
            <AiOutlineHeart size={_350 ? 28 : _300 ? 24 : 20} />
            <FaRegComment size={_350 ? 28 : _300 ? 24 : 20} />
            <AiOutlineRetweet size={_350 ? 28 : _300 ? 24 : 20} />
            <BsSend size={_350 ? 28 : _300 ? 24 : 20} />
          </Stack>
          <Stack flexDirection={"row"} mt={1} gap={1}>
            <Typography fontSize={_350 ? "1rem" : "0.7rem"} color={"gray"}>
              44 replies
            </Typography>
            <span>.</span>
            <Typography fontSize={_350 ? "1rem" : "0.7rem"} color={"gray"}>
              2105 likes
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePosts;
