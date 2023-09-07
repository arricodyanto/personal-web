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
			<Stack className='absolute top-[8rem]'>
				<Typography
					variant='subtitle1'
					className='font-bold text-[4rem] leading-[4rem] text-text-primary'>
					Hello There,
					<br /> I'm Arrico
				</Typography>
			</Stack>
			<Grid
				container
				spacing={1}
				className='h-screen'>
				<Grid
					item
					md={2}
					className='flex items-center'>
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
					md={8}
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
					md={2}
					className='mt-[8rem]'>
					<Stack className='relative h-full'>
						<Box className='leading-6 font-medium text-right'>
							<TypingAnimation text="I code with <b>finesse</b>, creating <b>seamless</b> user experiences, and I'm deeply in <b>love</b> with my <b>Front End World</b>." />
						</Box>
						<Box className='w-full absolute bottom-[8rem]'>
							<TechStack />
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
