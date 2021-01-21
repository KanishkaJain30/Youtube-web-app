import React, { Component, isValidElement }from 'react';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import Videodetail from './components/video_detail';
import  Videolist from './components/video_list';
import './components/style/style.css';
import './App.css';
const API_key ='AIzaSyAG7YO7bespXHk024rwJ2Dq0AHrYyrMNKI';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      videos:[],
      SelectedVideo:null
    };
    this.videoSearch('SURFBOARDS');
  }
  videoSearch(term){
    YTSearch({key:API_key,term:term},(videos)=>{
     // console.log(videos);
      this.setState({
        videos:videos,
        SelectedVideo:videos[0]
      });
      
  });
  }
  
  render(){
  return (
    <div>
      <Searchbar onSearchTermChange={term=>this.videoSearch(term)}/>
      <div className="main">
      <Videodetail video={this.state.SelectedVideo}/>
      < Videolist videos={this.state.videos}
      onVideoSelect={SelectedVideo=> this.setState({SelectedVideo})}/>
      </div>
      
      </div>
  );
}
}

export default App;
