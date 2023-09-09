import { TProjectCardProps } from '@/common/types/atoms';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard(props: TProjectCardProps) {
	const { image, title, role, duration, description, link } = props;
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Card
			className='h-[380px] rounded-2xl relative shadow-none border border-gray-200 mx-2'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<CardMedia
				className='h-full w-full z-0 absolute top-0 left-0 brightness-[0.7] blur-[2px] bg-cover'
				image={`${image}`}
			/>
			<CardContent
				className={`z-0 relative h-full text-white transition duration-200 ease-in-out p-6 ${
					isHovered ? 'bg-primary bg-opacity-80' : 'bg-opacity-0'
				}`}>
				<Typography
					variant='subtitle1'
					className='text-2xl font-bold leading-7'>
					{title}
				</Typography>
				<Stack
					direction={{ xs: 'row', md: 'column', lg: 'row' }}
					justifyContent={'space-between'}>
					<Typography
						variant='caption'
						className='italic text-[0.9rem] font-bold'>
						Role: {role}
					</Typography>
					<Typography
						variant='caption'
						className='italic text-[0.9rem] font-bold'>
						{duration}
					</Typography>
				</Stack>
				<Typography className='mt-2 text-justify'>{description}</Typography>
				<Link
					to={`${link}`}
					target='blank'>
					<Button
						sx={{
							'&.MuiButton-containedSecondary': {
								backgroundColor: isHovered ? 'transparent' : '',
							},
							'&.MuiButton-containedSecondary:hover': {
								backgroundColor: 'rgb(58,63,71,0.7)',
							},
						}}
						variant='contained'
						color='secondary'
						className='mt-4 rounded-full ring-1 ring-white w-[125px] absolute bottom-[1.5rem] mx-auto left-0 right-0'>
						Visit
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
