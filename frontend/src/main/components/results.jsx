import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

@connect((state) => {
   return {
      site: state.site
   };
})
class Results extends Component {
   render(){
      if(!this.props.site){
         return (<div id="resultsDiv">
                </div>
               );
      }
      return (
         <div id="resultsDiv">
            <h2>Your Score is...{ site.score }</h2>
         </div>
      );
   }
};


export default Results;
