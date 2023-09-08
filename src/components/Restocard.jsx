export default Restocard = ({resList}) => {
    return (
        <div className="cardContainer">
            {resList.map((resto)=>
            <div className="each">  {key = resto.index}
                <img className="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/si5pju2lzemfm5wm7dvs" alt="foodimg" />
                <div className="det">
                <div className="name">
                <h4>{resto.name}</h4>
                </div>
                <div className="items">
                <h4>{resto.ratings}</h4>
                <h4> 36mins</h4>
                <h4> {resto.priceForTwo} for two</h4>
                </div>
                </div>
                </div>)}
            </div>
    )
}