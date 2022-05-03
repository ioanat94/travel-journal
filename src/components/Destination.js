import locationIcon from '../images/location-icon.png';

function Destination(props) {
    return (
        <div>
            <img src={require(`../images/${props.destination.imageUrl}`)} alt={props.destination.imageUrl} className='destination--image' />
            <div>
                <img src={locationIcon} alt='Location Icon' />
                <p className='location'>{props.destination.location}</p>
                <a href={props.destination.googleMapsUrl} target='_blank' rel="noreferrer" className='google-maps'>View on Google Maps</a>
                <p className='date'>{`${props.destination.startDate} - ${props.destination.endDate}`}</p>
                <p className='description'>{props.destination.description}</p>
            </div>
        </div>
    )
}

export default Destination;