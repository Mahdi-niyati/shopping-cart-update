import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider';


const ShopCart = () => {

    const {state , dispatch } = useContext(CartContext);

    return (
        <div>
            <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items :</span>{state.itemsCounter}</p>
                    <p><span>Total payments:</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>check out</button>
                        <button onClick={() => dispatch({type: "CLEAR"})}>clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>checked out successfully</h3>
                    <Link to="/products">Boy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;