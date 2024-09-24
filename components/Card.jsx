
const Card = (props) => {
  console.log(props.item.openSpots);
  return (
    <div className = "card">
        {props.openSpots === 0 && <div className = "cardBadge">SOLD OUT</div>}
        <img src = {`./images/${props.item.coverImg}`} alt = "Main card image." className = "cardImage"></img>
        <div className = "rating"> 
          <img src = "./star.png" alt = "Star icon." className = "star"></img>
          <span>{props.item.stats.rating}</span>
          <span className = "gray">({props.item.stats.reviewCount}) • </span>
          <span className = "gray">{props.item.location}</span>
        </div>
        <h2 className = "cardTitle">{props.item.title}</h2>
        <p className = "cardPrice"> <b>From ${props.item.price}</b> / person</p>
    </div>
  )
}

export default Card