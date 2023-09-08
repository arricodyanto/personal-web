import ContainerPage from '@/common/components/atoms/ContainerPage';
import ExperienceTimeline from '@/common/components/molecules/ExperienceTimeline';
import { Box, Typography } from '@mui/material';

export default function WorkExperience() {
	return (
		<ContainerPage>
			<Box
				component={'section'}
				id='experience'
				className='px-2 md:px-4 py-[4rem]'>
				<Typography
					variant='subtitle1'
					className='font-bold text-4xl text-text-secondary text-center'>
					My Work Experience
				</Typography>
				<ExperienceTimeline />
			</Box>
		</ContainerPage>
	);
}
