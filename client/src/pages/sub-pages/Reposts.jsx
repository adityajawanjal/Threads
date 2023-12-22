import React, { useEffect } from "react";
import HomePosts from "../../components/HomePosts";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useGetUserDetailsQuery } from "../../redux/services";
import { useParams } from "react-router-dom";

const Reposts = () => {
  // const { myself } = useSelector((state) => state.services);
  const params = useParams();
  const { data, isSuccess } = useGetUserDetailsQuery(params?.id);

  if (isSuccess) {
    console.log(data.reposts);
    return (
      <>
        {data?.reposts?.length > 0 ? (
          data?.reposts.map((e) => {
            return <HomePosts key={e._id} post={e} />;
          })
        ) : (
          <p>No post</p>
        )}
      </>
    );
  }
};

export default Reposts;
