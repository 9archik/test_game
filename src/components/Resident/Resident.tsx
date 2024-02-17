import { useEffect, useRef, useState } from 'react';
import styles from './Resident.module.scss';
export interface IResidents {
	image: string;
	bottom: number | string;
	alt: string;
	direction: boolean;
	key: number;
}
const Resident: React.FC<IResidents> = ({ image, bottom, alt, direction }) => {
	const ref = useRef<any>(null);

	const [position, setPosition] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prevPosition) => {
				const newPosition = prevPosition + 1;
				return newPosition;
			});
		}, 10);

		return () => clearInterval(interval);
	}, []);
	return (
		<>
			{position < window.innerWidth && (
				<img
					style={{
						bottom: bottom,
						left: direction ? -20 : 'auto',
						right: !direction ? 0 : 'auto',
						position: 'fixed',
						transform: `translateX(${direction ? position : -position}px)`,
					}}
					ref={ref}
					className={styles.residents}
					src={image}
					alt={alt}
					width={window.innerWidth > 1024 ? (50 * window.innerWidth) / 1024 : undefined}
				/>
			)}
		</>
	);
};

export default Resident;
