import { TSliderComponentProps } from '@/common/types/atoms';
import { SliderProps } from '@mui/material';
import Slider from 'react-slick';

export default function SliderComponent(
	props: TSliderComponentProps & Partial<SliderProps>,
) {
	const { children, options } = props;
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		focusOnSelect: false,
		...options,
	};
	return <Slider {...settings}>{children}</Slider>;
}
