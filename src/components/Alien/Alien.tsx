import styles from './Alien.module.scss';
import DialogueBubble from '../DIalogueBubble/DialogueBubble';
interface IAlien {
	imageAlien: string;
	imageBubble?: string | React.ReactNode;
	alienClassName?: string;
	containerClassName?: string;
	containerStyle?: React.CSSProperties;
	alienRef?: React.LegacyRef<HTMLDivElement>;
	onClick?: Function;
	width?: number;
	height?: number;
	dialogueBubble?: React.ReactNode;
}
const Alien: React.FC<IAlien> = ({
	imageAlien,
	imageBubble,
	alienClassName,
	containerClassName,
	containerStyle,
	alienRef,
	onClick,
	width,
	height,
	dialogueBubble,
}) => {
	return (
		<>
			<div
				ref={alienRef}
				style={containerStyle}
				className={`${styles.container} ${containerClassName} ${imageBubble && styles.bubble}`}>
				<img
					className={`${alienClassName} ${styles.alienImg}`}
					src={imageAlien}
					alt={'image alien'}
					width={width}
					height={height}
					style={{ zIndex: 1, position: 'relative' }}
					onClick={() => {
						if (onClick) {
							onClick();
						}
					}}
				/>
				{imageBubble && typeof imageBubble === 'string' ? (
					<img src={imageBubble} alt="Bubble" />
				) : (
					imageBubble
				)}
			</div>

			{dialogueBubble}
		</>
	);
};

export default Alien;
