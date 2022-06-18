import "./CategoriesFour.css"
export default function CategoriesFour(props){
    return(
        <div className="categories">
            <h1>{props.header}</h1>
            <div className="categories__flex">
                <div className="categories__margin">
                    <div className="categories__product">
                        <img src={props.image}/>
                        <label>{props.title}</label>
                    </div>
                    <div className="categories__product">
                        <img src={props.image2}/>
                        <label>{props.title2}</label>
                    </div>
                </div>
                <div className="categories__margin">
                    <div className="categories__product">
                        <img src={props.image3}/>
                        <label>{props.title3}</label>
                    </div>
                    <div className="categories__product">
                        <img src={props.image4}/>
                        <label>{props.title4}</label>
                    </div>
                </div>

            </div>





        </div>
    )
}