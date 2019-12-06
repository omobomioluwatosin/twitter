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
           <div className='list3'><h3> <FontAwesomeIcon icon={faComment}  size={'lg'}/>Join the conversation.</h3></div>
            </div>
            <div className="network">
               

    
            </div>
            </div>

  );
}

export default App;
