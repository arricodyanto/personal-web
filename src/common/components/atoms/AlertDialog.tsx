import { TAlertDialogProps } from '@/common/types/atoms';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Grow,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement, Ref, forwardRef } from 'react';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>;
	},
	ref: Ref<unknown>,
) {
	return (
		<Grow
			ref={ref}
			{...props}
			timeout={350}
		/>
	);
});

export default function AlertDialog(props: TAlertDialogProps) {
	const { handleOpen, handleClose, title, content } = props;
	return (
		<Dialog
			open={handleOpen}
			onClose={handleClose}
			TransitionComponent={Transition}
			maxWidth={'xs'}
			sx={{
				'& .MuiDialog-paper': {
					borderRadius: '1.5rem',
				},
			}}>
			<DialogTitle className='text-center'>{title}</DialogTitle>
			<DialogContent className='text-center mx-3'>
				<DialogContentText>{content}</DialogContentText>
			</DialogContent>
			<Divider className='border border-gray-100 mx-6' />
			<DialogActions className='grid justify-center mb-2'>
				<Button
					onClick={handleClose}
					className='normal-case rounded-full'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
