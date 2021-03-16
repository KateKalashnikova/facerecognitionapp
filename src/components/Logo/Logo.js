import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

class Logo extends React.Component 
{
	render()
	{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br3 shadow-5 pa2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
	 			<div className="Tilt-inner"> <img alt='logo' src={brain}/> 
	 			</div>
			</Tilt>
		</div>
		)
	}
}
export default Logo;