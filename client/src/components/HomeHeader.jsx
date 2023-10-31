import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";

const HomeHeader = () => {
  const one = useMediaQuery("(min-width:700px)");
  return (
    <>
      {one ? (
        <>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={1}
            borderBottom={"2px solid gray"}
            maxWidth={"620px"}
            mx={"auto"}
            mt={5}
          >
            <Stack alignItems={"center"} flexDirection={"row"}>
              <Avatar
                src="https://i0.wp.com/www.desimag.co.uk/wp-content/uploads/2014/01/salman-khan-jai-ho.jpg"
                alt="salman khan"
              />
              <input type="text" placeholder="Start a thread..." id="search" />
            </Stack>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "gray",
                border: "1px solid gray",
                alignSelf: "flex-end",
              }}
            >
              Post
            </Button>
          </Stack>
        </>
      ) : (
        <Box borderBottom={"1px solid gray"}>
          <Tabs value={false} centered variant="fullWidth">
            <Tab label="For you" color="#000" />
            <Tab label="Following" />
          </Tabs>
        </Box>
      )}
    </>
  );
};

export default HomeHeader;
