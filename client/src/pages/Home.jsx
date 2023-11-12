import HomeHeader from "../components/HomeHeader";
import HomePosts from "../components/HomePosts";
import Layout from "../components/Layout";

const Home = () => {

  return (
    <Layout>
      <HomeHeader />
      <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts />
    </Layout>
  );
};

export default Home;
