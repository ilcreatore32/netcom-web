// Material
import {
  Box, 
} from "@mui/material";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <Box>
      <Navbar></Navbar>
      <Outlet />
    </Box>
  );
}

export default App;