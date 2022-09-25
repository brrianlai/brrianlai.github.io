import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const container = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.4,
			ease: 'easeOut'
		}
	}
}

const Fade = ({ children }) => {
	return (
		<div>
			<AnimatePresence mode={false}>
				{children.map((child, index) => (
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						key={{index}}
					>
						{child}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default Fade