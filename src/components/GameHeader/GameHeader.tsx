import styles from './style.module.scss';
import timerIMG from '../../assets/images/timer.png';
import alienIMG from '../../assets/images/alien_green.png';
import { useEffect, useRef, useState } from 'react';
interface IGameHeader {
	alienCount: number;
	remainSeconds: number;
}

function addLeadingZero(number: number) {
	if (number < 10) {
		return `0${number}`;
	} else {
		return number.toString();
	}
}

function formatTime(seconds: number) {
	if (seconds <= 0) {
		return '00:00';
	}
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.ceil(seconds % 60);

	return `${addLeadingZero(minutes)}:${addLeadingZero(remainingSeconds)}`;
}

const GameHeader: React.FC<IGameHeader> = ({ alienCount, remainSeconds }) => {
	return (
		<header className={styles.container}>
			<div className={styles.block}>
				<img src={alienIMG} alt="timer" width={32} height={32} />
				{addLeadingZero(alienCount)}/10
			</div>

			<div className={`${styles.block} ${remainSeconds < 5 && styles.warning}`}>
				<img src={timerIMG} alt="timer" width={32} height={32} />
				{formatTime(remainSeconds)}
			</div>
		</header>
	);
};

export default GameHeader;
