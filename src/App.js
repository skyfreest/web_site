import './App.css';
import {BrowserRouter, Routes, Route, Link,useLocation} from "react-router-dom";

import Home from './components/Home';
import Life from './components/Life';
import Hobby from './components/Hobby';
import Game from './components/Game';
import Contact from './components/Contact';
import Info from './components/Info';
import Illustration from './components/Illustration';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <body>
      <div className="App">
        <div className="saitName">
          <p>＊Nutural Free＊</p></div>
        <BrowserRouter>
        <div className="sidebar">
        <Sidebar>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>

          <li>
            <CustomLink to="/Life"> Life </CustomLink>
          </li>

          <li>
            <CustomLink to="/Hobby"> Hobby </CustomLink>
          </li>

          <li>
            <CustomLink to="/Game"> Game </CustomLink>
          </li>

          <li>
            <CustomLink to="/Illustration"> Illustration </CustomLink>
          </li>

          <li>
            <CustomLink to="/Contact"> Contact </CustomLink>
          </li>

          <li>
            <CustomLink to="/Info"> Info </CustomLink>
          </li>
        
        </Sidebar>

        

        </div>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Life" element={<Life />}/>
          <Route path="/Hobby" element={<Hobby />}/>
          <Route path="/Game" element={<Game />}/>
          <Route path="/Illustration" element={<Illustration />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Info" element={<Info />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

function Sidebar({children}) {
  return <ul className="sidebar">{children}</ul>;
}

function CustomLink({children , to}) {
  const location = useLocation();  
  const match = location.pathname === to;
  return(
    <div className={match ? "active" : ""}>
      {match ? ">" : ""}
      <Link to={to}>{children}</Link>
      
    </div>
  )
}

/*
function PageName(props){
    return <div> {props.toName}</div> 
} */

export default App;
