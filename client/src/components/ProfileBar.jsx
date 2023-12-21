import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFollowUserMutation } from "../redux/services";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProfileBar = ({ user }) => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _350 = useMediaQuery("(min-width:350px)");
  const _500 = useMediaQuery("(min-width:500px)");

  const [follows, setFollows] = useState();

  const [followUser, followUserData] = useFollowUserMutation();
  const { myself, darkMode } = useSelector((state) => state.services);

  const handleFollowUser = async () => {
    await followUser(user._id);
  };

  const checkFollowed = async () => {
    const res = user.followers.filter((e) => e._id === myself._id);
    if (res.length > 0) {
      setFollows(true);
      return;
    }
    setFollows(false);
  };

  useEffect(() => {
    checkFollowed();
  }, [followUserData.data]);

  return (
    <>
      <Grid
        container
        maxWidth={"620px"}
        mx={"auto"}
        justifyContent={"center"}
        my={2}
        gap={_300 ? 0 : 1}
        py={1}
      >
        <Grid item xs={_500 ? 1 : _350 ? 1.5 : 2}>
          <Avatar
            src="https://i0.wp.com/www.desimag.co.uk/wp-content/uploads/2014/01/salman-khan-jai-ho.jpg"
            alt="salman khan"
          />
        </Grid>
        <Grid
          item
          xs={_500 ? 10.5 : _350 ? 10 : _300 ? 9.5 : 8}
          className="my-border"
          pb={2}
        >
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack flexDirection={"column"}>
              <Typography
                variant="h2"
                fontWeight={"700"}
                fontSize={_300 ? "1rem" : "0.6rem"}
              >
                {user?.userName}
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={_300 ? "1rem" : "0.6rem"}
                color={"gray"}
              >
                {user?.bio}
              </Typography>
              <Typography fontSize={_350 ? "1rem" : "0.7rem"} mt={1.5}>
                {user?.followers.length > 0
                  ? `${user.followers.length} followers`
                  : "No follower"}
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              sx={{
                color: darkMode === "dark" ? "white":'black',
                border: "1px solid gray",
                borderRadius: "10px",
                height: _500 ? "40px" : "30px",
                fontSize: _500 ? "1rem" : _350 ? "0.7rem" : "0.5rem",
              }}
              onClick={handleFollowUser}
            >
              {follows ? "Following" : "Follow"}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileBar;
