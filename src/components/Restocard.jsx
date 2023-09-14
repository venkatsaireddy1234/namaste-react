export default RestoCard = ({name,averageRating,cuisine,priceForTwo,image,deliveryTime}) => {


    return (
        <div className="cardContainer">
            
            <div className="each">  
                <img className="foodimg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`} alt="foodimg" />

                <div className="det">
                <div className="name">
                <h4>{name}</h4>
                <div className="text-ellipsis">
                <h4 >{cuisine}</h4>
                </div>
                </div>
                <div className="items">
                <h4 className="rating">{averageRating}</h4>
                <h4> {deliveryTime} mins</h4>
                <h4> {priceForTwo}</h4>
                </div>
                </div>
                </div>
            </div>
    )
}