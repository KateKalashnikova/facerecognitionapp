import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3 b gold'>
			{'This Smart Brain will detect faces in your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' placeholder="Enter your URL" onChange={onInputChange}/>
					<button className='w-30 center grow f4 link ph2 pv2 dib white'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
