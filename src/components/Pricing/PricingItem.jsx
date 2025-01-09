import React from 'react'
import { Link } from 'react-router-dom'

function PricingItem({title, price, list, active}) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className={`pricing-item ${active? "active": ""}`}>
                <div className="pricing-icon">
                    <img src="/img/icon/pricing_icon01.png" alt="" />
                </div>
                <div className="pricing-top">
                    <h2 className={`title ${active?"text-white" : ""}`}>{title}</h2>
                </div>
                <div className="pricing-price">
                    <h2 className={`price ${active?"text-white" : ""}`}>
                        <span>$</span> {price}<strong></strong>
                    </h2>
                </div>
                <div className="pricing-list">
                    <h4 className={`title ${active?"text-white" : ""}`}>Everything in Starter</h4>
                    <ul className="list-wrap">
                        {list.map(itemItems => (
                            <li>
                                <i className="far fa-check"></i>{itemItems}
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="pricing-btn">
                    <Link to="/contact" className="btn">
                        Select This Plan
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingItem