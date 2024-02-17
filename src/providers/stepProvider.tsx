import React, {
	createContext,
	useState,
	useContext,
	FC,
	PropsWithChildren,
	useEffect,
} from 'react';

export interface IStep {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	alienCount: number;
	setAlienCount: React.Dispatch<React.SetStateAction<number>>;
}

export const StepContext = createContext<IStep | null>(null);

export const StepProvider: FC<PropsWithChildren> = ({ children }) => {
	const [step, setStep] = useState<number>(1);
	const [alienCount, setAlienCount] = useState<number>(0);

	return (
		<StepContext.Provider value={{ step, setStep, alienCount, setAlienCount }}>
			{children}
		</StepContext.Provider>
	);
};
