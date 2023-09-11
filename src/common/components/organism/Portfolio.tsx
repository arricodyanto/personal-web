import ContainerPage from '@/common/components/atoms/ContainerPage';
import ProjectSlider from '@/common/components/molecules/ProjectSlider';
import { Box, Paper, Typography } from '@mui/material';

export default function Portfolio() {
	return (
		<Box
			component={'section'}
			id='project'>
			<Paper className='px-2 md:px-4 py-[4rem] shadow-none text-center'>
				<ContainerPage>
					<Typography
						variant='subtitle1'
						className='font-bold text-4xl text-text-primary'>
						My Latest Projects
					</Typography>
					<Typography
						variant='subtitle2'
						className='text-lg mt-2'>
						Let's Have a Look at My Portfolio
					</Typography>
					<ProjectSlider />
				</ContainerPage>
			</Paper>
		</Box>
	);
}
