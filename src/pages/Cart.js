import '../sass/cart.scss'
import '../sass/base.scss'
import titleIcon from '../assets/featured_title.png'
function Cart(props) {
    let total = 0;
    const dem = props.product.map(l=>{
        total = total + l.price;
    })
  console.log(props.product)
    
    
  return (
    <div className='cart'>
        <div className='container'>
            <h2 className='cart__title'><img src={titleIcon}></img>CHECKOUT<img src={titleIcon}></img></h2>
            <div className='cart__container row'>
                <ul className='cart__table-list row'>
                        <li className='cart__table-item col c-2'>
                            Image
                        </li>
                        <li className='cart__table-item col c-2'>
                            Name
                        </li>
                        <li className='cart__table-item col c-4'>
                            Descripion
                        </li>
                        <li className='cart__table-item col c-2'>
                            Price
                        </li>
                        <li className='cart__table-item col c-2'>
                            Remove
                        </li>
                </ul>
                {
                    props.product.map((l,index)=>[
                        <ul key={index} className='cart__table-list row'>
                            <li className='cart__table-item col c-2'>
                                <img src={l.img}></img>
                            </li>
                            <li className='cart__table-item col c-2'>
                                {l.name}
                            </li>
                            <li className='cart__table-item col c-4'>
                                {l.desc}
                            </li>
                            <li className='cart__table-item col c-2'>
                                ${l.price}.00
                            </li>
                            <li className='cart__table-item col c-2'>
                                <button onClick={()=>{
                                    props.handleRemove(l.id,index)
                                }}>X</button>
                            </li>
                        </ul>
                    ])
                }
            </div>
            <div className='cart__total'>
                <h3 className='cart__total-title'>
                    CART TOTALS
                </h3>
                <ul className='cart__total-list'>
                    <li className='cart__total-item'>
                        Cart Subtotal:
                    </li>
                    <li className='cart__total-item'>${total}.00 </li>
                    
                </ul>
                <button> PROCEED TO CHECKOUT</button>

            </div>
        </div>
        
    </div>
  )
}

export default Cart