import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import Activity from "./pages/Activity";
import ProfileLayout from "./pages/ProfileLayout";
import Threads from "./pages/sub-pages/Threads";
import Replies from "./pages/sub-pages/Replies";
import Reposts from "./pages/sub-pages/Reposts";
import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToken } from "./redux/slice";

const App = () => {
  const {token} = useSelector((state)=>state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      const newAuth = JSON.parse(auth);
      dispatch(addToken(newAuth));
    }
  }, [dispatch , token]);

  return (
    <>
      <BrowserRouter>
        <Box>
          <main>
            <Routes>
              {token ? (
                <>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/search" element={<Search />} />
                  <Route exact path="/edit" element={<Edit />} />
                  <Route exact path="/activity" element={<Activity />} />
                  <Route exact path="/profile" element={<ProfileLayout />}>
                    <Route exact path="threads" element={<Threads />} />
                    <Route exact path="replies" element={<Replies />} />
                    <Route exact path="reposts" element={<Reposts />} />
                  </Route>
                </>
              ) : (
                <Route exact path="/" element={<Register />} />
              )}
            </Routes>
          </main>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
