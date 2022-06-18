import home from './Home.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Product from "./Product";
import {useEffect, useState} from "react";
import productsBeauty from "./products/productsBeauty";
import productsPhones from "./products/productsPhones";
import productBooks from "./products/productBooks";
import productFitness from "./products/productFitness";
import CategoriesFour from "./CategoriesFour";
import Bottom from "./Bottom";

export default function Home() {

    console.log("asndbaks"+Math.floor((Math.random() * 3) ))
    const [num, setNum] = useState(Math.floor((Math.random() * 4) ))
    const [num2, setNum2] = useState(Math.floor((Math.random() * 29) ))
    const [num3, setNum3] = useState(Math.floor((Math.random() * 4) ))
    const [num4, setNum4] = useState(Math.floor((Math.random() * 29) ))
    const [num5, setNum5] = useState(Math.floor((Math.random() * 4) ))
    const [num6, setNum6] = useState(Math.floor((Math.random() * 29) ))
    const [num7, setNum7] = useState(Math.floor((Math.random() * 4) ))
    const [num8, setNum8] = useState(Math.floor((Math.random() * 29) ))
    const [num9, setNum9] = useState(Math.floor((Math.random() * 4) ))
    const [num10, setNum10] = useState(Math.floor((Math.random() * 29) ))
    const [num11, setNum11] = useState(Math.floor((Math.random() * 4) ))
    const [num12, setNum12] = useState(Math.floor((Math.random() * 29) ))
    const [num13, setNum13] = useState(Math.floor((Math.random() * 4) ))
    const [num14, setNum14] = useState(Math.floor((Math.random() * 29) ))
    const [num15, setNum15] = useState(Math.floor((Math.random() * 4) ))
    const [num16, setNum16] = useState(Math.floor((Math.random() * 29) ))

    const [imgLink, setImgLink] = useState({
        img1: "slika1.jpg"
    })
    const [data, setdata] = useState([]
    )
    const [categories, setcategories] = useState([productBooks,productsPhones,productsBeauty,productFitness])




    function changepic(e) {
        e.preventDefault();
        if (imgLink.img1 === "slika1.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika2.jpg"
                }
            })
        } else if (imgLink.img1 === "slika2.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika3.jpg"
                }
            })
        } else if (imgLink.img1 === "slika3.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika1.jpg"
                }
            })
        }
    }

    function changepic2(e) {
        e.preventDefault();
        if (imgLink.img1 === "slika1.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika3.jpg"
                }
            })
        } else if (imgLink.img1 === "slika2.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika1.jpg"
                }
            })
        } else if (imgLink.img1 === "slika3.jpg") {
            setImgLink(prevState => {
                return {
                    ...prevState,
                    img1: "slika2.jpg"
                }
            })
        }
    }


    return (
        <div className="home">
            <div id="#home">

            </div>
            <div className="home__container">
                <button className="home__btnL" onClick={changepic2}>
                    <ChevronLeftIcon className="home__btnIcon"/>
                </button>
                <button className="home__btnR">
                    <ChevronRightIcon className="home__btnIcon"/>
                </button>
                <img id="image" className="home__image" src={imgLink.img1} onClick={changepic} alt=""/>
                <div className="home__rows">
                    <div className="home__row">
                        <Product
                            id={categories[num][num2].id}
                            image={categories[num][num2].image}
                            rating={categories[num][num2].rating}
                            title={categories[num][num2].title.length >31 ? categories[num9][num10].title.slice(0,30)+"..." : categories[num][num2].title}
                            price={categories[num][num2].price} price={categories[num][num2].price}/>
                        <Product
                            id={categories[num3][num4].id}
                            image={categories[num3][num4].image}
                            rating={categories[num3][num4].rating}
                            title={categories[num3][num4].title.length >31 ? categories[num3][num4].title.slice(0,30)+"..." : categories[num3][num4].title}
                            price={categories[num3][num4].price} price={categories[num3][num4].price}/>
                        <Product
                            id={categories[num5][num6].id}
                            image={categories[num5][num6].image}
                            rating={categories[num5][num6].rating}
                            title={categories[num5][num6].title.length > 31 ? categories[num5][num6].title.slice(0,30)+"..." : categories[num5][num6].title}
                            price={categories[num5][num6].price} price={categories[num5][num6].price}/>
                        <Product
                            id={categories[num7][num8].id}
                            image={categories[num7][num8].image}
                            rating={categories[num7][num8].rating}
                            title={categories[num7][num8].title.length >31 ? categories[num7][num8].title.slice(0,30)+"..." : categories[num7][num8].title}
                            price={categories[num7][num8].price} price={categories[num7][num8].price}/>

                    </div>
                </div>


                <div className="home__rowMore">
                    <div className="home__moreHeader">
                        <h3>More items to explore</h3>
                    </div>
                    <div className="home__flex">
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                        <img className="home__imageMore" src={categories[Math.floor((Math.random() * 4) )][Math.floor((Math.random() * 29) )].image}/>
                    </div>

                </div>

                <div className="home__row">
                    <Product
                        id={categories[num9][num10].id}
                        image={categories[num9][num10].image}
                        rating={categories[num9][num10].rating}
                        title={categories[num9][num10].title.length >31 ? categories[num9][num10].title.slice(0,30)+"..." : categories[num9][num10].title}
                        price={categories[num9][num10].price}/>
                    <Product
                        id={categories[num11][num12].id}
                        image={categories[num11][num12].image}
                        rating={categories[num11][num12].rating}
                        title={categories[num11][num12].title.length >31 ? categories[num11][num12].title.slice(0,30)+"..." : categories[num11][num12].title}
                        price={categories[num11][num12].price} price={categories[num11][num12].price}/>
                    <Product
                        id={categories[num13][num14].id}
                        image={categories[num13][num14].image}
                        rating={categories[num13][num14].rating}
                        title={categories[num13][num14].title.length >31 ? categories[num13][num14].title.slice(0,30)+"..." : categories[num13][num14].title}
                        price={categories[num13][num14].price} price={categories[num13][num14].price}/>
                    <Product
                        id={categories[num15][num16].id}
                        image={categories[num15][num16].image}
                        rating={categories[num15][num16].rating}
                        title={categories[num15][num16].title.length >31 ? categories[num15][num16].title.slice(0,30)+"..." : categories[num15][num16].title}
                        price={categories[num15][num16].price} price={categories[num15][num16].price}/>

                </div>

                <div className="home__row">
                    <CategoriesFour
                        header="Keep shopping for"
                        title={categories[0][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title2={categories[1][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title3={categories[2][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title4={categories[3][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        image={categories[0][Math.floor((Math.random() * 29) )].image}
                        image2={categories[1][Math.floor((Math.random() * 29) )].image}
                        image3={categories[2][Math.floor((Math.random() * 29) )].image}
                        image4={categories[3][Math.floor((Math.random() * 29) )].image}
                    />
                    <CategoriesFour
                        header="Keep shopping for"
                        title={categories[0][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title2={categories[1][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title3={categories[2][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title4={categories[3][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        image={categories[0][Math.floor((Math.random() * 29) )].image}
                        image2={categories[1][Math.floor((Math.random() * 29) )].image}
                        image3={categories[2][Math.floor((Math.random() * 29) )].image}
                        image4={categories[3][Math.floor((Math.random() * 29) )].image}
                    />
                    <CategoriesFour
                        header="Keep shopping for"
                        title={categories[0][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title2={categories[1][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title3={categories[2][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title4={categories[3][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        image={categories[0][Math.floor((Math.random() * 29) )].image}
                        image2={categories[1][Math.floor((Math.random() * 29) )].image}
                        image3={categories[2][Math.floor((Math.random() * 29) )].image}
                        image4={categories[3][Math.floor((Math.random() * 29) )].image}
                    />
                    <CategoriesFour
                        header="Keep shopping for"
                        title={categories[0][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title2={categories[1][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title3={categories[2][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        title4={categories[3][Math.floor((Math.random() * 29) )].title.slice(0,15)+"..."}
                        image={categories[0][Math.floor((Math.random() * 29) )].image}
                        image2={categories[1][Math.floor((Math.random() * 29) )].image}
                        image3={categories[2][Math.floor((Math.random() * 29) )].image}
                        image4={categories[3][Math.floor((Math.random() * 29) )].image}
                    />
                </div>


            </div>


        </div>
    )
}