import React, { Component } from 'react'
import api from '../utils/api'
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl"
import Markers from './Markers'
import Popups from './Popups'

export default class Home extends Component {
	constructor (){
	  super()

	  this.state = {
	  	articles: {},
	  	center: [-122.3321, 47.6062],
	  	popup: null,
	  	zoom: [15]
	  }
	  
	  this._handleMove = this._handleMove.bind(this)
	  this._handleMapClick = this._handleMapClick.bind(this)
	  this._markerClick = this._markerClick.bind(this)
	  this._handleZoom = this._handleZoom.bind(this)
	}

	componentDidMount () {
		const coordinates = {lng: this.state.center[0], lat: this.state.center[1]}
		this.getWikis(coordinates)
  }

	getWikis(coordinates){
	  api.fetchWikis(coordinates)
	    .then((articles) => {
	      this.setState(function(){
 	        return {
	        	articles: articles.data.query.pages
	        }
	      })
	    })
	}

	_handleMapClick(){
		this.state.popup &&
			this.setState(function(){
				return {
					popup: null
				}
			})
	}

	_handleMove(coordinates){
		this.getWikis(coordinates.transform.center)
    this.setState(function(){
        return {
      	center: [coordinates.transform.center.lng, coordinates.transform.center.lat]
      }
    })

	}

	_markerClick(articleInfo){
		this.setState(() => {
			return {
				popup: articleInfo
			}
		})
	}

	_handleZoom(map){
		this.setState(() => {
			return {
				zoom: [map.getZoom()]
			}
		})
	}

	render() {
		return (
			<div>
				<ReactMapboxGl
					onClick={this._handleMapClick}
					onMoveEnd={this._handleMove}
					onZoomEnd={this._handleMove, this._handleZoom}
					zoom={this.state.zoom}
				  style="mapbox://styles/mapbox/dark-v9"
				  accessToken='pk.eyJ1IjoiamtyYW5raW5nIiwiYSI6ImNqMW11eXBtZjAwZW4zM25vem9nZWhwdTcifQ.fcNx3HXqA2TeCUnW_A-oNg'
				  center={this.state.center}
				  containerStyle={{
				    height: "95vh",
				    width: "100vw"
				  }}>

				  <Markers 
				  	articles={this.state.articles}
				  	_markerClick={this._markerClick}
				  />

				  {this.state.popup && 
					  <Popups 
					  	popup={this.state.popup}
					  />
					}

		    	<ZoomControl />
				</ReactMapboxGl>
			</div>
		)
	}
}
