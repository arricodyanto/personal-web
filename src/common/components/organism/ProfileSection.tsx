import avatar from '@/assets/images/avatar.png';
import ContainerPage from '@/common/components/atoms/ContainerPage';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function ProfileSection() {
	return (
		<Box
			component={'section'}
			id='about'>
			<Paper className='px-2 md:px-4 py-[4rem] rounded-t-[2rem] md:rounded-t-[4rem] shadow-none'>
				<ContainerPage>
					<Grid
						container
						spacing={4}>
						<Grid
							item
							md={4}>
							<img
								src={avatar}
								className='w-full'
							/>
						</Grid>
						<Grid
							item
							md={8}
							className='flex items-center'>
							<Stack>
								<Typography
									variant='subtitle1'
									className='font-bold text-4xl text-text-primary'>
									The Scoop on Me
								</Typography>
								<Stack
									className='flex mt-8'
									direction={{ xs: 'column', lg: 'row' }}>
									<Typography
										variant='subtitle2'
										className='inline text-2xl'>
										Hi, I'm Arrico. And I'm a
									</Typography>
									<Typography
										variant='subtitle2'
										className='inline lg:ml-2 text-2xl text-primary font-bold'>
										<Typewriter
											options={{
												strings: [
													'Front End Developer.',
													'Back End Developer.',
													'Mobile Developer.',
												],
												autoStart: true,
												loop: true,
											}}
										/>
									</Typography>
								</Stack>
								<Typography
									variant='body1'
									className='mt-2 text-justify text-lg'>
									Passionate about Web and Mobile Development, I have a
									sufficient foundation in both Front End and Back End
									Development and I'm open to exploring opportunities in either
									field or embracing the Full Stack Developer role. I relish
									every stage of development, finding joy in both the discourse
									and cooperative endeavors.
								</Typography>
								<Stack
									direction={'row'}
									spacing={2}
									marginTop={4}>
									<Link
										to='https://s.id/Resume-ArricoHandyanto'
										target='blank'>
										<Button
											size='large'
											variant='contained'
											endIcon={<DownloadIcon className='-ml-1 mr-2' />}
											className='normal-case rounded-full'>
											Download My Resume
										</Button>
									</Link>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</ContainerPage>
			</Paper>
		</Box>
	);
}
