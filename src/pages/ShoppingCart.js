import { useSelector } from "react-redux"
import { clearCart, decrement, increment, removeFromCart } from "../redux/cart/action"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
const ShoppingCart=()=>{
    const {cart}=useSelector(state=>state.shoppingCart)
    const dispatch=useDispatch()
    const handleIncrement=(productId)=>{
        dispatch(increment(productId))
        Swal.fire({
            title:'cart updated',
            icon:'success',
            showCancelButton:false,
            timerProgressBar:true,
            timer:3000,
            toast:true,
            position:'top'
        })
    }
    const handleDEcrement=(productId)=>{
        dispatch(decrement(productId))
        Swal.fire({
            title:'cart updated',
            icon:'success',
            showCancelButton:false,
            timerProgressBar:true,
            timer:3000,
            toast:true,
            position:'top'
        })
    }
    const handleRemove=(productId)=>{
        dispatch(removeFromCart(productId))
        Swal.fire({
            title:'Item Removed',
            icon:'success',
            showCancelButton:false,
            timerProgressBar:true,
            timer:3000,
            toast:true,
            position:'top'
        })
    }
    const handleClear=()=>{
        dispatch(clearCart())
        Swal.fire({
            title:'Cart Empty',
            icon:'warning',
            showCancelButton:false,
            timerProgressBar:true,
            timer:3000,
            toast:true,
            position:'top'
        })
    }
return(
    <>
    {cart.length===0?(
        <div className="col-md-12 text-center">
            <div>
                <i className="bi bi-basket-fill" style={{fontSize:'100px'}}></i>
            </div>
            <h3 className="text-bold">Cart Is Empty</h3>
            <Link rel="stylesheet" className="btn btn-outline-dark mt-3 " to="/products" >Products</Link>
        </div>
    ):(
           <div className="container">
           <div className="row mt-5">
               <div className="col-lg-12 pl-3 pt-3">
                   <table className="table table-hover border bg-white">
                       <thead>
                           <tr>
                               <td>Product</td>
                               <td>Price</td>
                               <td style={{width:'10%'}}>Quantity</td>
                               <td>Subtotal</td>
                               <td>Action</td>
                           </tr>
                       </thead>
                       <tbody>
                           {cart&& cart.map(product=>(
                               <tr key={product.id}>
                               <td className="align-middle">
                                   <div className="row">
                                       <div className="col-lg-2">
                                           <img className="img-fluid" src={product.image}alt="" />
                                       </div>
                                       <div className="col-lg-10">
                                           <h5>{product.name}</h5>
                                           <p>{product.description}</p>
                                       </div>
                                   </div>
                               </td>
                               <td className="align-middle">{product.price}</td>
                               <td className="align-middle ">
                                   <button onClick={()=>handleIncrement(product.id)} className="btn btn-dark btn-sm me-2">+</button>
                                   <span>{product.qty}</span>
                                   <button onClick={()=>handleDEcrement(product.id)} className="btn btn-dark btn-sm ms-2">-</button>
                               </td>
                               <td className="align-middle">{product.price*product.qty}</td>
                               <td className="align-middle" style={{width:'15%'}}>
                                   <button onClick={()=>handleRemove(product.id)} className="btn btn-danger btn-sm">delete</button>
                               </td>
                           </tr>
                           ))}
                           
                       </tbody>
                       <tfoot>
                           <tr>
                               <td>
                                   <button onClick={()=>handleClear()} className="btn btn-dark">clear cart</button>
                               </td>
                               <td colSpan="2" className="hidden-xs"></td>
                               <td  className="hidden-xs text-center" style={{width:'15%'}}>
                                   <strong>total :{cart.reduce((total,product)=>{
                                       return total + product.price * product.qty
                                   },0)}</strong>
                               </td>
                               <td>
                                   <a href="/" className="btn btn-success ">Checkout</a>
                               </td>
                           </tr>
                       </tfoot>
                   </table>
               </div>
           </div>
       </div>
    )}
     
    </>
)
}
export default ShoppingCart