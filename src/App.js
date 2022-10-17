import "./App.css";
import BottomBar from "./component/Bar/bottomBar";
import TopBar from "./component/Bar/topBar";
import OrderBox from "./component/orders/orderBox";
import { OrderProvider } from "./component/store/OrderContext";

function App() {
  return (
    <>
      <OrderProvider>
        <TopBar />
        <OrderBox />
        <BottomBar />
      </OrderProvider>
    </>
  );
}

export default App;
