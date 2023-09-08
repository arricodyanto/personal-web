import ContainerPage from '@/common/components/atoms/ContainerPage';
import ExperienceTimeline from '@/common/components/molecules/ExperienceTimeline';
import { Stack, Typography } from '@mui/material';

export default function WorkExperience() {
	return (
		<ContainerPage>
			<Stack className='px-2 md:px-4 py-[4rem] '>
				<Typography
					variant='subtitle1'
					className='font-bold text-4xl text-text-secondary text-center'>
					My Work Experience
				</Typography>
				<ExperienceTimeline />
			</Stack>
		</ContainerPage>
	);
}
