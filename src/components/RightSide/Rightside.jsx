import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './Rightside.css'
const Rightside = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates></Updates>
        </div>
        <div>
            <h3>
                Customer Review
                <CustomerReview></CustomerReview>
            </h3>
        </div>
    </div>
    )
}

export default Rightside