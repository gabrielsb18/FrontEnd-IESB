import Login from "../src/pages/Login/Login"
import Home from "./pages/Home.jsx"
import Perfil from "./pages/Perfil.jsx";

function App() {
  const index = 2;

  return (
    <>
      {(index == 1) && <Login />}
      {(index == 2) && <Home />}
      {(index == 3) && <Perfil/>}
    </>
  )
}

export default App
