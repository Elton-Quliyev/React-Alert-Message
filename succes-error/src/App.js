import './App.css';

import AlertMessage from './components/AlertMessage'; // Importing AlertMessage component
import Error from "./assets/image/error.jpeg"
import Succes from "./assets/image/succes.jpeg"
import Info from "./assets/image/info.jpeg"

function App() {
  const alertMessages = [
    {
      alert: "success",
      message: "Ugurlu emeliyyat",
      clas:"succes"
    },
    {
      alert: "error",
      message: "Emeliyyat ugursuz oldu",
      clas:"error"
    },
    {
      alert: "info",
      message: "Emeliyyat davam edir...",
      clas:"info"
    }
  ];

  return (
    <>
      {alertMessages.map((alertMessage, index) => (
        <AlertMessage
          key={index}
          message={alertMessage.message}
          clas={alertMessage.clas}
          foto={alertMessage.alert === "success" ? Succes : alertMessage.alert === "error" ? Error : Info}
        />
      ))}
    </>
  );
}

export default App;
