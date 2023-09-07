import ContainerPage from '@/common/components/atoms/ContainerPage';
import BackgroundGradient from '@/common/components/molecules/BackgroundGradient';
import AppNav from '@/common/components/organism/AppNav';
import HeroSection from '@/common/components/organism/HeroSection';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
	return (
		<>
			<AppNav />
			<Box className='relative'>
				<BackgroundGradient />
			</Box>
			<ContainerPage>
				<HeroSection />
			</ContainerPage>
		</>
	);
}
