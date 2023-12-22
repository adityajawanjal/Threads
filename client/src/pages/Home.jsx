import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomePosts from "../components/HomePosts";
import Layout from "../components/Layout";
import { useGetPostQuery, useLikePostMutation } from "../redux/services";
import { Button, CircularProgress, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToPost } from "../redux/slice";

const Home = () => {
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const { combinePosts } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetPostQuery(page);

  if (error) {
    alert(error.data.msg);
    return;
  }

  useEffect(() => {
    if (data) {
      setShowBtn(true);
      dispatch(addToPost(data.posts));
      if (data.posts.length < 3) {
        setShowBtn(false);
      }
    }
  }, [data, page]);

  const handleLoadMore = () => {
    setPage((pre) => pre + 1);
  };

  return (
    <Layout>
      <HomeHeader />
      {isLoading ? (
        <Stack flexDirection={"row"} justifyContent={"center"} py={20}>
          <CircularProgress />
        </Stack>
      ) : combinePosts.length > 0 ? (
        combinePosts.map((e) => {
          return <HomePosts key={e._id} post={e} />;
        })
      ) : null}
      {showBtn && (
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          mt={2}
          mb={20}
          zIndex={5}
        >
          <Button
            size="large"
            sx={{
              backgroundColor: "blue",
              color: "white",
              "&:hover": {
                backgroundColor: "green",
              },
              "&:active": {
                backgroundColor: "blue",
              },
            }}
            onClick={handleLoadMore}
          >
            Load More...
          </Button>
        </Stack>
      )}
    </Layout>
  );
};

export default Home;
