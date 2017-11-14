
import React from 'react';
// import { Link } from 'react-router';
// import FStackContainer from '../components/FStackContainer';

import '../App.css';
import splatter from '../images/splatter.png';

export default class Profile extends React.Component {

   render() {
       return (
           <div className="row user-header p-y-2">

               <div className="col-md-offset-2 col-md-8 p-y-4">
                   <div className="media">
                       <div className="media-left">
                           <a>
                               <img
                                   className="media-object"
                                   src="https://process.filestackapi.com/crop_faces=mode:fill/IInKNAlSDajDFnceb5T0"
                                   alt="profile-pic"
                               />
                           </a>
                       </div>
                       <div className="media-body p-l-6">
                           <h2 className="media-heading m-t-15">Banksy</h2>
                           <h4>International Man of Street Art Mystery</h4>
                           <ul className="header-ul">
                               <li><strong>50</strong> posts</li>
                               <li><strong>300k</strong> followers</li>
                               <li><strong>180</strong> following</li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div>
                 <img src={splatter} className="splatter" alt={"splat"}/>
               </div>

            </div>
       );
   }
}
