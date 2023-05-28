import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./screens/Inicio";
import Sobremim from "./screens/Sobremim";
import Menu from "./components/Menu";

function App() {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<Sobremim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )  
}

export default App;
