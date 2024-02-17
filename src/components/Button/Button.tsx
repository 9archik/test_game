import styles from './Button.module.scss';
interface IButtonProps {
	text: string;
	onClick: () => void;
	className?: string;
}
const Button: React.FC<IButtonProps> = ({ text, onClick, className }) => {
	return (
		<button onClick={onClick} className={`${styles.button} ${className}`}>
			{text}
		</button>
	);
};

export default Button;
