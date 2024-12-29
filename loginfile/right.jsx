import React from 'react'

const Right = () => {
  return (
    <div>
      <div className="right_buy">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop.CB443006202.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <h3>Subtotal (2 items): <span style={{ fontWeight: "700" }}> ₹3010.00</span></h3>
                <button className="rightbuy_btn" >Proceed to Buy</button>
                <div className="emi">
                    Emi available
                </div>
            </div>
        </div>
    </div>
  )
}

export default Right