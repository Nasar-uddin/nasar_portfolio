import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Container, IconButton } from '@material-ui/core'
import {Menu, CloseTwoTone} from '@material-ui/icons'

import logo from '../assets/logo.png'

const useStyles = makeStyles(theme=>({
	heroRoot: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#1F2833",
		position: 'relative',
		textAlign: "center",
		minHeight: "100vh",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage: "url(https://img.techpowerup.org/201110/nasar.png)",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '-30% center',
		[theme.breakpoints.down('xs')]: {
			backgroundPosition: '160% center',
			backgroundSize: '500px'
		},
		[theme.breakpoints.only('sm')]: {
			backgroundPosition: '-200% center',
		},
		[theme.breakpoints.only('md')]: {
			backgroundPosition: '-40% center',
		},
		[theme.breakpoints.up('lg')]: {
			backgroundPosition: '-10% center',
		}
	},
	navbar: {
		position: 'absolute',
		left: "0",
		top: "0",
		textAlign: 'left',
		width: '100%',
		paddingTop: "10px",
		paddingBottom: '10px',
		'& .nav-content':{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		}
	},
	heading2: {
		fontSize: theme.spacing(6),
		margin: "0"
	},
	heading3: {
		fontSize: theme.spacing(3.75),
		fontWeight: "500",
		margin: "0"
	},
	menu: {
		position: 'fixed',
		zIndex: '10',
		left: '0',
		top: '0',
		backgroundColor: 'rgba(11, 12, 16,0.8)',
		height: '100vh',
		width: '0vw',
		transition: '1s width'
	},
	hide: {
		display: 'none'
	},
	show: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		'& .close_btn': {
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '10px 30px'
		}
	},
	nav_content: {
		display: 'flex',
		justifyContent: 'center',
		'& ul':{
			listStyle: 'none',
			fontSize: '1.5rem',
			maxWidth: '400px',
			margin: '0',
			padding: '20px 30px',
			textAlign: 'center',
			'& li': {
				padding: '10px 0px',
				'& a': {
					color: '#FFFFFF',
					textDecoration: 'none'
				}
			}
		}
	}
}))

function HeroArea() {
	const classes = useStyles()
	const [navMenuOpen, setNavMenuOpen] = useState(false)
	// console.log('Rendered')
	const toggleNavMenu = (e)=>{
		// console.log(navMenuOpen)
		setNavMenuOpen(!navMenuOpen)
	}
	return (
		<header className={classes.heroRoot} id="home">
			<nav className={classes.navbar}>
				<div className={`${classes.menu} ${!navMenuOpen?classes.hide:classes.show}`}>
					<div className={"close_btn"}>
						<IconButton style={{color: '#FFFFFF'}}  onClick={toggleNavMenu}>
							<CloseTwoTone/>
						</IconButton>
					</div>
					<div className={classes.nav_content}>
						<ul>
							<li onClick={toggleNavMenu}><a href="#home">Home</a></li>
							<li onClick={toggleNavMenu}><a href="#aboutme">About me</a></li>
							<li onClick={toggleNavMenu}><a href="#services">Services</a></li>
							<li onClick={toggleNavMenu}><a href="#skills">Skills</a></li>
							<li onClick={toggleNavMenu}><a href="#projects">Projects</a></li>
							<li onClick={toggleNavMenu}><a href="#contactme">Contact Me</a></li>
							<li onClick={toggleNavMenu}><a href="#social">Social</a></li>
						</ul>
					</div>
				</div>
				<Container maxWidth="lg">
					<div className={"nav-content"}>
						<img alt="log" src={logo}/>
						<IconButton className={`${navMenuOpen?classes.hide:""}`} style={{color: '#FFFFFF'}} onClick={toggleNavMenu}>
							<Menu/>
						</IconButton>
					</div>
				</Container>
			</nav>
			<h2 className={classes.heading2+" script-font"}>Hello I am</h2>
			<h1 className={"huge-font"}>Nasar uddin</h1>
			<h4 className={classes.heading3}>A full stack web and mobile developer</h4>
		</header>
	)
}

export default HeroArea
