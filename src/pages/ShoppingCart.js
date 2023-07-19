import {useDispatch, useSelector} from "react-redux";
import {clearCart, decrement, increment, removeFromCart} from "../redux/cart/action";
import Swal from "sweetalert2";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state.shoppingCart);

    const handleIncrement = (proId) => {
        dispatch(increment(proId));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Plus',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            toast:true,

        })
    }

    const handleDecrement = (proId) => {
        dispatch(decrement(proId));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Minus',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            toast:true,

        })
    }
    const handleRemoveCart = (proId) => {
        dispatch(removeFromCart(proId));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Remove',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            toast:true,

        })
    }
    const handleClearCart = () => {
        dispatch(clearCart());
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Clear Cart From Product ',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            toast:true,

        })
    }



    return(
        <>
            {
                cart.length == 0 ?
                    (
                        <div style={{textAlign: "center"}}>
                            <h2 >Cart Empty</h2>
                            <i className="bi bi-basket" style={{fontSize: "4rem"}}></i>
                        </div>
                    )
                    :
                    (
                        <section className="h-100 h-custom" style={{backgroundColor: '#d2c9ff'}}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12">
                                    <div className="card card-registration card-registration-2"style={{bordeRadius: '15px'}} >
                                        <div className="card-body p-0">
                                            <div className="row g-0">
                                                <div className="col-lg-8">
                                                    <div className="p-5">
                                                        <div className="d-flex justify-content-between align-items-center mb-5">
                                                            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                            <h6 className="mb-0 text-muted">3 items</h6>
                                                        </div>
                                                        <hr className="my-4"/>
                                                        {
                                                            cart && cart.map((item, index) => (
                                                                <>
                                                                    <div className="row  d-flex justify-content-around align-items-center">

                                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                                            <img
                                                                                style={{height:"100%"}}
                                                                                src={item.image}
                                                                                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                                        </div>
                                                                        <div className="col-md-2 col-lg-3 col-xl-3">
                                                                            <h6 className="text-muted">{item.name}</h6>
                                                                            <h6 className="text-black mb-0">{item.description}</h6>
                                                                        </div>
                                                                        <div className="col-md-2 col-lg-3 col-xl-2 d-flex">
                                                                            <button className="btn px-2 text-muted" onClick={() => handleIncrement(item.id)}>
                                                                                +
                                                                            </button>

                                                                            <span>{item.qty}</span>

                                                                            <button className="btn  px-2" onClick={() => handleDecrement(item.id)}>
                                                                                -
                                                                            </button>

                                                                        </div>
                                                                        <div className="col-md-2 col-lg-2 col-xl-2 ">
                                                                            <h6 className="mb-0">{item.price}</h6>
                                                                        </div>

                                                                        <div className="col-md-2 col-lg-2 col-xl-2 ">
                                                                            <h6 className="mb-0">{item.qty * item.price}</h6>
                                                                        </div>


                                                                        <div className="col-md-2 col-lg-2 col-xl-2 ">
                                                                            <button onClick={() => handleRemoveCart(item.id)} className="btn btn-dark "
                                                                                    data-mdb-ripple-color="dark">Delete
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                    <hr className="my-4"/>
                                                                </>

                                                            ))
                                                        }


                                                        <hr className="my-4"/>
                                                        <div className="pt-5">
                                                            <h6 className="mb-0"><a href="#!" className="text-body"><i
                                                                className="fas fa-long-arrow-alt-left me-2"></i>Back
                                                                to shop</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 bg-grey">
                                                    <div className="p-5">
                                                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                        <hr className="my-4"/>

                                                        <button onClick={() => handleClearCart()} type="button" className="btn btn-dark "
                                                                data-mdb-ripple-color="dark">Clear Cart
                                                        </button>

                                                        <hr className="my-4"/>

                                                        <div className="d-flex justify-content-between mb-5">
                                                            <h5 className="text-uppercase">Total price</h5>
                                                            <h5>{cart.reduce((total, product) => {
                                                                return total + product.qty * product.price

                                                            }, 0)}</h5>
                                                        </div>

                                                        <button type="button" className="btn btn-dark "
                                                                data-mdb-ripple-color="dark">Checkout
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    )
            }

        </>
    )
}

export default ShoppingCart
