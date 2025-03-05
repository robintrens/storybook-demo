import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import "./index.css";
import country from "./assets/json/country.json";

function App() {
  return (
    <>
      <DropDown animation size="md" options={country} label="Select Country" />
    </>
  );
}

export default App;
