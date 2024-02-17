import styles from './AttentionBlock.module.scss';
import BgImage from '../../components/BgImage/BgImage';
import Button from '../../components/Button/Button';
import { useContext, useEffect, useRef } from 'react';
import { IStep, StepContext } from '../../providers/stepProvider';
import handIMG from '../../assets/images/hand.svg';
import linesClick from '../../assets/images/circleLines.svg';

interface IAttentionProps {
	attentionText: string;
	buttonText: string;
	children: React.ReactNode;
}

const AttentionBlock: React.FC<IAttentionProps> = ({ attentionText, buttonText, children }) => {
	const { step, setStep } = useContext(StepContext) as IStep;
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
	}, []);

	useEffect(() => {
		if (imgRef && imgRef.current) {
			const imgElement = imgRef.current;

			// Сброс анимации
			imgElement.style.animation = 'none';

			// Используем requestAnimationFrame для перезапуска анимации
			requestAnimationFrame(() => {
				imgElement.style.animation = '';
			});
		}
	}, [step]);
	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.content}`}>
				{children}

				<div className={styles.hand}>
					<img className={styles.handImg} src={handIMG} alt="hand" />
					<img ref={imgRef} src={linesClick} className={styles.linesClick} alt="lines" />
				</div>

				<div className={styles.text}>
					<span>{attentionText}</span>
				</div>

				<Button className={styles.button} text={buttonText} onClick={() => setStep(step + 1)} />
			</div>
		</div>
	);
};

export default AttentionBlock;
