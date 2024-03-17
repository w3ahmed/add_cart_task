import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from '../components/Cart.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_cart: [],
      open: false,
      add_to_cart: (ele)=>{
        this.setState({ open: true, product_cart: this.state.product_cart.filter(filt => filt.id !== ele.id ).concat(ele) })
      },
      removeProduct: (ele)=>{
        this.setState({ product_cart: this.state.product_cart.filter(filt => filt.id !== ele.id ) })
      },
      close: ()=>this.setState({ open: false }),
      openCart: ()=>this.setState({ open: true })
    }
    
  }
  render() {
    let {props} = this.props
    return (
      <div style={{padding: '5rem 0', display: 'flex', flexWrap: 'wrap'}}>
        <div class="products_row products">
          {props.data.map(ele =>( 
            <div key={ele.id} className="card_cart">
              <img src={require(`../images/${ele.image}`)} loading="lazy" alt="" />
              <h3>{ele.title}</h3>
              <b>{ele.price}</b>
              <button onClick={()=>this.state.add_to_cart(ele)}>Add To Cart</button>
            </div>
          ))}
        </div>
        <div class="cart" >
          <div className='head_cart'>
            <div>
              Items Cart " {this.state.product_cart.length} "
            </div>
            {this.state.open && <button onClick={this.state.close}>Close Cart</button>}
            {!this.state.open && <button onClick={this.state.openCart}>Open Cart</button>}
          </div>
          {this.state.open && 
            <Cart props={this.state} />
          }
        </div>

      </div>
    )
  }

}

export default Home;
  