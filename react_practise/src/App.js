import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';
import ConmponentWithProps from './components/ComponentWithProps';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="info">
          <PersonInfo forename="Fake" surname="Name" line1="House House" line2="4th Street" city="London" postCode="FA1 1KE"/>
          <ConmponentWithProps/>
          <Login></Login>
        </h1>
      </header>
    </div>
  );
}

export default App;
