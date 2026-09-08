import React from 'react';
import '../assets/Css/ProductCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementtQty, incrementQty } from '../redux/action/cart.action';

function ProductCart(props) {
    const cartData = useSelector(state => state.cart)
    console.log(cartData);

    const products = useSelector(state => state.product)
    console.log(cartData.cart, products.product);

    const CartItemData = cartData.cart.map((v) => {
        const cData = products.product.find((v1) => v1.id === v.pid)

        console.log(cData);
        
        return {...cData, qty: v.qty}
        // return { products:(products.products), qty: ( v.qty ) }

    })
    console.log(CartItemData);
    
    const dispatch = useDispatch();

    return (

        <div className="cart-page">
            <div className="container">
                {/* Header */}
                <div className="page-header">
                    <h1>Shopping Cart</h1>
                    <p>Review your items before checkout</p>
                </div>
                <div className="cart-layout">
                    {/* Cart Items */}
                    <div className="cart-box">
                        <div className="cart-heading">
                            <h2>Your Cart</h2>
                            <span>3 Items</span>
                        </div>
                        {/* Product 1 */}
                        {
                            CartItemData?.map((v) => (
                                <div className="cart-item">
                                    <img src={v.image}/>
                                    <div className="product-info">
                                        <div className="product-content">
                                            <div>
                                                <h3>{v.title}</h3>
                                                <p className="price">{v.price}</p>
                                            </div>
                                            <button className="remove">×</button>
                                        </div>
                                        <div className="product-bottom">
                                            <div className="quantity">
                                                <button onClick={()=>dispatch(decrementtQty(v.id))}>−</button>
                                                <span>{v.qty}</span>
                                                <button onClick={()=>dispatch(incrementQty(v.id))}>+</button>
                                            </div>
                                            <strong>Rs{v.price}</strong>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                        <button className="continue">
                            ← Continue Shopping
                        </button>
                    </div>
                    {/* Order Summary */}
                    <div className="summary">
                        <h2>Order Summary</h2>
                        {/* Coupon */}
                        <label>Coupon Code</label>
                        <div className="coupon">
                            <input type="text" placeholder="Enter coupon code" />
                            <button>Apply</button>
                        </div>
                        {/* Price */}
                        <div className="price-details">
                            <div className="row">
                                <span>Subtotal</span>
                                <strong>₹9,496</strong>
                            </div>
                            <div className="row">
                                <span>Shipping</span>
                                <strong className="free">Free</strong>
                            </div>
                            <div className="row">
                                <span>Discount</span>
                                <strong className="discount">- ₹500</strong>
                            </div>
                        </div>
                        {/* Total */}
                        <div className="total">
                            <span>Total</span>
                            <strong>₹8,996</strong>
                        </div>
                        {/* Checkout */}
                        <button className="checkout">
                            Proceed to Checkout →
                        </button>
                        <p className="secure">
                            🔒 Secure &amp; encrypted checkout
                        </p>
                        {/* Free Shipping */}
                        <div className="shipping-message">
                            🚚 You have unlocked <strong>FREE shipping!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductCart;