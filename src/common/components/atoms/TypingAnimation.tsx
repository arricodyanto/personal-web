import { TTypingAnimationProps } from '@/common/types/atoms';
import Typewriter from 'typewriter-effect';

export default function TypingAnimation(props: TTypingAnimationProps) {
	const { text } = props;
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter.typeString(`${text}`).pauseFor(2500).deleteAll().start();
			}}
			options={{
				loop: true,
			}}
		/>
	);
}
