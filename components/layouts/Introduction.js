import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const Introduction = () => {
	return (
		<section className='introduction'>
			<div className='column'>
				<h1 className='heading'>hi i live in vancouver</h1>
				<Button link='#' background='mint' size='large' shape='rounded' iconLeft='ri-home-line'>
					i'm learning react and next.js
				</Button>
			</div>
			<div className='column'>
				<div className='profile'>
					<Image src='/profile.jpg' layout='fill' priority='true'/>
				</div>
			</div>
		</section>
	)
}

export default Introduction
