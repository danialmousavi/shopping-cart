import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getProducts } from "../redux/products/action"
import { AddToCart } from "../redux/cart/action"
import Swal from "sweetalert2"
// import { Link } from "react-router-dom"
const Products=()=>{
    const {products}=useSelector(state=>state.product)


    const dispatch=useDispatch()
    const handleAddToCart=(product)=>{
        dispatch(AddToCart(product))
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
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
  
    return(
        <>
             <div className="container">
                 <div className="row mt-5 g-3">
                 {products&&products.map(product=>(
                    <div className=" col-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card border-success" >
                            <div className="card-body">
                                <img src={product.image} className="card-img-top" alt="..."/>

                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button onClick={()=>handleAddToCart(product)} className="btn btn-sm btn-outline-success">
                                    add to cart
                                </button>
                                <span>{product.price}$</span>
                            </div>
                        </div>
                    </div>
                    ))}
                 </div>
               </div>
        </>
    )
}
export default Products