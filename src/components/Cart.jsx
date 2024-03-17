import React from 'react';
import ReactDOM from 'react-dom/client';

class Cart extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
        let {props} = this.props
        return (
            <>

                
                <div class="products_cart">
                    {props.product_cart.length === 0 && <strong>The Cart Empty</strong>}
                    {props.product_cart.map(ele =>( 
                        <div key={ele.id} className="card_cart">
                        <img src={require(`../images/${ele.image}`)} loading="lazy" alt="" />
                        <h3>{ele.title}</h3>
                        <b>{ele.price}</b>
                        <button onClick={()=>props.removeProduct(ele)}>Remove</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}  

export default Cart;