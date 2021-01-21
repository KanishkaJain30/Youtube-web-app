import React from 'react';
import './style/style.css';

//class Searchbar extends React.Component{
class Searchbar extends React.Component{
  constructor(props)
  {
      super(props);
      this.state={term:''};
  }
  render()
  {
      return(
          <div className="search-bar">
            <input onChange={(event)=>this.onInputChange(event.target.value)}/>
            
          </div>
      );
  }
 onInputChange(term)
 {
     this.setState({term});
     this.props.onSearchTermChange(term);
     //this.setState({term});
 }

}
export default Searchbar;