import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../redux/products/action";
import {addToCart} from "../redux/cart/action";
import Swal from "sweetalert2";


const Products = () => {
     const dispatch = useDispatch();
    const {products} = useSelector((state) => state.productAll);

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Add',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            toast:true,
        })

    }



    return(
       <>
           <div style={{display:"flex", justifyContent: "space-around", margin:"50px 20px"}}>

           {
               products && products.map((item, index)=> (

                       <div className="card" style={{width: '20rem', height: "30rem"}} key={index}>
                           <img src={item.image}  style={{height: "50%"}} alt="..."/>
                           <div className="card-body">
                               <h5 className="card-title">{item.name}</h5>
                               <b className="card-text">{item.description}</b>
                               <br/>
                               <span style={{fontSize:"1.1rem", fontWeight: "bold", color:"#0d6efd"}}>{item.price}تومان</span>
                               <br/>

                               <button  onClick={()=> handleAddToCart(item)} className="btn btn-primary mt-3">Add To Cart</button>
                           </div>
                       </div>

               ))
           }
       </div>
       </>
    )
}

export default Products