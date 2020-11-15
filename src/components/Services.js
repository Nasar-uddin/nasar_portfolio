import { Container, Grid } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
	card: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '200px',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		backgroundColor: '#1F2833',
		padding: '20px',
		boxShadow: '0px 8px 20px rgba(0,0,0, 0.25)',
		borderRadius: '5px',
		'& .card-title': {
			fontSize: '1.875rem',
			margin: '15px 0px'
		},
		'& .bottom-line': {
			height: '4px',
			borderRadius: '2px',
			width: '110px',
			backgroundColor: '#66FCF1',
			transition: '0.5s'
		},
		'&:hover .bottom-line': {
			width: '140px'
		}

	}
}))
function Services() {
	const classes = useStyles()
	return (
		<section className="section" id="services">
			<Container maxWidth="lg">
				<h2 className="section-title">Services I Provide</h2>
				<Grid container spacing={3}>
					<Grid item md={3} sm={6} xs={12}>
						<div className={classes.card}>
							<h3 className={"card-title"}>Web Design</h3>
							<span className={"bottom-line"}></span>
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12}>
						<div className={classes.card}>
							<h3 className={"card-title"}>Mobile Design</h3>
							<span className={"bottom-line"}></span>
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12}>
						<div className={classes.card}>
							<h3 className={"card-title"}>Web Development</h3>
							<span className={"bottom-line"}></span>
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12}>
						<div className={classes.card}>
							<h3 className={"card-title"}>Android App Development</h3>
							<span className={"bottom-line"}></span>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default Services
