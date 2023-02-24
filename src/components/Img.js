
function Img(props) {
    return ( 
        <div className="card-img">
            <img src={props.src} alt={props.alt} />
        </div>

     );
}

export default Img;