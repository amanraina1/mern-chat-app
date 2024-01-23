import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage.jsx";
import Chatpage from "./Pages/ChatPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/chat" Component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App;
