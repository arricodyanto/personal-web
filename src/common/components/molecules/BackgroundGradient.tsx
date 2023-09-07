import { Box, Stack } from '@mui/material';
// import zIndex from '@mui/material/styles/zIndex'
import gradientBackground from '@/assets/images/gradient-circle.svg';

export default function BackgroundGradient() {
	return (
		<Stack
			direction='row-reverse'
			sx={{ pointerEvents: 'none' }}
			className='absolute right-0'>
			<Box
				sx={{
					maxWidth: { xs: 250, md: 300, lg: 400, xl: 500 },
					filter: 'blur(70px)',
					opacity: 0.4,
					marginRight: { xs: '40px', md: '100px', lg: '200px', xl: '350px' },
					marginTop: { xs: '150px', md: '130px', lg: '150px' },
				}}>
				<img
					src={gradientBackground}
					alt=''
				/>
			</Box>
		</Stack>
	);
}
