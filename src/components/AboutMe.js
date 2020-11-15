import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
	root: {
		backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://img.techpowerup.org/201111/full-stack-web-developer.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: 'fixed'
	},
	about_list: {
		fontSize: "1.75rem",
		fontWeight: "500",
		color: "#66FCF1",
		margin: "0",
		lineHeight: "200%",
		listStyle: "none",
		textAlign: "center"
	}
}))
function AboutMe() {
	const classes = useStyles()
	return (
		<section className={classes.root+" section"} id="aboutme">
			<h2 className="section-title">About Me</h2>
			<ul className={classes.about_list}>
				<li>Full time freelancer</li>
				<li>A Bachelor In CSE</li>
				<li>Full stack web and mobile developer</li>
				<li>Travler</li>
				<li>Dreamer</li>
			</ul>
		</section>
	)
}

export default AboutMe
