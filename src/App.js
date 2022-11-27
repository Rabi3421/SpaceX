import "./App.css";
import Banner from "./Component/Banner";
import Card from "./Component/Card";
import Search from "./Component/Search";
// import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Space X</h1>
      <Banner />
      <Search />
      <Card/>
    </div>
  );
}

export default App;
