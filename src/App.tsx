import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import "./index.css";
import country from "./assets/json/country.json";
import Alert, { AlertProps } from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState<AlertProps["variant"]>("primary");
  function showAlert(varient: AlertProps["variant"]) {
    setAlert(varient);
  }
  return (
    <>
      <DropDown animation size="md" options={country} label="Select Country" />
      {alert && <Alert variant={alert} text={`This is a ${alert} alert!`} />}
      <div>
        <div className="control">
          <button onClick={() => showAlert("primary")}>Primary</button>
          <button onClick={() => showAlert("secondary")}>Secondary</button>
          <button onClick={() => showAlert("info")}>Info</button>
          <button onClick={() => showAlert("error")}>Error</button>
        </div>
      </div>
    </>
  );
}

export default App;
