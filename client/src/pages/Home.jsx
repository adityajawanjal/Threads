import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomePosts from "../components/HomePosts";
import Layout from "../components/Layout";
import { useGetPostQuery } from "../redux/services";
import { Button, CircularProgress, Stack } from "@mui/material";

const Home = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const { data, isLoading, error } = useGetPostQuery(page);

  if (error) {
    alert(error.data.msg);
    return;
  }

  useEffect(() => {
    if (data) {
      setShowBtn(true);
      if (data.posts.length < 3) {
        setShowBtn(false);
      }
      let arr = [...posts, ...data.posts];
      let uniqueArr = arr.filter(
        (obj, index, self) => index === self.findIndex((e) => e._id === obj._id)
      );
      setPosts(uniqueArr);
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
      ) : (
        posts.length > 0 &&
        posts.map((e) => {
          return <HomePosts key={e._id} />;
        })
      )}
      {showBtn && (
        <Stack flexDirection={"row"} justifyContent={"center"} my={2}>
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
