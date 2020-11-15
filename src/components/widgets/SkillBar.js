import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
	skill: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		"& .skill_name_wraper": {
			flexBasis: '20%',
			textAlign: 'right',
			paddingRight: "30px",
			"& .skill_name": {
				fontSize: "1.875rem",
				margin: "20px 0px"
			}
		},
		"& .skill_indicator": {
			flexBasis: "70%",
			flexShrink: "400px",
			borderRadius: '2px',
			overflow: 'hidden',
			[theme.breakpoints.down('sm')]: {
				flexBasis: "80%",
			},
			"& .skill_bar_wraper": {
				width: '100%',
				height: "10px",
				backgroundColor: "#45A29E"
			},
			"& .skill_bar_inner": {
				height: '100%',
				backgroundColor: "#66FCF1",
				transition: '1s width'
			}
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'inherit',
			"& .skill_name_wraper": {
				textAlign: 'left',
				paddingRight: "0",
			},
		}
	}
}))
function SkillBar({name, sikll_level}) {
	const classes = useStyles()

	return (
		<div className={classes.skill}>
			<div className={"skill_name_wraper"}>
				<h4 className={"skill_name"}>{name}</h4>
			</div>
			<div className={"skill_indicator"}>
				<div className={"skill_bar_wraper"}>
					<div className={"skill_bar_inner"} style={{width: `${sikll_level}%`}}></div>
				</div>
			</div>
		</div>
	)
}

export default SkillBar
