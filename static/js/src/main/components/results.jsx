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
                     <h1>Your Score...</h1>
                </div>
               );
      }
      return (
         <div id="resultsDiv">
            <h2>Site name { site.name }</h2>
            <h2>Site score { site.score }</h2>
         </div>
      );
   }
};


export default Results;
