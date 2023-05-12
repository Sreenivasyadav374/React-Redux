import Login from "./components/login";
import Profile from "./components/profile";
import ChangeColor from "./components/changeColor";
import './profile.css'
import './login.css'
import './color.css'

function App() {
  return (
    <>
      <Profile/>
      <br></br>
      <Login/>
      <br></br>
      <ChangeColor/>
    </>
  );
}

export default App;
