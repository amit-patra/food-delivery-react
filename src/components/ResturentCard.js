import {CDN_URL} from '../utils/constants';


const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResturentCard = (props) =>{
   const {resData} = props;
    // console.log(resData);
   const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData.info
    return(
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="resLogo" src={CDN_URL + cloudinaryImageId} />
           <h3>{name}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{costForTwo}</h4>
             <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default ResturentCard;