import React from 'react'
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import "./buynow.css"
const Buynow = () => {
    return (
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />
                    <div className="item_containert">
                        <img src="" alt="imgitem" />
                        <div className="item_details">
                            <h3>marketingolife Sense 500 Smartwatch</h3>
                            <h3>Smart Watches</h3>
                            <h3 className="diffrentprice">₹4049.00</h3>
                            <p className="unusuall">Usually dispatched in 8 days.</p>
                            <p>Eligible for FREE Shipping</p>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x.CB485942108.png" alt="logo" />
                            <Option />
                        </div>
                        <h3 className="item_price">₹2030.00</h3>
                    </div>
                    <Divider />
                    <Subtotal/>
                </div>
                <Right/>
            </div>
        </div>
    )
}

export default Buynow