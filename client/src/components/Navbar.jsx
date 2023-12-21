import { GoHomeFill, GoSearch } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoImages } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useAddPostMutation } from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddPostModal } from "../redux/slice";

const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const { addPostModal, myself, darkMode } = useSelector(
    (state) => state.services
  );
  const [addPost, addPostData] = useAddPostMutation();

  const imgRef = useRef();
  const dispatch = useDispatch();

  const [text, setText] = useState();
  const [media, setMedia] = useState();
  const [mediaURL, setMediaURL] = useState();

  const handlePost = async () => {
    const data = new FormData();
    if (text) {
      data.append("text", text);
    }
    if (media) {
      data.append("media", media);
    }
    await addPost(data);
    dispatch(toggleAddPostModal(false));
  };

  const handleOpenImg = () => {
    imgRef.current.click();
  };

  const handleOpenAddPostModal = () => {
    dispatch(toggleAddPostModal(true));
  };

  const handleClose = () => {
    dispatch(toggleAddPostModal(false));
  };

  if (addPostData.error) {
    console.log(addPostData.error);
  }
  if (addPostData.data) {
    console.log(addPostData.data.msg);
  }

  return (
    <>
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
        <Link to={"#"} onClick={handleOpenAddPostModal}>
          <FiEdit size={_700 ? 28 : 24} color="#000" />
        </Link>
        <Link to={"/activity"}>
          <AiOutlineHeart size={_700 ? 28 : 24} color="#000" />
        </Link>
        <Link to={`/profile/threads/${myself?._id}`}>
          <AiOutlineUser size={_700 ? 28 : 24} color="#000" />
        </Link>
      </Stack>

      <Dialog
        open={addPostModal}
        onClose={handleClose}
        scroll="paper"
        maxWidth="md"
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <DialogTitle textAlign={"center"}>Start a Thread</DialogTitle>
        <DialogContent>
          {" "}
          <Stack flexDirection={"row"} gap={2}>
            <Avatar src={myself?.profilePic ? myself.profilePic : ""} alt="" />
            <Stack flexDirection={"column"} gap={2}>
              <Typography fontWeight={700} fontSize={"1.2rem"} color={"black"}>
                {myself?.userName ? myself.userName : ""}
              </Typography>
              <input
                placeholder="Start a thread..."
                className={`searchin ${darkMode === "dark" ? "darkin" : ""}`}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                id="img-file"
                ref={imgRef}
                onChange={(e) => {
                  setMedia(e.target.files[0]);
                  setMediaURL(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <IoImages size={20} onClick={handleOpenImg} className="cursor" />
              {media ? (
                <img
                  src={mediaURL}
                  alt="selected pic"
                  width={200}
                  height={"auto"}
                />
              ) : null}
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "blue",
                cursor: "pointer",
              },
            }}
            onClick={handlePost}
          >
            {" "}
            Post{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
