import React, { useState, useEffect  } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";








export default function ExampleNavegacion() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Hook de estado</Link>
          </li>
          <li>
            <Link to="/about">Hook de efecto</Link>
          </li>
        </ul>

        <hr />

        
        <Routes>
          <Route exact path="/"  element={<Home />}> 
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );




  function Home() {
  
    const [count, setCount] = useState(0);
    return (
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    );
  }





  

  function About() {


    const [count, setCount] = useState(0);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      document.title = `You clicked ${count} times`;
    });

    
    return (
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    );
  }
}
