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
import { useDispatch, useSelector } from "react-redux";
import { toggleAddPostModal } from "../redux/slice";

const HomeHeader = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const { darkMode } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  const handleOpenAddPostModal = () => {
    dispatch(toggleAddPostModal(true));
  };

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
              <Avatar src="" alt="" />
              <input
                type="text"
                placeholder="Start a thread..."
                className={`searchout ${darkMode ==='dark' ? "dark" : ""}`}
                onClick={handleOpenAddPostModal}
              />
            </Stack>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "gray",
                border: "1px solid gray",
                alignSelf: "flex-end",
              }}
              onClick={handleOpenAddPostModal}
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
