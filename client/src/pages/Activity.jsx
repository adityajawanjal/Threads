import {
  Stack,
  useMediaQuery,
  Avatar,
  Button,
  Grid,
  Typography,
  Badge,
} from "@mui/material";

const Activity = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _300 = useMediaQuery("(min-width:300px)");
  const _350 = useMediaQuery("(min-width:350px)");
  const _500 = useMediaQuery("(min-width:500px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        maxWidth={"620px"}
        mx={"auto"}
        mt={_700 ? 16 : 0}
      >
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
          </Grid>
          <Grid
            item
            xs={_500 ? 10.5 : _350 ? 10 : _300 ? 9.5 : 8}
            className="my-border"
            pb={2}
          >
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Stack flexDirection={"column"}>
                <Stack flexDirection={"row"} gap={1} alignItems={'center'}>
                  <Typography
                    variant="h2"
                    fontWeight={"700"}
                    fontSize={_300 ? "1rem" : "0.6rem"}
                  >
                    salman_khan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontSize={_300 ? "1rem" : "0.6rem"}
                    color={"gray"}
                  >
                    5d
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  fontSize={_300 ? "1rem" : "0.6rem"}
                  color={"gray"}
                >
                  Followed you
                </Typography>
              </Stack>
              <Button
                variant="outlined"
                sx={{
                  color: "#000",
                  border: "1px solid gray",
                  borderRadius: "10px",
                  height: _500 ? "40px" : "30px",
                  fontSize: _500 ? "0.8rem" : _350 ? "0.7rem" : "0.5rem",
                }}
              >
                Follow
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Activity;
