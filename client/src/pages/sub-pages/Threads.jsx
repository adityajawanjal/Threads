import React from "react";
import HomePosts from "../../components/HomePosts";
import { useGetUserDetailsQuery } from "../../redux/services";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Stack } from "@mui/material";

const Threads = () => {
  const params = useParams();
  const { data, isSuccess, isLoading } = useGetUserDetailsQuery(params?.id);
  console.log(data);
  if (isLoading) {
    return (
      <Stack flexDirection={"row"} justifyContent={"center"} py={20}>
        <CircularProgress />
      </Stack>
    );
  }
  if (isSuccess) {
    return (
      <>
        {data?.posts?.length > 0 ? (
          data.posts.map((e) => {
            return <HomePosts key={e._id} post={e} />;
          })
        ) : (
          <Box textAlign={"center"} mt={5}>
            No Threads !
          </Box>
        )}
      </>
    );
  }
};

export default Threads;
