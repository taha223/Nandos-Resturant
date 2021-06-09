import './App.css';
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Appeteasers from '../src/components/Dishes/Categories/Appeteasers'
import FinoSides from '../src/components/Dishes/Categories/FinoSides'
import PeriPeriChicken from '../src/components/Dishes/Categories/PeriPeriChicken'
import SharingPlatters from '../src/components/Dishes/Categories/SharingPlatters'
import Desserts from '../src/components/Dishes/Categories/Desserts'
import Sides from '../src/components/Dishes/Categories/Sides'
// import BurgerWraps from '../src/components/Dishes/Categories/BurgerWraps'
function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Appeteasers/>
      <FinoSides/>
      <PeriPeriChicken/>
      <SharingPlatters/>
      <Desserts/>
      <Sides/>
      {/* <BurgerWraps/> */}
    </div>
  );
}

export default App;
