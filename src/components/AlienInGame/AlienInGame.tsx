import { useEffect, useRef, useState } from 'react';
import alienIMG from '../../assets/images/alien_green.png';
import ourAlienIMG from '../../assets/images/alien_yellow.png';
import Alien from '../Alien/Alien';
import styles from './AlienInGame.module.scss';
import { BubbleSVG, ProhibiteSVG } from './Bubbles';
import DialogueBubble from '../DIalogueBubble/DialogueBubble';
import useInterval from '../../hooks/useInterval';

export interface IAlienInGame {
	isOur: boolean;
	top: number;
	onClick?: (isOur: boolean) => void;
	onExitFromCard?: (num: number) => void;
	index: number;
}

const goodPhrases = [
	'ХОЧУ ДОМОй...',
	'КУДА Я ЛЕЧУ? ЗАЧЕМ? ДЛЯ ЧЕГО?',
	'НА ПОСЛЕДНИЙ АВТОБУС НЕ УСПЕВАЮ...',
];
const badPhrases = ['Я ЗАХВАЧУ ПИЦЦУ!', 'ЗА ПЛУТОН!!', 'УКРАДУ ГАРАЖ!'];

function getRandomElement<T>(array: T[]): T {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
const generatePhrase = (isOur: boolean) => {
	return isOur ? getRandomElement(goodPhrases) : getRandomElement(badPhrases);
};

const setImageBubbleFunc = (imageBubble: boolean, isOur: boolean) => {
	if (imageBubble) {
		return isOur ? <ProhibiteSVG /> : <BubbleSVG />;
	}
};
const AlienInGame: React.FC<IAlienInGame> = ({ isOur, top, onClick, onExitFromCard, index }) => {
	const ref = useRef<HTMLDivElement>(null);
	const dialogueRef = useRef<HTMLDivElement>(null);
	const alienPositionX = useRef<number>(0);
	const alienPositionY = useRef<number>(0);
	const [imageBubble, setImageBubble] = useState<boolean>(false);
	const [phrase, setPhrase] = useState<string>('');


	useInterval(() => {
		if (ref.current) {
			if (imageBubble && !isOur) {
				alienPositionY.current -= (window.innerHeight / 1200) * 5;
			} else {
				alienPositionX.current += (window.innerWidth / 1200) * 3;
			}
			ref.current.style.transform = `translate(${alienPositionX.current}px, ${alienPositionY.current}px)`;
			if (dialogueRef && dialogueRef.current)
				dialogueRef.current.style.transform = `translate(${alienPositionX.current}px, ${
					alienPositionY.current + ref.current.offsetHeight + 10
				}px)`;
		}

		if (
			(alienPositionX.current - 20 > window.innerWidth ||
				Math.abs(alienPositionY.current) + top > window.innerHeight) &&
			typeof onExitFromCard === 'function'
		) {
			onExitFromCard(index);
		}
	}, 10);

	useEffect(() => {
		setPhrase(() => generatePhrase(isOur));
	}, []);

	const onClickAlien = () => {
		setImageBubble(true);
		if (onClick && !imageBubble) {
			onClick(isOur);
		}
	};

	return (
		<Alien
			containerStyle={{ top: `${top}px` }}
			containerClassName={styles.container}
			imageBubble={setImageBubbleFunc(imageBubble, isOur)}
			alienClassName={`${styles.alien} ${imageBubble && styles.back}`}
			alienRef={ref}
			onClick={onClickAlien}
			imageAlien={isOur ? ourAlienIMG : alienIMG}
			width={window.innerWidth < 1024 ? 100 : (100 * window.innerWidth) / 1024}
			dialogueBubble={<DialogueBubble top={top} dialogueRef={dialogueRef} text={phrase} />}
		/>
	);
};

export default AlienInGame;
