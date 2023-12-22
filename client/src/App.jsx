import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Activity from "./pages/Activity";
import ProfileLayout from "./pages/ProfileLayout";
import Threads from "./pages/sub-pages/Threads";
import Replies from "./pages/sub-pages/Replies";
import Reposts from "./pages/sub-pages/Reposts";
import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMyself, addToken } from "./redux/slice";
import { useGetMeQuery } from "./redux/services";

const App = () => {
  const { token, darkMode } = useSelector((state) => state.services);
  console.log(darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode,
    },
  });

  const { data, error } = useGetMeQuery();
  const dispatch = useDispatch();
  
   useEffect(() => {
     const auth = localStorage.getItem("token");
     if (auth) {
       const newAuth = JSON.parse(auth);
       dispatch(addToken(newAuth));
       if (data) {
         dispatch(addMyself(data));
       } else if (error) {
         localStorage.clear();
       }
     }
   }, [dispatch, token, data, error]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box>
          <main>
            <Routes>
              {token ? (
                <>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/search" element={<Search />} />
                  <Route exact path="/activity" element={<Activity />} />
                  <Route exact path="/profile" element={<ProfileLayout />}>
                    <Route exact path="threads/:id" element={<Threads />} />
                    <Route exact path="replies/:id" element={<Replies />} />
                    <Route exact path="reposts/:id" element={<Reposts />} />
                  </Route>
                </>
              ) : (
                <Route exact path="/" element={<Register />} />
              )}
            </Routes>
          </main>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
