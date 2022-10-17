import './App.css';
import BottomBar from './component/Bar/bottomBar';
import TopBar from './component/Bar/topBar';
import OrderBox from './component/orders/orderBox';
// import OrderContainer from './component/orders/orderContainer';

function App() {
  return (
    <>
     <TopBar/>
     <OrderBox/>
     <BottomBar/>
    </>
  );
}

export default App;
