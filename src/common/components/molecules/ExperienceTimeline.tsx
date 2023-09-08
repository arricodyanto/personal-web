import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';

export default function ExperienceTimeline() {
	return (
		<Timeline
			position='right'
			className='mt-8'>
			<TimelineItem>
				<TimelineOppositeContent color='text.secondary'>
					<Typography
						variant='subtitle1'
						className='font-bold text-lg'>
						Universitas Sebelas Maret Public Relation, Surakarta
					</Typography>
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
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Typography
						variant='body1'
						className='font-bold text-text-secondary text-lg'>
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
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color='text.secondary'>
					<Typography
						variant='subtitle1'
						className='font-bold text-lg'>
						Refactory, Yogyakarta
					</Typography>
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
						className='font-bold text-text-secondary text-lg'>
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
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
