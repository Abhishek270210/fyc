import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

 class Stripebutton extends Component {
    render() {
        const {price}=this.props;
        const priceforstripe=price*100;
        const publishablekey='pk_test_51IIBHEGCYQKSXnO5c53cqhW75lOyJkpv3LoPbdMe78sOEyXAMmzL0TV8sHtJ5gcLi0ObrjpSvb7kTmQ0ZPUPquG100e9y1W5MW';


   const onToken=token=>{
           console.log(token);
           alert("Payment Successful");
        }
        return (
            <div>
                <StripeCheckout
                 label='Pay Now'
                 name='Shopping-Website'
                 billingAddress
                 shippingAddress
                 image={'https://svgshare.com/i/CUz.svg'}
                 description={`Your total is $${price}`}
                 amount={priceforstripe}
                 panelLabel='Pay Now'
                 token={onToken}
                 stripeKey={publishablekey}
                />
            </div>
        )
    }
}

export default Stripebutton;
