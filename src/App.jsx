import { Route, Routes } from 'react-router-dom';
import './App.css'
import Principal from './Principal'
import Perfil from './Perfil'
import Cursos from './Cursos'
import Acerca from './Acerca'
import Tarjeta from './Tarjeta'

function App() {

  return (
    <>
    <div class="contenedor">
      
      <div class="menu">
        <h1>Blog Navideño</h1>
        <nav class="navbar navbar-expand-lg bg-light">
          
          <div class="container-fluid">
           
            <div class="collapse navbar-collapse" id="navbarNav">
              
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Principal</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/cursos">Tradicciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/perfil">Gastronomia</a>
                </li>
                  <li class="nav-item">
                  <a class="nav-link active" href="/acerca_de">Villancicos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/tarjeta">Eventos Navideños</a>
                </li>
              </ul>
              <div class="logito">
                <img src="../public/logoo.gif" alt="" height="180px"/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
       
      <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/cursos' element={<Cursos></Cursos>}></Route>
        <Route path='/perfil' element={<Perfil></Perfil>}></Route>
        <Route path='/acerca_de' element={<Acerca></Acerca>}></Route>
        <Route path='/tarjeta' element={<Tarjeta></Tarjeta>}></Route>
      </Routes>
    </>
  )
}

export default App
