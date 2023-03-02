import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbvar from './components/shared/Navbvar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbvar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/Cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
