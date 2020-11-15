import React, { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import HeroArea from './components/HeroArea'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import ConnectWithMe from './components/ConnectWithMe'
import firebase from './config/_firebase'

function App() {
	useEffect(() => {
		firebase.analytics()
		console.log('anly')
	}, [])
	return (
		<div className="App">
			<HeroArea/>
			<AboutMe/>
			<Services/>
			<Skills/>
			<Projects/>
			<ContactMe />
			<ConnectWithMe/>
		</div>
	);
}

export default App;
