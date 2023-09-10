import hero from '@/assets/images/hero.png';
import TypingAnimation from '@/common/components/atoms/TypingAnimation';
import TechStack from '@/common/components/molecules/TechStack';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSection() {
	return (
		<Box
			component={'section'}
			id='hero'
			className='relative'>
			<Stack className='md:absolute xs:mt-[5rem] md:top-[8rem]'>
				<Typography
					variant='subtitle1'
					className='font-bold xs:text-[2.5rem] md:text-[2rem] lg:text-[4rem] xs:leading-10 md:leading-[2rem] lg:leading-[4rem] text-text-primary xs:w-3/4 md:w-[240px] lg:w-[400px]'>
					Hello There, I'm Arrico
				</Typography>
				<Box className='mt-4 h-[30px]'>
					<TypingAnimation text="I code with <b>finesse</b>, creating <b>seamless</b> user experiences, and I'm deeply in <b>love</b> with my <b>Front End World</b>." />
				</Box>
			</Stack>
			<Grid
				container
				spacing={1}
				className='xs:h-[calc(100vh-8vh)] md:h-[calc(100vh-55vh)] lg:h-screen'>
				<Grid
					item
					xs={12}
					md={3}
					lg={2}
					className='flex items-center xs:hidden md:grid'>
					<Stack>
						<Typography
							variant='body1'
							className='font-bold leading-3 text-text-secondary'>
							Email Me
						</Typography>
						<Link to={`mailto:arricohandyanto@gmail.com`}>
							<Typography
								variant='body1'
								className='text-primary font-medium hover:brightness-110 underline underline-offset-8 decoration-0 hover:decoration-1 drop-shadow-sm transition duration-300 ease-in-out'>
								arricohandyanto@gmail.com
							</Typography>
						</Link>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					lg={8}
					className='flex justify-end items-end'>
					<Stack>
						<img
							src={hero}
							className='w-full mx-auto'
						/>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					lg={2}
					className='xs:pt-[4rem] md:mt-[8rem]'>
					<Stack className='relative h-full'>
						<Box className='leading-6 font-medium text-right xs:hidden md:block'>
							<TypingAnimation text="I code with <b>finesse</b>, creating <b>seamless</b> user experiences, and I'm deeply in <b>love</b> with my <b>Front End World</b>." />
						</Box>
						<Stack className='xs:w-[52%] md:w-full md:absolute md:bottom-[4rem] lg:bottom-[8rem] mx-auto'>
							<TechStack />
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
