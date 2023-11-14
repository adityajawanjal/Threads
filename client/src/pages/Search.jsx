import {
  CircularProgress,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import ProfileBar from "../components/ProfileBar";
import Layout from "../components/Layout";
import { useGetUsersQuery } from "../redux/services";

const Search = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const { data, isLoading, error } = useGetUsersQuery();

  if (error) {
    console.log(error);
    return;
  }

  return (
    <Layout>
      <Stack
        flexDirection={"row"}
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
          width={_700 ? "100%" : "90%"}
          py={_300 ? 0.5 : 0}
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
      {isLoading ? (
        <Stack flexDirection={"row"} justifyContent={"center"} py={20}>
          <CircularProgress />
        </Stack>
      ) : (
        data?.users?.length > 0 &&
        data.users.map((e) => {
          return <ProfileBar key={e._id} user={e} />;
        })
      )}
    </Layout>
  );
};

export default Search;
