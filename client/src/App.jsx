import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import Activity from "./pages/Activity";
import Header from "./components/Header";
import ProfileLayout from "./pages/ProfileLayout";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Box>
            <main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/edit" element={<Edit />} />
                <Route exact path="/activity" element={<Activity />} />
                <Route exact path="/profile" element={<ProfileLayout />} >
                  <Route exact path="threads" element={<>Threads</>}/>
                  <Route exact path="replies" element={<>Replies</>}/>
                  <Route exact path="reposts" element={<>Reposts</>}/>
                </Route>
              </Routes>
            </main>
          </Box>
        </BrowserRouter>
    </>
  );
};

export default App;
