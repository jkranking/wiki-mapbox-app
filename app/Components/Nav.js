import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import styles from '../styles/index'

export default class Nav extends Component {
	render(){
		return (
			<div style={styles.nav}>
		  	<IndexLink style={styles.links} to='/'>Home</IndexLink>&nbsp;
		  	<IndexLink style={styles.links} to='/about'>About</IndexLink>&nbsp;
	  	</div>
		)
	}
}
