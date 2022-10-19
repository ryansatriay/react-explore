import "./App.css";
import { OrderProvider } from "./component/store/OrderContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/page/LandingPage";
import ErrorPage from "./component/page/ErrorPage";

function App() {
  return (
    <>
      <OrderProvider>
        <Router>
          <Routes>
            <Route path="/coffeeteariaweb/" element={<LandingPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
      </OrderProvider>
    </>
  );
}

export default App;
