import React from 'react';
import './style/style.css';
import Videoitem from './video_list_items';

const Videolist=(props)=>{
  const Videoitems=  props.videos.map((video)=>{
      return <Videoitem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video={video}/>;
  });
  return(
           <ul className="col-md-4 list-groups">
             {Videoitems}
           </ul>
  );
};
export default Videolist;