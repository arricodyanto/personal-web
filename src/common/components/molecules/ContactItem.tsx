import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Avatar, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import avatar from '/avatar-mini.jpg';

export default function ContactItem() {
	const [hoveredIndex, setHoveredIndex] = useState(-1);
	const contactItems = [
		{
			icon: (
				<Avatar
					alt='Arrico Handyanto'
					src={avatar}
					className='w-[4rem] h-auto'
				/>
			),
			title: 'Full Name',
			content: 'Arrico Handyanto',
		},
		{
			icon: (
				<Avatar
					alt='Address'
					className='w-[4rem] h-[4rem]'>
					<FmdGoodIcon fontSize='large' />
				</Avatar>
			),
			title: 'Address',
			content: 'Sukoharjo 57557, Central Java, Indonesia',
		},
	];
	return (
		<>
			{contactItems.map((item, index) => (
				<Stack
					justifyContent={'center'}
					key={index}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(-1)}
					className={`xs:w-full lg:w-2/3 border border-gray-300 p-4 rounded-xl transition ease-in-out shadow-sm mb-4 ${
						index === hoveredIndex
							? 'text-white bg-primary bg-opacity-70'
							: 'text-text-secondary'
					}`}>
					<Stack
						direction='row'
						spacing={2}>
						{item.icon}
						<Stack justifyContent={'center'}>
							<Typography
								variant='body1'
								className={`mb-1 font-bold text-lg leading-6 transition ease-in-out ${
									index === hoveredIndex ? 'text-white' : 'text-primary'
								}`}>
								{item.title}
							</Typography>
							<Typography
								variant='body2'
								className='font-medium text-lg leading-6'>
								{item.content}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			))}{' '}
		</>
	);
}
