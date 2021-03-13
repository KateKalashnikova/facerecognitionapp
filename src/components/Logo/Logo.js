import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br3 shadow-3 pa2" options={{ max : 35 }} style={{ height: 130, width: 130 }} >
	 			<div className="Tilt-inner"> <img alt='logo' src={brain}/> 
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;