import { TTextfieldLabelProps } from '@/common/types/atoms';
import {
	FormControl,
	FormLabel,
	TextField,
	TextFieldProps,
} from '@mui/material';

export default function TextfieldLabel(
	props: TTextfieldLabelProps & Partial<TextFieldProps>,
) {
	const { label, ...anotherProps } = props;
	return (
		<FormControl className='mb-4 w-full'>
			<FormLabel className='mb-1 text-md text-text-primary'>{label}</FormLabel>
			<TextField
				variant='outlined'
				fullWidth
				{...anotherProps}
				sx={{
					'& .MuiOutlinedInput-root': {
						fieldset: {
							borderColor: '#bfc0c2',
							borderRadius: '0.4rem',
						},
						'&:hover fieldset': {
							borderColor: '#F8B501',
						},
					},
					'& .Mui-disabled': {
						'&:hover fieldset': { borderColor: '#bfc0c2' },
						backgroundColor: '#E2E8F0',
					},
				}}
				inputProps={{ style: { fontSize: 14 } }}
			/>
		</FormControl>
	);
}
