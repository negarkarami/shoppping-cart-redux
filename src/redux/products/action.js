import {SET_PRODUCTS} from "./actionType";
import img1 from "../../assets/image/pexels-essow-k-1042143.jpg";
import img2 from "../../assets/image/pexels-lisa-fotios-1092644.jpg";
import img3 from "../../assets/image/pexels-hammad-khalid-1786433.jpg";
import img4 from "../../assets/image/pexels-pixabay-248526.jpg";


const productData = [
    {
        id: 1,
        name: "Samsung Galexy S20",
        description: "Samsung Galaxy S20 is available",
        image :img1,
        price: 30000
    },
    {
        id: 2,
        name: "Samsung Galexy A10",
        description: "Samsung Galaxy A10 is available",
        image :img2,
        price: 4560000
    },
    {
        id: 3,
        name: "Samsung Galexy G220",
        description: "Samsung Galaxy G220 is available",
        image :img3,
        price: 1230000
    },
    {
        id: 4,
        name: "Samsung Galexy Pro20",
        description: "Samsung Galaxy Pro20 is available",
        image :img4,
        price: 6670000
    },
]
export const getProducts = () => {
    return{
        type: SET_PRODUCTS,
        payload :productData
    }

}