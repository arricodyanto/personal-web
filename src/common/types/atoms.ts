export type TContainerPageProps = {
	children?: React.ReactNode;
};

export type TButtonContainedProps = {
	label: string | undefined;
};

export type TButtonOutlinedProps = {
	label: string;
};

export type TTypingAnimationProps = {
	text: string;
};

export type TSliderComponentProps = {
	options?: any;
	children: React.ReactNode;
};

export type TProjectCardProps = {
	image?: string;
	title?: string;
	role?: string;
	duration?: string;
	description?: string;
	tech?: string;
	link?: string;
};

export type TTextfieldLabelProps = {
	label?: string;
};

export type TAlertDialogProps = {
	handleOpen: boolean;
	handleClose: () => void;
	title?: string;
	content: string;
};
