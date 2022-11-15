import './App.css';
import BarraNav from './Components/BarraNav';
import Cuerpo from './Components/cuerpo';
import Footer from './Components/Footer';
import Catalogo from './Components/Catalogo';
import styles from './Components/css/index.css';




function App() {
  return (
    <div>
      <BarraNav/>
      <Cuerpo/>
      <Catalogo/>
      <Footer/>
    </div>
  );
}


export default App;
