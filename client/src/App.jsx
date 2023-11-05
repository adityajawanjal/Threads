import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Header from "./components/Header";

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
                <Route exact path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </Box>
        </BrowserRouter>
    </>
  );
};

export default App;
