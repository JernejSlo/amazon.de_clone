import "./Search.css"
import SearchProduct from "./SearchProduct";
import {useEffect, useState} from "react";
import productBooks from "./products/productBooks";
import productsPhones from "./products/productsPhones";
import productsBeauty from "./products/productsBeauty";
import productFitness from "./products/productFitness";
import {useLocation} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

export default function Search(props) {


    const Empty = []

    const [categories, setcategories] = useState([productBooks, productsPhones, productsBeauty, productFitness])

    const [arr, setarr] = useState({
        arry: [[]]
    })

    const location = useLocation()
    const {from} = location.state


    let arrChild = [];

    function search() {

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 29; j++) {

                if (String(categories[i][j].title).toLowerCase().match(String(from.text).toLowerCase()) !== null) {
                    arrChild.push([i, j])

                }

            }
        }
        console.log(arrChild)

    }


    const useMountEffect = (fun) => useEffect(fun, [])

    return (
        <div className="whole2">
            {search()}
            <div>


                <div className="search__results">
                    <div className="search__resultsText">
                        {arrChild.length} results for <span>{'"' + from.text + '"'}</span>
                    </div>

                </div>
                <div className="search">

                    <div className="search__details">
                        <h5>Condition</h5>
                    </div>
                    <div className="search__items">
                        <h3>RESULTS</h3>

                        {arrChild.map(item => (
                            <SearchProduct
                                id={categories[item[0]][item[1]].id}
                                title={categories[item[0]][item[1]].title}
                                price={categories[item[0]][item[1]].price}
                                image={categories[item[0]][item[1]].image}
                                quantity={categories[item[0]][item[1]].quantity}
                                rating={categories[item[0]][item[1]].rating}

                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

/*
<SearchProduct
                    id={categories[arr.arry[i][0]][arr.arry[i][1]].id}
                    title={categories[arr.arry[i][0]][arr.arry[i][1]].title}
                    price={categories[arr.arry[i][0]][arr.arry[i][1]].price}
                    image={categories[arr.arry[i][0]][arr.arry[i][1]].image}
                    rating={categories[arr.arry[i][0]][arr.arry[i][1]].rating}
                    quantity={categories[arr.arry[i][0]][arr.arry[i][1]].quantity}
                />
 */