import React , { useContext } from 'react';
import { Link } from 'react-router-dom';


//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import shopIcon from "../../assets/icons/shop.svg";

const Navbvar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <diV>
                    <Link to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </diV>
            </div>
        </div>
    );
};

export default Navbvar;