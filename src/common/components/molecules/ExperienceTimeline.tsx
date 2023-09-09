import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ExperienceTimeline() {
	return (
		<Timeline
			position='right'
			className='mt-8'>
			<TimelineItem>
				<TimelineOppositeContent
					color='text.secondary'
					display={{ xs: 'none', md: 'block' }}>
					<Link
						to='https://uns.ac.id/'
						target='blank'>
						<Typography
							variant='subtitle1'
							className='font-bold text-lg text-secondary hover:brightness-125 hover:underline hover:underline-offset-2'>
							Universitas Sebelas Maret Public Relation, Surakarta
						</Typography>
					</Link>
					<Typography
						variant='subtitle2'
						className=''>
						February 2021 - December 2022
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot
						color='primary'
						className=' outline-[2px] outline-dashed outline-gray-400 outline-offset-[6px] shadow-none'
					/>
					<TimelineConnector className='border border-dashed border-gray-400 bg-transparent' />
				</TimelineSeparator>
				<TimelineContent>
					<Typography
						variant='body1'
						className='font-bold text-text-primary xs:text-xl md:text-lg'>
						Web Administrator
					</Typography>
					<Typography
						variant='body2'
						className='text-justify'>
						During my time as a Public Relations intern at Universitas Sebelas
						Maret, I took charge as the web admin for the campus website. I was
						in charge of keeping the news section up-to-date and making sure
						everything ran smoothly. I also lent a hand with IT support for
						various office equipment. This was part of a student internship
						program offered by the university.
					</Typography>
					<Box display={{ xs: 'block', md: 'none' }}>
						<Link
							to='https://uns.ac.id/'
							target='blank'>
							<Typography
								variant='subtitle1'
								className='font-bold text-lg hover:brightness-125 hover:underline hover:underline-offset-2 text-text-primary leading-6 mt-2'>
								Universitas Sebelas Maret Public Relation, Surakarta
							</Typography>
						</Link>
						<Typography
							variant='subtitle2'
							className=''>
							February 2021 - December 2022
						</Typography>
					</Box>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent
					color='text.secondary'
					display={{ xs: 'none', md: 'block' }}>
					<Link
						to='https://refactory.id/'
						target='blank'>
						<Typography
							variant='subtitle1'
							className='font-bold text-lg text-secondary hover:brightness-125 hover:underline hover:underline-offset-2'>
							Refactory, Yogyakarta
						</Typography>
					</Link>
					<Typography
						variant='subtitle2'
						className=''>
						August 2021 - December 2021
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot
						color='primary'
						className=' outline-[2px] outline-dashed outline-gray-400 outline-offset-[6px] shadow-none'
					/>
				</TimelineSeparator>
				<TimelineContent>
					<Typography
						variant='body1'
						className='font-bold text-text-primary xs:text-xl md:text-lg'>
						Back End Developer
					</Typography>
					<Typography
						variant='body2'
						className='text-justify'>
						During my remote Back End Developer internship, I co-developed
						Climbee, an e-commerce site for fashion sales. This collaboration
						was a joint effort between Informatics Engineering Sebelas Maret
						University and Refactory Yogyakarta. In this project, I created a
						Rest API using Express JS and PostgreSQL, completed in Q4 2021.
					</Typography>
					<Box display={{ xs: 'block', md: 'none' }}>
						<Link
							to='https://refactory.id/'
							target='blank'>
							<Typography
								variant='subtitle1'
								className='font-bold text-lg hover:brightness-125 hover:underline hover:underline-offset-2 text-secondary leading-6 mt-2'>
								Refactory, Yogyakarta
							</Typography>
						</Link>
						<Typography
							variant='subtitle2'
							className=''>
							August 2021 - December 2021
						</Typography>
					</Box>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
