import React from 'react'
import Image from 'next/future/image'
import Button from '../Button'
import { motion } from 'framer-motion'

const profile = '/profile.jpg'

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		x: 15
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
}
const Introduction = () => {
	return (
		<section className='introduction'>
			<motion.div
				className='column'
				initial='hidden'
				animate='show'
				variants={container}
			>
				<motion.div
					className='column'
					data-gap='smaller'
					variants={item}
				>
					<h4>Nice to meet you! I'm</h4>
					<h1>Brian Lai</h1>
				</motion.div>
				<motion.h5 variants={item}>A recent Biology graduate from UBC with an interest in design and front-end web development</motion.h5>
				<motion.div className='row' variants={item}>
					<Button link='/resume-20220611.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
					<Button link='mailto:laibrian@alumni.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
				</motion.div>
			</motion.div>
			<div className='column'>
				<div className='profile'>
					<Image src={profile} width='1125' height='1125' sizes='(max-width: 768px) 16rem, 24rem' priority alt='Profile photo'/>
				</div>
			</div>
		</section>
	)
}

export default Introduction
