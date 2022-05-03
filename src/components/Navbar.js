import globeIcon from '../images/globe-icon.png'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={globeIcon} alt='Globe icon' className='navbar--img' />
            <p className='navbar--title'>my travel journal.</p>
        </div>
    )
}

export default Navbar;