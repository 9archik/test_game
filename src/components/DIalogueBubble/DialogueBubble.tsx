import styles from './DialogueBubble.module.scss';
import dialogueBubbleIMG from '../../assets/images/dialogueBubble.png';
interface IDialogueBubbleProps {
	className?: string;
	text?: string;
	textClassName?: string;
	dialogueRef: React.LegacyRef<HTMLDivElement> | undefined;
	top: number;
}

const DialogueBubble: React.FC<IDialogueBubbleProps> = ({
	className,
	text,
	textClassName,
	dialogueRef,
	top,
}) => {
	return (
		<div style={{top}} ref={dialogueRef} className={styles.container}>
			<img src={dialogueBubbleIMG} alt={'dialog'} />
			<span className={textClassName}>{text}</span>
		</div>
	);
};

export default DialogueBubble;
