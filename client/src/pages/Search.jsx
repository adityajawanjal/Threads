import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import ProfileBar from "../components/ProfileBar";
import Layout from "../components/Layout";
import { useSearchUsersQuery } from "../redux/services";
import { useState } from "react";

const Search = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const [key, setKey] = useState("");
  // const { data, isLoading, error } = useGetUsersQuery();
  const { data, error, isSuccess, isLoading, refetch } =
    useSearchUsersQuery(key);
  if (error) {
    console.log(error);
    return;
  }

  const handleSearchUsers = async (e) => {
    const value = e.target.value;
    setKey(value);
    let debounceTimeout;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      refetch();
    }, 2000);
  };

  if (isSuccess) {
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
              onChange={handleSearchUsers}
              value={key}
              autoFocus
            />
          </Stack>
        </Stack>
        {isLoading ? (
          <Stack flexDirection={"row"} justifyContent={"center"} py={20}>
            <CircularProgress />
          </Stack>
        ) : data?.users?.length > 0 ? (
          data.users.map((e) => {
            return <ProfileBar key={e._id} user={e} />;
          })
        ) : (
          <Box textAlign={"center"} mt={5}>
            No such user found !
          </Box>
        )}
      </Layout>
    );
  }
};

export default Search;
