import { Box, Typography } from '@mui/material';
import SliderComponent from '@/common/components/atoms/SliderComponent';
import reactLogo from '@/assets/images/1-react.svg';
import nextLogo from '@/assets/images/2-next.svg';
import expressLogo from '@/assets/images/3-express.png';
import laravelLogo from '@/assets/images/4-laravel.svg';
import materialLogo from '@/assets/images/5-material.svg';
import tailwindLogo from '@/assets/images/6-tailwindcss.svg';
import viteLogo from '@/assets/images/7-vite.svg';

export default function TechStack() {
	return (
		<>
			<Typography
				variant='body1'
				className='xs:text-xl md:text-base font-bold text-center mb-4 uppercase'>
				Tech Stack
			</Typography>
			<Box className='drop-shadow-xl'>
				<SliderComponent
					options={{
						centerMode: true,
						centerPadding: '60px',
						arrows: true,
						autoplay: true,
						pauseOnFocus: true,
					}}>
					<a
						href='https://react.dev'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={reactLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://nextjs.org'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={nextLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://expressjs.com'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={expressLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://laravel.com/'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={laravelLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://mui.com/material-ui/'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={materialLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://tailwindcss.com/'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={tailwindLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
					<a
						href='https://vitejs.dev/'
						target='_blank'
						className='focus:outline-0'>
						<img
							src={viteLogo}
							className='w-full mx-auto hover:contrast-125 transition ease-in-out xs:py-4 xs:px-3 md:p-2'
							alt='React JS'
						/>
					</a>
				</SliderComponent>
			</Box>
		</>
	);
}
