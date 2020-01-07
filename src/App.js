import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartBar,   faSearch, faUserFriends, faComment} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="container"> 

            <div className="discount">
           <div className='list1'><h3> <FontAwesomeIcon icon={faSearch}  size={'lg'}/>  Follow your interests.</h3></div>
           <div className='list2'><h3> <FontAwesomeIcon icon={faUserFriends}  size={'lg'}/> Hear what people are talking about.</h3></div>  
           <div className='list3'><h3> <FontAwesomeIcon icon={faComment}  size={'lg'}/>   Join the conversation.</h3></div>
            </div>
            <div className="network">
            <div className='form'>
              
<input type="text"  placeholder="Phone, email, or username" className='input'></input>

<input type="text"  placeholder="Password" className='input1'></input>

<button className='log'> Log in </button>

<a className="forgot" href="/account/begin_password_reset" rel="noopener">Forgot password?</a>

<div className='logo'>
</div>

<div className='go'><h2>See what’s happening in <p>the world right now</p></h2>

<h3 className='join'>Join Twitter today.</h3>
<div className='mon'>
<button className='sign'>Sign up</button>
</div>
<button className='in'>Log in</button>
</div>



</div>


    
 
                
            </div>
            </div>


  );
}

export default App;
