import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/index'
import ReactMapboxGl, { Popup } from "react-mapbox-gl"

export default class Popups extends Component {
	constructor (props){
	  super(props)
	}

	render(){
	  return (
	   	<Popup
	   	  offset={[0, -50]}
	   	  coordinates={[this.props.popup.coordinates[0].lon, this.props.popup.coordinates[0].lat]}
	   	  style={styles.popup}>

	   	  	<span style={styles.popupTitle}>
	   	  	  {this.props.popup.title}
	   	  	</span>
	   	  	<div style={styles.popUpBody}>
		   	  	{this.props.popup.thumbnail &&
	  	   	  	<img
	  	   	  		style={styles.popupImg}
	        			src={this.props.popup.thumbnail.source}
	        			alt='Cover' />
	      		}
		   	    <p
		   	    	style={styles.popupExtract}>
		   	    	{this.props.popup.extract}
		   	    </p>
		   	    <a href={'http://en.wikipedia.org/?curid=' + this.props.popup.pageid}>
		 					wikipedia
		   	    </a>
	   	    </div>
	   	</Popup>
	  )
	}	
}

Popups.propTypes = {
  popup: PropTypes.object.isRequired
}
