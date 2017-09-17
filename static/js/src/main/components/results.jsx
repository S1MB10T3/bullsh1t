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
         return (<h1>blank</h1>);
      }
      return (
         <div>
            <h2>Site name { site.name }</h2>
            <h2>Site score { site.score }</h2>
         </div>
      );
   }
};


export default Results;
