import locationIcon from '../images/location-icon.png';

function Destination(props) {
    return (
        <>
            <div className='destination'>
                <img src={require(`../images/${props.destination.imageUrl}`)} alt={props.destination.imageUrl} className='destination--image' />
                <div className='destination--side'>
                    <div className='destination--info'>
                        <div className='destination--location-container'>
                            <img src={locationIcon} alt='Location Icon' className='destination--location-icon' />
                            <p className='destination--location'>{props.destination.location}</p>
                        </div>
                        <a href={props.destination.googleMapsUrl} target='_blank' rel="noreferrer" className='destination--google-maps'>View on Google Maps</a>
                    </div>
                    <p className='destination--title'>{props.destination.title}</p>
                    <p className='destination--date'>{`${props.destination.startDate} - ${props.destination.endDate}`}</p>
                    <p className='destination--description'>{props.destination.description}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Destination;