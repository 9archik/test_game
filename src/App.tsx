import React, { useContext, useLayoutEffect } from 'react';
import logo from './logo.svg';
import Start from './pages/Start/Start';
import './App.scss';
import bg1 from './assets/images/bg1.png';
import { useState } from 'react';
import { IStep, StepContext } from './providers/stepProvider';
import SecondPage from './pages/SecondPage/SecondPage';
import GamePage from './pages/GamePage/GamePage';
import SharePage from './pages/SharePage/SharePage';

const StartStep = () => {
	return (
		<div className="container">
			<Start />
		</div>
	);
};

const SecondStep = () => {
	return (
		<div className="container">
			<SecondPage />
		</div>
	);
};

const Game = () => {
	return <GamePage />;
};

function App() {
	const { step } = useContext(StepContext) as IStep;

	useLayoutEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	switch (step) {
		case 1:
			return <StartStep />;
		case 2:
			return <SecondStep />;
		case 3:
			return <SecondStep />;
		case 4:
			return <Game />;
		case 5:
			return <SharePage />;
		default:
			return <StartStep />;
	}
}

export default App;
