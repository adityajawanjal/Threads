import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import { BsArrowLeftRight } from "react-icons/bs";

const HomeHeader = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      {_700 ? (
        <>
          <Button
            sx={{
              position: "fixed",
              bottom: "10%",
              left: "5%",
              boxShadow: "1px 1px 1px #000 , -1px -1px 1px #000",
              border: "2px solid #fff",
              borderRadius: "50px",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#000",
              zIndex: 6,
              backgroundColor: "#fff",
              p: 1,
            }}
          >
            <span className="btn-text">Following</span>{" "}
            <BsArrowLeftRight size={20} />
          </Button>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={1}
            borderBottom={"2px solid gray"}
            maxWidth={"620px"}
            mx={"auto"}
            mt={16}
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
