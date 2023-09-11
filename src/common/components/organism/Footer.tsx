import logoBlack from '@/assets/images/logo-black.png';
import {
	Box,
	Button,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
} from '@mui/material';

import ContainerPage from '../atoms/ContainerPage';
import { MenuItems } from './AppNav';
import { Link } from 'react-router-dom';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<Box
			component={'footer'}
			id='footer'>
			<Paper className='px-2 md:px-4 pt-[4rem] shadow-none'>
				<ContainerPage>
					<Grid
						container
						spacing={4}
						justifyContent={'space-between'}>
						<Grid
							item
							xs={12}
							md={6}>
							<Stack
								spacing={2}
								justifyContent={'space-between'}
								className='h-full md:pb-16'>
								<Typography
									variant='subtitle1'
									className='text-[2rem] leading-10 font-bold'>
									Let's team up to create something truly remarkable!
								</Typography>
								<Typography
									variant='subtitle2'
									className='font-bold text-[1.7rem] xs:mt-6 md:mt-0 leading-10'>
									Kick it off with a friendly{' '}
									<a className='text-primary'>"hello"</a>
								</Typography>
							</Stack>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}
							lg={4}>
							<Typography
								variant='subtitle2'
								className='font-bold text-2xl mt-4'>
								Let's Start a Convertation
							</Typography>
							<Stack
								spacing={1}
								className='mt-6'>
								{MenuItems.map((item, index) => {
									return (
										<a
											key={index}
											href={`${item.link}`}>
											<Button
												color='secondary'
												sx={{
													'&.MuiButtonBase-root:hover': {
														bgcolor: 'transparent',
													},
													color: 'text.primary',
												}}
												className={`px-4 text-[1rem] rounded-full border-x border-solid border-opacity-0 hover:border-opacity-100 hover:text-primary transition-all duration-200 ease-in-out font-medium border-x-primary $`}>
												{item.label}
											</Button>
										</a>
									);
								})}
							</Stack>
						</Grid>
					</Grid>
				</ContainerPage>
				<Divider
					light
					className='border-gray-200 mx-12 mt-8'
				/>
				<ContainerPage className='py-[1.5rem]'>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						justifyContent={'space-between'}>
						<Stack
							direction='row'
							spacing={2}
							alignItems={'center'}>
							<Link to={'/'}>
								<img
									src={logoBlack}
									width={80}
									alt='Site Logo'
									className='opacity-90 cursor-pointer hover:opacity-50 transition'
								/>
							</Link>
							<Typography
								variant='subtitle1'
								className='font-medium text-text-secondary '>
								&copy; {currentYear}. All Rights Reserved
							</Typography>
						</Stack>
						<Typography
							variant='subtitle1'
							className='font-medium text-text-secondary '>
							Developed by <a className='text-primary'>Arrico Handyanto</a>
						</Typography>
					</Stack>
				</ContainerPage>
			</Paper>
		</Box>
	);
}
