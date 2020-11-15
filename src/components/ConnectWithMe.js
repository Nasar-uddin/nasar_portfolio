import { Container } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import fiverr from '../assets/icons/fiverr.svg'
import upwork from '../assets/icons/upwork.svg'
import gmail from '../assets/icons/gmail.svg'
import github from '../assets/icons/github.svg'

const useStyles = makeStyles(theme=>({
	socialWraper: {
		display: 'flex',
		justifyContent: 'center'
	},
	wrapOne: {
		flexBasis: '40px',
		margin: "0 10px",
		padding: '15px',
		[theme.breakpoints.down('xs')]: {
			padding: '3px'
		},
		borderRadius: "50%",
		backgroundColor: "#1F2833",
		cursor: 'pointer',
		boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
		transition: '0.5s',
		"& img": {
			width: '100%'
		},
		"&:hover":{
			transform: 'translateY(-10px)',
			boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
		}
	}
}))

function ConnectWithMe() {
	const classes = useStyles()
	const takeMeToNasar = (link) => ()=>{
		window.open(link, "_blank")
	}
	return (
		<>
			<section className="section" id="social">
				<Container maxWidth="lg">
					<h2 className="section-title">Connect with me</h2>
					<div className={classes.socialWraper}>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://www.facebook.com/nasaruddin007')}>
							<img alt="facebook" src={facebook}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://twitter.com/nasar00708')}>
							<img alt="facebook" src={twitter}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://www.instagram.com/nasar_uddin.007')}>
							<img alt="facebook" src={instagram}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://www.fiverr.com/nasaruddin7')}>
							<img alt="facebook" src={fiverr}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://www.upwork.com/o/profiles/users/~01c3306d04a950787a/')}>
							<img alt="facebook" src={upwork}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://mail.google.com/mail/?view=cm&fs=1&to=nasaruddin171@gmail.com')}>
							<img alt="facebook" src={gmail}/>
						</div>
						<div className={classes.wrapOne} onClick={takeMeToNasar('https://github.com/Nasar-uddin')}>
							<img alt="facebook" src={github}/>
						</div>
					</div>
				</Container>
			</section>
			<section className="footer">
				<p>Copyright researved for @<span className="script-font">Nasar uddin</span></p>
			</section>
		</>
	)
}

export default ConnectWithMe
