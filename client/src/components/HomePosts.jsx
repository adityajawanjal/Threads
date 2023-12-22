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
import { FaRegComment, FaHeart } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import {
  useGetPostQuery,
  useLikePostMutation,
  useRepostMutation,
} from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateAllPosts } from "../redux/slice";

const HomePosts = ({ post }) => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _350 = useMediaQuery("(min-width:350px)");
  const _500 = useMediaQuery("(min-width:500px)");

  const [liked, setLiked] = useState();
  const dispatch = useDispatch();

  const [likePost, likePostData] = useLikePostMutation();
  const [repost, repostdata] = useRepostMutation();

  const { myself, combinePosts } = useSelector((state) => state.services);

  const checkLiked = () => {
    const element = combinePosts?.filter((e) => e._id === post?._id);
    if (Array.isArray(element)) {
      const ele = element[0]?.likes;
      if (ele) {
        if (ele?.length > 0) {
          const isLiked = ele?.findIndex((e) => e._id == myself?._id);
          if (isLiked !== -1) {
            setLiked(true);
            return;
          }
          setLiked(false);
        }
      }
    }
  };

  const handleLike = async () => {
    await likePost(post?._id);
  };

  const handleRepost = async () => {
    const res = await repost(post?._id);
    if (res?.data) {
      alert(res.data.msg);
    }
  };

  useEffect(() => {
    if (likePostData?.isSuccess) {
      dispatch(updateAllPosts(likePostData.data?.post));
      setLiked((pre) => !pre);
    }
  }, [likePostData?.data]);

  useEffect(() => {
    checkLiked();
  }, []);

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
                  cursor: "pointer",
                },
              }}
            >
              <Avatar src={post?.user.profilePic} alt={post?.user.userName} />
            </Badge>
            <Box
              height={"100%"}
              mt={1}
              width={"0.1px"}
              border={"1px solid gray"}
            ></Box>
            {post?.comments.length > 0 && (
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
                {post?.comments.map((e) => {
                  return <Avatar alt="Remy Sharp" src="" />;
                })}
              </AvatarGroup>
            )}
          </Stack>
        </Grid>
        <Grid item xs={_500 ? 10.5 : _350 ? 10 : _300 ? 9.5 : 8}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography
              variant="h2"
              fontWeight={"700"}
              fontSize={_300 ? "1rem" : "0.6rem"}
            >
              {post ? (post.user ? post.user.userName : "") : ""}
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
            {post?.text ? post.text : ""}
          </Typography>
          {post?.media && (
            <img src={post.media} alt="bg" width={"100%"} height={"auto"} />
          )}
          <Stack
            flexDirection={"row"}
            mt={1}
            gap={_350 ? 2 : 1}
            ml={1}
            sx={{ cursor: "pointer" }}
          >
            {liked ? (
              <FaHeart size={_350 ? 28 : _300 ? 24 : 20} onClick={handleLike} />
            ) : (
              <AiOutlineHeart
                size={_350 ? 28 : _300 ? 24 : 20}
                onClick={handleLike}
              />
            )}

            <FaRegComment size={_350 ? 28 : _300 ? 24 : 20} />
            <AiOutlineRetweet
              size={_350 ? 28 : _300 ? 24 : 20}
              onClick={handleRepost}
            />
            <BsSend size={_350 ? 28 : _300 ? 24 : 20} />
          </Stack>
          <Stack flexDirection={"row"} mt={1} gap={1} ml={1}>
            {post?.comments.length > 0 && (
              <>
                {" "}
                <Typography fontSize={_350 ? "1rem" : "0.7rem"} color={"gray"}>
                  {post?.comments.length} replies
                </Typography>
                <span>.</span>
              </>
            )}
            {post?.likes.length > 0 && (
              <Typography fontSize={_350 ? "1rem" : "0.7rem"} color={"gray"}>
                {post.likes.length} likes
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePosts;
