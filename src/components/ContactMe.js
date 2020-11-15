import { Box, Container, Grid, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import firebase from '../config/_firebase'


const useStyles = makeStyles(theme=>({
	root: {
		backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://img.techpowerup.org/201111/full-stack-web-developer.jpg)",
		// backgroundColor: "#0B0C10",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: 'fixed'
	},
}))
function ContactMe() {
	const classes = useStyles()
	const [formData, setFormData] = useState({
		email: "",
		fullName: "",
		message: ""
	})
	const handleSubmit = (e)=>{
		e.preventDefault();
		const db = firebase.firestore()
		console.log(Date.now())
		db.collection('messages').add({
			email: formData.email,
			fullName: formData.fullName,
			message: formData.message,
			sendAt: Date.now()
		}).then(response=>{
			// console.log(response)
			setFormData({
				email: "",
				fullName: "",
				message: ""
			})
		}).catch(error=>{
			console.log(error)
		})
		
	}
	return (
		<section className={classes.root+' section'} id="contactme">
			<Container maxWidth="lg">
				<h2 className="section-title">Let's talk about next project</h2>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3} justify="center">
						<Grid item md={6} sm={8} xs={12}>
							<TextField variant="outlined" fullWidth type="email" placeholder="Your Email" value={formData.email} required onChange={e=>{setFormData({...formData, email: e.target.value})}}/>
							<Box mt={2}>
								<TextField variant="outlined" fullWidth placeholder="Full Name" value={formData.fullName} required onChange={e=>{setFormData({...formData, fullName: e.target.value})}}/>
							</Box>
							<Box mt={2} mb={2}>
								<TextField fullWidth multiline
									style={{height: '100%'}}
									rows={5}
									placeholder="Your message"
									variant="outlined" 
									required
									value={formData.message}
									onChange={e=>{setFormData({...formData, message: e.target.value})}}
								/>
							</Box>
							<Button fullWidth size="large" type="submit" variant="contained" className="my-btn">Send me a message</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</section>
	)
}

export default ContactMe
