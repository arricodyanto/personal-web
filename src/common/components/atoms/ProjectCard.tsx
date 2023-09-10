import { TProjectCardProps } from '@/common/types/atoms';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard(props: TProjectCardProps) {
	const { image, title, role, duration, description, tech, link } = props;
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Card
			className='h-full rounded-2xl relative shadow-none border border-gray-300 xs:mx-1 md:mx-2 bg-neutral-900'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<CardHeader
				className={`z-10 relative transition duration-200 ease-in-out p-6 ${
					isHovered
						? 'bg-primary bg-opacity-95 text-white border-b border-opacity-60 border-white'
						: 'text-text-light border-b border-opacity-0 border-white'
				}`}
				title={
					<Typography
						variant='subtitle1'
						className='text-2xl font-bold leading-7'>
						{title}
					</Typography>
				}
				subheader={
					<Stack
						className={`transition duration-200 ease-in-out ${
							isHovered ? 'text-white' : 'text-text-light '
						}`}
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
				}></CardHeader>
			<CardMedia
				className='mt-8 h-full w-[calc(100%-20%)] z-0 absolute contrast-[0.3] bg-cover rounded-t-2xl mx-auto left-0 right-0'
				image={`${image}`}
			/>
			<CardMedia
				className='mt-12 h-full w-[calc(100%-10%)] z-0 absolute contrast-[0.5] bg-cover rounded-t-2xl mx-auto left-0 right-0'
				image={`${image}`}
			/>
			<CardMedia
				className='mt-16 h-full w-full z-0 absolute brightness-[0.7] bg-cover rounded-t-2xl'
				image={`${image}`}
			/>
			<CardContent
				className={`relative transition duration-200 ease-in-out p-6 ${
					isHovered
						? 'bg-primary bg-opacity-95 text-white'
						: 'bg-opacity-0 text-transparent'
				}`}>
				<Typography className='mt-2 text-justify'>{description}</Typography>
				<Typography className='mt-2 text-justify font-medium'>
					Tech Used: {tech}
				</Typography>
			</CardContent>
			<CardActions
				className={`z-0 relative text-white transition duration-200 ease-in-out p-6 pt-0 ${
					isHovered
						? 'bg-primary bg-opacity-95'
						: 'bg-opacity-0 text-transparent'
				}`}
				disableSpacing>
				<Link
					to={`${link}`}
					target='blank'
					className='flex justify-center w-full'>
					<Button
						sx={{
							'&.MuiButton-containedSecondary': {
								backgroundColor: isHovered ? 'transparent' : '',
							},
							'&.MuiButton-containedSecondary:hover': {
								backgroundColor: 'rgb(58,63,71,0.8)',
							},
							opacity: isHovered ? '100%' : '0%',
						}}
						variant='contained'
						color='secondary'
						className='rounded-full ring-1 ring-white w-[125px] transition duration-200 ease-in-out'>
						Visit
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
