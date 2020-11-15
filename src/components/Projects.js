import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FolderOpen } from '@material-ui/icons'
const useStyles = makeStyles((theme)=>({
	card: {
		boxShadow: "0px 10px 25px rgba(0,0,0, 0.25)",
		borderRadius: "5px",
		cursor: "pointer",
		overflow: "hidden",
		'& img': {
			width: "100%"
		},
		'& .card_content': {
			padding: "20px",
			"& .title": {
				margin: '0',
				fontSize: '1.5rem'
			},
			'& .card_catagory': {
				display: 'flex',
				alignItems: 'center',
				marginTop: '10px',
				"& .MuiSvgIcon-fontSizeSmall": {
					marginRight: '10px'
				}
			}
		}
	}
}))

function Projects() {
	const classes = useStyles()
	const takeMeToSource = (source) => () =>{
		window.open(source, '_blank')
	}
	return (
		<section className={"section"} id="projects">
			<Container maxWidth="lg">
				<h2 className="section-title">Projects I Have Done</h2>
				<Grid container spacing={3}>
					<Grid item lg={4} sm={6} xs={12}>
						<div className={classes.card} onClick={takeMeToSource('https://github.com/Nasar-uddin/flutter_note_todo')}>
							<img alt="android flutter mobile app" src="https://img.techpowerup.org/201112/android-app491.png"/>
							<div className={"card_content"}>
								<h3 className="title">G-Notes</h3>
								<div className={"card_catagory"}>
									<FolderOpen fontSize="small"/>
									<small>Android app</small>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item lg={4} sm={6} xs={12}>
						<div className={classes.card} onClick={takeMeToSource('https://magpiereport.web.app')}>
							<img alt="android flutter mobile app" src="https://img.techpowerup.org/201112/magpie-data-analytics.png"/>
							<div className={"card_content"}>
								<h3 className="title">Magpie Analytics</h3>
								<div className={"card_catagory"}>
									<FolderOpen fontSize="small"/>
									<small>React app</small>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item lg={4} sm={6} xs={12}>
						<div className={classes.card} onClick={takeMeToSource('https://github.com/Nasar-uddin/football_match-perdiction')}>
							<img alt="android flutter mobile app" src="https://img.techpowerup.org/201112/predict-match.png"/>
							<div className={"card_content"}>
								<h3 className="title">Football Match Prediction</h3>
								<div className={"card_catagory"}>
									<FolderOpen fontSize="small"/>
									<small>Artificial intellegience</small>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default Projects
// https://img.techpowerup.org/201112/predict-match.png