import './App.css';
import AlertMessage from './components/AlertMessage';
import Error from "./assets/image/error.jpeg"
import Succes from "./assets/image/succes.jpeg"
import Info from "./assets/image/info.jpeg"

function App() {
  return (
    <>

      <AlertMessage
        message="Emeliyyat icra olunmaga davam edir"
        color="info"
        foto={Info}
        />
      <AlertMessage
        message="Emeliyyat icra olunmadi"
        color="error"
        foto={Error}

        
        />
      <AlertMessage
        message="Ugurlu emeliyyat"
        color="succes"
        foto={Succes}

      />
     

    </>
    
  );
}

export default App;
