import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SocialItem() {
	return (
		<Stack
			direction={'row'}
			spacing={1.5}
			justifyContent={'center'}
			className='xs:w-full lg:w-2/3 mb-6'>
			{socialItems.map((item, index) => (
				<Link
					key={index}
					to={`${item.link}`}
					target='blank'>
					<IconButton
						size='large'
						color='secondary'
						className='drop-shadow-md hover:outline-2 outline-offset-4 outline hover:outline-primary transition duration-300 bg-primary'>
						{item.icon}
					</IconButton>
				</Link>
			))}
		</Stack>
	);
}

const socialItems = [
	{
		link: 'https://www.linkedin.com/in/arricohandyanto/',
		icon: <LinkedInIcon className='text-white text-[2rem]' />,
	},
	{
		link: 'https://www.instagram.com/arricodyanto/',
		icon: <InstagramIcon className='text-white text-[2rem]' />,
	},
	{
		link: 'https://twitter.com/a_rricci',
		icon: <TwitterIcon className='text-white text-[2rem]' />,
	},
	{
		link: 'https://t.me/arricohandyanto',
		icon: <TelegramIcon className='text-white text-[2rem]' />,
	},
];
