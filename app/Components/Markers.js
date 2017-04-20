import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

export default class Markers extends Component {
	constructor (props){
	  super(props)
	}

	render(){
		return(
			<Layer
	      type="symbol"
	      id="marker"
	      layout={{ "icon-image": "marker-15" }}>
				{Object.keys(this.props.articles).map((key) => {
				  const lat = this.props.articles[key].coordinates[0].lat
					const lon = this.props.articles[key].coordinates[0].lon
					const article = this.props.articles[key]
					return(
			      <Feature 
			      	key={key}
			      	onClick={this.props._markerClick.bind(null, article)}
			      	coordinates={[lon, lat]} />
		      )
		    })}
	    </Layer>
		)
	}
}


Markers.propTypes = {
  articles: PropTypes.object.isRequired,
  _markerClick: PropTypes.func.isRequired
}
