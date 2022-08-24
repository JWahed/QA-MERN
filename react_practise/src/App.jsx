import logo from './logo.svg';
import './App.css';
// import PersonInfo from './components/PersonInfo';
// import ConmponentWithProps from './components/ComponentWithProps';
// import Login from './components/Login';
// import Car from './components/Car';
// import ProductTable from './components/ProductTable';
// import Counter from './components/Counter';
// import Cart from './components/basket/Cart';
import HideText from './components/hooks_exercise/HideText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="info">
          {/* <PersonInfo forename="Fake" surname="Name"
           line1="House House" line2="4th Street" city="London" postCode="FA1 1KE"/>
          <ConmponentWithProps/>
          <Login/>
          <Car/> */}
          {/* <ProductTable /> */}
          {/* <Counter/> */}
          {/* <Cart /> */}
          <HideText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            end={20}
          />
        </h1>
      </header>
    </div>
  );
}

export default App;
