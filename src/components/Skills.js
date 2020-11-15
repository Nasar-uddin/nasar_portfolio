import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import SkillBar from './widgets/SkillBar'

const useStyles = makeStyles((theme)=>({
	root: {
		backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://img.techpowerup.org/201111/web-developer-and-designer-skills.jpg)",
		backgroundPosition: "cover",
		backgroundAttachment: "fixed"
	}
}))
function Skills() {
	const classes = useStyles()
	return (
		<section className={classes.root+" section"} id="skills">
			<Container maxWidth="lg">
				<h2 className="section-title">Skills I have</h2>
				<SkillBar name={'HTML'} sikll_level={80}/>
				<SkillBar name={"CSS"} sikll_level={75}/>
				<SkillBar name={'JavaScript'} sikll_level={80}/>
				<SkillBar name={'Bootstrap'} sikll_level={75}/>
				<SkillBar name={'React'} sikll_level={70}/>
				<SkillBar name={'Python'} sikll_level={65}/>
				<SkillBar name={'Django'} sikll_level={55}/>
				<SkillBar name={'Flutter(Android)'} sikll_level={65}/>
			</Container>
		</section>
	)
}

export default Skills