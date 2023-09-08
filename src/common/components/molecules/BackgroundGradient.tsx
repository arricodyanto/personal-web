import { Box, Stack } from '@mui/material';
import gradientBackground from '@/assets/images/gradient-circle.svg';
import { TBackgroundGradientProps } from '@/common/types/molecules';

export default function BackgroundGradient(props: TBackgroundGradientProps) {
	const { children } = props;
	return (
		<>
			<Stack
				className='fixed inset-0 bg-no-repeat'
				style={{ backgroundImage: `url(${gradientBackground})` }}
				sx={{
					pointerEvents: 'none',
					filter: 'blur(60px)',
					opacity: 0.4,
					marginLeft: { xs: '40px', md: '400px', lg: '700px', xl: '850px' },
					marginTop: { xs: '150px', md: '130px', lg: '150px' },
					maxWidth: { xs: 250, md: 300, lg: 400, xl: 500 },
				}}
			/>
			<Box className='relative z-10 w-screen'>{children}</Box>
		</>
	);
}
