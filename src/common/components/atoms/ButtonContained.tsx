import type { TButtonContainedProps } from '@/common/types/atoms';
import { Button, ButtonProps } from '@mui/material';

export default function ButtonContained(
	props: TButtonContainedProps & Partial<ButtonProps>,
) {
	const { label } = props;
	return (
		<Button
			variant='contained'
			color='primary'
			size='small'
			className='capitalize text-[16px] rounded-[2px]'
			{...props}
			sx={{
				paddingX: 2.5,
			}}>
			{label}
		</Button>
	);
}
