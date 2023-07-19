
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import store from "./redux/store";
import {Provider} from "react-redux";
import Header from "./component/Header";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/products" element={<Products/>}/>
                        <Route exact path="/cart" element={<ShoppingCart/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </>
  );
}

export default App;
