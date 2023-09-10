import ContainerPage from '@/common/components/atoms/ContainerPage';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Stack,
	Toolbar,
	Typography,
	useScrollTrigger,
} from '@mui/material';
import React from 'react';

import logoBlack from '@/assets/images/logo-black.png';
import logoWhite from '@/assets/images/logo-white.png';

import { useNavigate } from 'react-router-dom';

// Changes on Scroll
function ChangesOnScroll(props: any) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
		threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
	});
	return React.cloneElement(children, {
		elevation: trigger ? 0 : 0, //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
	});
}

type Anchor = 'left';

export default function AppNav() {
	const navigate = useNavigate();
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});
	const [drawer, setDrawer] = React.useState({ left: false });
	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawer({ ...drawer, [anchor]: open });
		};
	return (
		<ChangesOnScroll>
			<AppBar
				sx={{
					backgroundColor: trigger ? '#F8B501' : 'transparent',
					boxShadow: trigger ? 2 : 0,
				}}
				className='transition-all duration-700 ease-in-out'>
				<Toolbar
					sx={{
						height: trigger
							? { xs: 75, md: 85, lg: 75 }
							: { xs: 65, md: 80, lg: 60 },
					}}
					className='transition-all duration-700 ease-in-out'>
					<ContainerPage disableGutters>
						<Grid
							container
							spacing={1}
							alignItems='center'
							className='relative'
							justifyContent='space-between'>
							<Grid
								item
								xs={8}
								className='justify-center'>
								{trigger ? (
									<img
										src={logoWhite}
										width={80}
										alt='Site Logo'
										className='opacity-90 cursor-pointer hover:opacity-50 transition'
										onClick={() => navigate('/')}
									/>
								) : (
									<img
										src={logoBlack}
										width={80}
										alt='Site Logo'
										className='opacity-90 cursor-pointer hover:opacity-50 transition'
										onClick={() => navigate('/')}
									/>
								)}
							</Grid>
							<Grid
								item
								className='absolute flex right-0'>
								<Stack
									spacing={{ md: 1, lg: 2 }}
									direction='row'
									sx={{ display: { xs: 'none', md: 'flex' } }}
									alignItems='center'>
									{MenuItems.map((item) => {
										return (
											<a href={`${item.link}`}>
												<Button
													color='secondary'
													sx={{
														'&.MuiButtonBase-root:hover': {
															bgcolor: 'transparent',
														},
														color: trigger ? 'white' : 'text.primary',
													}}
													className={`px-4 rounded-full border-x border-solid border-opacity-0 hover:border-opacity-100 hover:text-primary transition-all duration-200 ease-in-out font-medium ${
														trigger
															? 'border-x-white hover:text-white'
															: 'border-x-primary'
													}`}>
													{item.label}
												</Button>
											</a>
										);
									})}
								</Stack>
							</Grid>
							<Grid
								item
								xs={2}
								sx={{ display: { xs: 'flex', md: 'none' } }}>
								{(['left'] as const).map((anchor) => (
									<React.Fragment key={anchor}>
										<IconButton
											size='large'
											color='secondary'
											sx={{ backgroundColor: 'white' }}
											className='drop-shadow-md hover:-rotate-90 transition duration-300'
											onClick={toggleDrawer(anchor, true)}>
											<MenuIcon fontSize='small' />
										</IconButton>
										<Drawer
											anchor={anchor}
											open={drawer[anchor]}
											onClose={toggleDrawer(anchor, false)}
											PaperProps={{ sx: { backgroundColor: '#FFFF' } }}
											className='opacity-[0.98]'>
											<Box
												className='pt-4 backdrop-blur-2xl h-screen relative'
												sx={{ width: 240 }}
												role='presentation'
												onClick={toggleDrawer(anchor, false)}
												onKeyDown={toggleDrawer(anchor, false)}>
												<Stack className='grid justify-center'>
													<img
														src={logoBlack}
														width={80}
														alt='Site Logo'
														className='hover:opacity-60 transition'
													/>
												</Stack>
												<Divider className='pt-5 border-[#FFFF]' />
												<List>
													{MenuItems.map((item) => {
														return (
															<>
																<ListItem disablePadding>
																	<ListItemButton className='w-[240px] justify-center py-4 hover:text-primary transition ease-in-out duration'>
																		<Typography variant='body1'>
																			{item.label}
																		</Typography>
																	</ListItemButton>
																</ListItem>
															</>
														);
													})}
												</List>
											</Box>
										</Drawer>
									</React.Fragment>
								))}
							</Grid>
						</Grid>
					</ContainerPage>
				</Toolbar>
			</AppBar>
		</ChangesOnScroll>
	);
}

export const MenuItems = [
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'About',
		link: '/#about',
	},
	{
		label: 'Experience',
		link: '/#experience',
	},
	{
		label: 'Portfolio',
		link: '/#project',
	},
	{
		label: 'Project',
		link: '/#partners',
	},
	{
		label: 'Contact',
		link: '/#partners',
	},
];
