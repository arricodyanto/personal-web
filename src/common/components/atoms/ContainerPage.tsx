import { Container, ContainerProps } from '@mui/material';
import type { TContainerPageProps } from '@/common/types/atoms';

export default function ContainerPage(
	props: TContainerPageProps & Partial<ContainerProps>,
) {
	const { children } = props;
	return (
		<Container
			{...props}
			sx={{
				maxWidth: {
					xs: 'calc(100%-20px)',
					md: 800,
					lg: 1150,
				},
			}}>
			{children}
		</Container>
	);
}
