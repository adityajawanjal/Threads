import { Stack, TextField, useMediaQuery } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import ProfileBar from "../components/ProfileBar";

const Search = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"620px"}
        mx={"auto"}
        mt={_700 ? 16 : 0}
      >
        <Stack
          gap={1}
          flexDirection={"row"}
          alignItems={"center"}
          border={"1px solid gray"}
          borderRadius={"15px"}
          width={_700 ? "100%" : "70%"}
          py={0.5}
          px={3}
        >
          <FiSearch size={28} />
          <TextField
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </Stack>
      </Stack>
      <ProfileBar />
      <ProfileBar />
      <ProfileBar />
    </>
  );
};

export default Search;
