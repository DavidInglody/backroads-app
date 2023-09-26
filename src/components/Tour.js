import {tours} from "../data"

const Tour = () => {
  return <div className="section-center featured-center">
    {tours.map((oneTour)=>{
        const{id,img,date,heading,text,location,duration,price} = oneTour
        return  <article className="tour-card">
          <div key= {id} className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{heading}</h4>
            </div>
            <p>{text}</p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>{location}
              </p>
              <p>{duration}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
      })}
  </div>
}
export default Tour