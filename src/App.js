import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Action from "./pages/Action";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import MainChat from "./pages/MainChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Landing/>}/>
        <Route path = "/" element = {<Layout/>}>
            <Route path="home" element = {<Home/>}/>
            <Route path = "chat" element = {<MainChat/>}></Route>
            <Route path = "profile" element = {<Profile/>}></Route>
            <Route path = "action" element = {<Action/>}></Route>
        </Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
