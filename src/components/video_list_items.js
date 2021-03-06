import React from 'react';
import './style/style.css';

const Videoitem = ({video,onVideoSelect}) =>{
    const imageurl = video.snippet.thumbnails.default.url;
    return(
       <li  onClick={()=>onVideoSelect(video)} className="list-group-item">  
       <div className="video-list media">
           <div className ="media-left">
                 <img className ="media-name" src={imageurl}/>
           </div>

           <div className="media-body ">
              <div className="media-heading main1"> {video.snippet.title} </div>
           </div>
         </div>  
       </li>
    );
};

export default Videoitem;