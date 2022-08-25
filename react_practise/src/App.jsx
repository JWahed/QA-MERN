import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import PersonInfo from './components/PersonInfo';
// import ConmponentWithProps from './components/ComponentWithProps';
// import Login from './components/Login';
// import Car from './components/Car';
// import ProductTable from './components/ProductTable';
// import Counter from './components/Counter';
// import Cart from './components/basket/Cart';
// import HideText from './components/hooks_exercise/HideText';
import FilmRequest from './components/film_request/FilmRequest ';
import NotFound from './components/routes_exercise/NotFound';
import Home from './components/routes_exercise/Home';
import Contact from './components/routes_exercise/Contact';
import Users from './components/routes_exercise/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="info">
          {/* <PersonInfo forename="Fake" surname="Name"
           line1="House House" line2="4th Street" city="London" postCode="FA1 1KE"/>
          <ConmponentWithProps/>
          <Login/>
          <Car/> */}
          {/* <ProductTable /> */}
          {/* <Counter/> */}
          {/* <Cart /> */}
          {/* <HideText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            end={20}
          /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/users/:id" element={<Users />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/film_request" element={<FilmRequest />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
