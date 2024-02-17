import { createPortal } from 'react-dom';
import bgImage from '../../assets/images/bg1.png';
import styles from './BgImage.module.scss';

interface IBgImage {
	className?: string;
	image?: string;
}

const BgImage: React.FC<IBgImage> = ({ className, image = bgImage }) => {
	return (
		<>
			{createPortal(
				<div className={`${styles.image} ${className}`}>
					<img src={image} alt={'background'} />
				</div>,
				document.body,
			)}
		</>
	);
};

export default BgImage;
