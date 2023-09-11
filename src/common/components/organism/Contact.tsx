import ContainerPage from '@/common/components/atoms/ContainerPage';
import ContactForm from '@/common/components/molecules/ContactForm';
import ContactItem from '@/common/components/molecules/ContactItem';
import SocialItem from '@/common/components/molecules/SocialItem';
import { Box, Grid, Typography } from '@mui/material';

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
							className='font-bold text-2xl'>
							Reach Out
						</Typography>
						<Typography
							variant='body1'
							className='mt-2 mb-6'>
							Discover the best ways to get in touch with me.
						</Typography>
						<ContactItem />
						<Typography
							variant='subtitle2'
							className='font-bold text-2xl mb-4'>
							Reach Me Through Social Media
						</Typography>
						<SocialItem />
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Typography
							variant='subtitle2'
							className='font-bold text-2xl mb-2'>
							Drop a Line via Email
						</Typography>
						<ContactForm />
					</Grid>
				</Grid>
			</ContainerPage>
		</Box>
	);
}
