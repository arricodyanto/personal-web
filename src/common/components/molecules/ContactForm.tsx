import AlertDialog from '@/common/components/atoms/AlertDialog';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Stack } from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [open, setOpen] = React.useState(false);
	const [statusAlert, setStatusAlert] = useState<number>(0);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const handleClose = () => {
		setOpen(false);
	};

	const handleInputChange =
		(setState: Dispatch<SetStateAction<string>>) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			setState(event.target.value);
		};

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		const templateParams = {
			name,
			email,
			subject,
			message,
		};

		emailjs
			.send(
				'service_hg2vt5k',
				'template_c58ouvo',
				templateParams,
				'w1n5xotnhk-fPPEB2',
			)
			.then(
				(response) => {
					setOpen(true);
					setStatusAlert(response.status);
				},
				(err) => {
					setOpen(true);
					setErrorMessage(JSON.stringify(err));
				},
			);

		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	return (
		<>
			<Box
				component={'form'}
				onSubmit={sendEmail}>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={1}>
					<TextfieldLabel
						label='Name'
						type='text'
						value={name}
						onChange={handleInputChange(setName)}
						placeholder="Please input your name so I could know it's from you"
						required
					/>
					<TextfieldLabel
						label='Email Addrees'
						type='email'
						value={email}
						onChange={handleInputChange(setEmail)}
						placeholder='And also your email, please :)'
						required
					/>
				</Stack>
				<TextfieldLabel
					label='Subject'
					type='text'
					value={subject}
					onChange={handleInputChange(setSubject)}
					placeholder='Input your subject here, please'
					required
				/>
				<TextfieldLabel
					label='Message'
					type='text'
					value={message}
					onChange={handleInputChange(setMessage)}
					placeholder='Let me know how I could help you with'
					multiline
					minRows={4}
					maxRows={6}
					required
				/>
				<Button
					type='submit'
					variant='contained'
					endIcon={<SendIcon className='text-md' />}
					className='normal-case rounded-full xs:w-1/3 md:w-1/5 mt-2'>
					Send
				</Button>
			</Box>
			<AlertDialog
				handleOpen={open}
				handleClose={handleClose}
				title={`${statusAlert === 200 ? 'Success' : 'Failed'}`}
				content={`${
					statusAlert === 200
						? "Your message has been successfully delivered to my inbox! Thank you for reaching out. I'm excited to explore potential collaboration opportunities with you!"
						: `${errorMessage}`
				}`}
			/>
		</>
	);
}
