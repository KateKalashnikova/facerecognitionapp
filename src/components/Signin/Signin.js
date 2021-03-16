import React from 'react';

const Signin = ({onRouteChange}) => {
	return (
	<article className="br3 ba --black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
		<main className="pa4 black-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0 light-green">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset b--light-green ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6 " htmlFor="password">Password</label>
		        <input className="b pa2 input-reset b--light-green ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      onClick={()=> onRouteChange('home')}
		      className="b ph3 pv2 input-reset ba b--black bg-light-green grow pointer f6 dib" 
		      type="submit" 
		      value="Sign In"
		      />
		    </div>
		    <div className="lh-copy mt3">
		      <button onClick={()=> onRouteChange('Register')} className="b ph3 pv2 input-reset ba b--light-green bg-transparent grow pointer f6 dib">Register</button>
		    </div>
		  </div>
		</main>
	</article>	

	);
}

export default Signin; 