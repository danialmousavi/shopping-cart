import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import Products from "./pages/Products";
function App() {
  return (
  <>
  <BrowserRouter>
    <Provider store={store}>
      
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
    </Provider>
  </BrowserRouter>
  </>
  );
}

export default App;