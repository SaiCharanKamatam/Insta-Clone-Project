import './App.css';
import Landing from './LandingPage/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostForm from './Form/PostForm';
import FrontPage from './FrontPage/FrontPage';
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element ={<Landing/>} />
          <Route path={"/posts"} element ={<FrontPage/>} />
          <Route path='/createpost' element={<PostForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;