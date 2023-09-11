import { Box, Grid, Typography } from '@mui/material';
import ContactForm from '../molecules/ContactForm';
import ContainerPage from '../atoms/ContainerPage';

export default function Contact() {
	return (
		<Box
			component={'section'}
			id='contact'>
			<ContainerPage className='py-16'>
				<Typography
					variant='subtitle1'
					className='font-bold text-4xl text-text-primary text-center'>
					Get in Touch
				</Typography>
				<Grid
					container
					spacing={2}
					className='mt-6'>
					<Grid
						item
						xs={12}
						md={6}>
						<Typography
							variant='subtitle2'
							className='font-bold text-2xl mb-2'>
							Reach Out
						</Typography>
						<Typography variant='body1'>
							Discover the best ways to get in touch with me.
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Typography
							variant='subtitle2'
							className='font-bold text-2xl mb-2'>
							Drop a Line
						</Typography>
						<ContactForm />
					</Grid>
				</Grid>
			</ContainerPage>
		</Box>
	);
}
