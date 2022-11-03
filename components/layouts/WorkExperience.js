import React from 'react'
import { motion } from 'framer-motion'

const workList = [
	{
		name: 'Canada Border Services Agency (CBSA)',
		date: 'Oct 2022 to present',
		subheading: 'Administrative Assistant',
		description: ''
	},
	{
		name: 'A1 Learning Centre',
		date: 'May 2022 to present',
		subheading: 'Tutor',
		description: 'Work closely with 20+ elementary students in Math and English. Hold small group learning activities for 3-4 students at once.'
	},
	{
		name: 'Adventure Zone',
		date: 'Aug 2015 to Jan 2019',
		subheading: 'Receptionist',
		description: 'Managed admissions, cash deposits, bookings, new employee training, and store opening/closing as a keyholder. Maintained and repaired computers and arcade machines.'
	}
]

const WorkExperience = () => {
	return (
		<section>

			<h4>Work Experience</h4>

			{workList.map((work, index) => (
				<motion.div
					className='grid'
					data-columns='1-2'
					data-gap='responsive'
					key={index}
					variants={item}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<div className='column' data-gap='smaller'>
						<h5>{work.name}</h5>
						<div className='row' data-gap='smaller'>
							<h6>{work.subheading}</h6>
							<h6>{work.date}</h6>
						</div>
					</div>
					<div className='column'>
						<p>{work.description}</p>
					</div>
				</motion.div>
			))}

		</section>
	)
}

const item = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

export default WorkExperience