import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import styles from './GamePage.module.scss';
import { IStep, StepContext } from '../../providers/stepProvider';
import BgImage from '../../components/BgImage/BgImage';
import cosmonautIMG from '../../assets/images/cosmonaut.png';
import builderIMG from '../../assets/images/builder.png';
import policeIMG from '../../assets/images/police.png';
import musicianIMG from '../../assets/images/musician.png';
import cityBG from '../../assets/images/bg2.png';
import Resident, { IResidents } from '../../components/Resident/Resident';
import GameHeader from '../../components/GameHeader/GameHeader';
import Alien from '../../components/Alien/Alien';
import AlienInGame, { IAlienInGame } from '../../components/AlienInGame/AlienInGame';
import useInterval from '../../hooks/useInterval';
import { resolve } from 'path';

type IAlienInGameWithKey = IAlienInGame & { key: number };

interface IAlien {
	appearanceTime: number;
	isOur: boolean;
	top: number;
	key: number;
}

const generateImage = () => {
	let image = '';
	let alt = '';
	if (Math.random() < 0.25) {
		image = cosmonautIMG;
		alt = 'cosmonaut';
		return { image, alt };
	}
	if (Math.random() >= 0.25 && Math.random() < 0.5) {
		image = builderIMG;
		alt = 'builder';
		return { image, alt };
	}
	if (Math.random() >= 0.5 && Math.random() < 0.75) {
		image = policeIMG;
		alt = 'police';
		return { image, alt };
	}
	if (Math.random() >= 0.75 && Math.random() <= 1) {
		image = musicianIMG;
		alt = 'musician';
		return { image, alt };
	}

	return { image: cosmonautIMG, alt: 'cosmonaut' };
};

const differenceTwoDates = (date1: Date, date2: Date): number => {
	const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
	const differenceInSeconds = differenceInMilliseconds / 1000;
	return differenceInSeconds;
};


const GamePage = () => {
	const { setStep, step, alienCount, setAlienCount } = useContext(StepContext) as IStep;
	const [residentsList, setResidentsList] = useState<IResidents[]>([]);
	const [remainSeconds, setRemainSeconds] = useState<number>(30);
	const dateStart = useRef<any>(new Date());
	const timer = useRef<any>(null);
	const alienRef = useRef(null);
	const aliensGreenRef = useRef<number>(0);
	const [alienList, setAlienList] = useState<Omit<IAlienInGameWithKey, 'index'>[]>([]);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const onExitFromCard = (index: number) => {
		let copy = [...alienList];
		copy.splice(index, 1);
		setAlienList(() => copy);
	};

	useInterval(() => {
		let res: IResidents = {
			image: generateImage()?.image,
			key: new Date().getTime(),
			direction: Math.random() < 0.5,
			alt: generateImage()?.alt,
			bottom: `${Math.floor(Math.random() * 18)}%`,
		};

		setResidentsList((prev) => [...prev, res]);
	}, 5000);

	useEffect(() => {
		let res: IResidents = {
			image: generateImage()?.image,
			key: new Date().getTime(),
			direction: Math.random() < 0.5,
			alt: generateImage()?.alt,
			bottom: `${Math.floor(Math.random() * 18)}%`,
		};

		setResidentsList((prev) => [...prev, res]);
	}, []);

	useEffect(() => {
		let timer = setInterval(() => {
			if (remainSeconds - differenceTwoDates(dateStart.current, new Date()) <= 0) {
				clearInterval(timer);
				setRemainSeconds(0);
				return;
			}
			setRemainSeconds(remainSeconds - differenceTwoDates(dateStart.current, new Date()));
		}, 100);

		return () => clearInterval(timer);
	}, []);

	useInterval(() => {
		
		if (Math.random() > 0.6 && alienList.length < 3 && aliensGreenRef.current < 10) {
			const alien: Omit<IAlienInGameWithKey, 'index'> = {
				isOur: Math.random() < 0.2,
				top: (window.innerWidth * (Math.floor(Math.random() * (24 - 6 + 1)) + 6)) / 100,
				key: new Date().getTime(),
			};

			if (!alien.isOur) {
				aliensGreenRef.current += 1;
			}

			setAlienList((prev) => [...prev, alien]);
		}
	}, 500);

	useInterval(
		() => {
			setStep((step) => step + 1);
		},
		remainSeconds <= 0 ? 2000 : null,
	);

	const alienOnClick = useCallback((isOur: boolean) => {
		if (isOur) {
			setAlienCount((prev) => (prev === 0 ? 0 : prev - 1));
			return;
		}
		setAlienCount((prev) => prev + 1);
	}, []);

	


	return (
		<>
			<GameHeader alienCount={alienCount} remainSeconds={remainSeconds} />
			<BgImage />
			{residentsList.map((el, index) => {
				return (
					<Resident
						key={el.key}
						image={el.image}
						direction={el.direction}
						bottom={el.bottom}
						alt={el.alt}
					/>
				);
			})}

			{remainSeconds <= 0 && (
				<div className={styles.endScreen}>
					<div className={styles.text}>
						<div className={styles.big}>
							<span>КОНЕЦ!</span>
						</div>
						<div className={styles.small}>
							<span>ПОРА УЗНАТЬ РЕЗУЛЬТАТ...</span>
						</div>
					</div>
				</div>
			)}

			{alienList.map((el, index) => (
				<AlienInGame
					onExitFromCard={onExitFromCard}
					index={index}
					onClick={alienOnClick}
					isOur={el.isOur}
					top={el.top}
					key={el.key}
				/>
			))}


		</>
	);
};

export default GamePage;
