import Alien from '../../components/Alien/Alien';
import styles from './Start.module.scss';
import alienIMG from '../../assets/images/alien_green.png';
import Button from '../../components/Button/Button';
import BgImage from '../../components/BgImage/BgImage';
import bubbleIMG from '../../assets/images/bubble.png';
import { useContext } from 'react';
import { IStep, StepContext } from '../../providers/stepProvider';
const BubbleSVG = () => {
	return (
		<svg
			className={styles.bubbleSVG}
			width="147"
			height="148"
			viewBox="0 0 147 148"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.5">
				<circle cx="73.5359" cy="73.5357" r="70.6522" fill="#BBE4FF" fill-opacity="0.4" />
				<path d="M146.927 93.5774H140.295V100.21H146.927V93.5774Z" fill="#FFCCE4" />
				<path d="M146.927 86.9443H140.295V93.577H146.927V86.9443Z" fill="#FFCCE4" />
				<path d="M146.927 80.1687H140.295V86.8013H146.927V80.1687Z" fill="#FFCCE4" />
				<path d="M146.927 73.5356H140.295V80.1683H146.927V73.5356Z" fill="#FFCCE4" />
				<path d="M146.927 66.9026H140.295V73.5353H146.927V66.9026Z" fill="#FFCCE4" />
				<path d="M146.927 60.1262H140.295V66.7589H146.927V60.1262Z" fill="#FFCCE4" />
				<path d="M146.927 53.4939H140.295V60.1265H146.927V53.4939Z" fill="#FFCCE4" />
				<path d="M146.927 46.7163H140.295V53.349H146.927V46.7163Z" fill="#FFCCE4" />
				<path d="M140.295 106.988H133.662V113.621H140.295V106.988Z" fill="#FFCCE4" />
				<path d="M140.295 100.21H133.662V106.843H140.295V100.21Z" fill="#FFCCE4" />
				<path d="M140.295 40.084H133.662V46.7166H140.295V40.084Z" fill="#F1F4CE" />
				<path d="M140.295 33.4514H133.662V40.0841H140.295V33.4514Z" fill="#F1F4CE" />
				<path d="M133.518 113.62H126.886V120.252H133.518V113.62Z" fill="#FFCCE4" />
				<path d="M133.518 26.6746H126.886V33.3072H133.518V26.6746Z" fill="#F1F4CE" />
				<path d="M126.886 120.253H120.253V126.885H126.886V120.253Z" fill="#FFCCE4" />
				<path d="M126.886 20.0415H120.253V26.6742H126.886V20.0415Z" fill="#F1F4CE" />
				<path d="M120.253 127.029H113.62V133.662H120.253V127.029Z" fill="#FFCCE4" />
				<path d="M120.253 13.4084H113.62V20.0411H120.253V13.4084Z" fill="#F1F4CE" />
				<path d="M113.476 127.029H106.844V133.662H113.476V127.029Z" fill="#FFCCE4" />
				<path d="M113.476 100.21H106.844V106.843H113.476V100.21Z" fill="#BBE4FF" />
				<path d="M113.476 13.4084H106.844V20.0411H113.476V13.4084Z" fill="#F1F4CE" />
				<path d="M106.843 133.662H100.211V140.295H106.843V133.662Z" fill="#FFCCE4" />
				<path d="M106.843 100.21H100.211V106.843H106.843V100.21Z" fill="#BBE4FF" />
				<path d="M106.843 6.63208H100.211V13.2647H106.843V6.63208Z" fill="#F1F4CE" />
				<path d="M100.211 133.662H93.578V140.295H100.211V133.662Z" fill="#FFCCE4" />
				<path d="M100.211 106.988H93.578V113.621H100.211V106.988Z" fill="#F1F4CE" />
				<path d="M100.211 6.63208H93.578V13.2647H100.211V6.63208Z" fill="#F1F4CE" />
				<path d="M93.4336 133.662H86.8009V140.295H93.4336V133.662Z" fill="#FFCCE4" />
				<path d="M93.4336 106.988H86.8009V113.621H93.4336V106.988Z" fill="#F1F4CE" />
				<path d="M93.4336 6.63208H86.8009V13.2647H93.4336V6.63208Z" fill="#F1F4CE" />
				<path d="M86.8014 140.439H80.1688V147.072H86.8014V140.439Z" fill="#FFCCE4" />
				<path d="M86.8014 113.62H80.1688V120.252H86.8014V113.62Z" fill="#FFCCE4" />
				<path d="M86.8014 -0.000244141H80.1688V6.63242H86.8014V-0.000244141Z" fill="#40BBFF" />
				<path d="M80.0243 140.439H73.3916V147.072H80.0243V140.439Z" fill="#FFCCE4" />
				<path d="M80.0243 113.62H73.3916V120.252H80.0243V113.62Z" fill="#FFCCE4" />
				<path d="M80.0243 -0.000244141H73.3916V6.63242H80.0243V-0.000244141Z" fill="#40BBFF" />
				<path d="M73.3915 140.439H66.7589V147.072H73.3915V140.439Z" fill="#FFCCE4" />
				<path d="M73.3915 -0.000244141H66.7589V6.63242H73.3915V-0.000244141Z" fill="#69EDFF" />
				<path d="M66.7586 140.439H60.126V147.072H66.7586V140.439Z" fill="#FFCCE4" />
				<path d="M66.7586 -0.000244141H60.126V6.63242H66.7586V-0.000244141Z" fill="#69EDFF" />
				<path d="M59.9822 133.662H53.3495V140.295H59.9822V133.662Z" fill="#FFCCE4" />
				<path d="M59.9822 33.4514H53.3495V40.0841H59.9822V33.4514Z" fill="#FFCCE4" />
				<path d="M59.9822 6.63208H53.3495V13.2647H59.9822V6.63208Z" fill="#69EDFF" />
				<path d="M53.3495 133.662H46.7168V140.295H53.3495V133.662Z" fill="#FFCCE4" />
				<path d="M53.3495 33.4514H46.7168V40.0841H53.3495V33.4514Z" fill="#F1F4CE" />
				<path d="M53.3495 6.63208H46.7168V13.2647H53.3495V6.63208Z" fill="#BBE4FF" />
				<path d="M46.7167 133.662H40.084V140.295H46.7167V133.662Z" fill="#FFCCE4" />
				<path d="M46.7167 40.084H40.084V46.7166H46.7167V40.084Z" fill="#F1F4CE" />
				<path d="M46.7167 6.63208H40.084V13.2647H46.7167V6.63208Z" fill="#BBE4FF" />
				<path d="M39.9402 127.029H33.3076V133.662H39.9402V127.029Z" fill="#FFD6C2" />
				<path d="M39.9402 46.7163H33.3076V53.349H39.9402V46.7163Z" fill="#BBE4FF" />
				<path d="M39.9402 13.4084H33.3076V20.0411H39.9402V13.4084Z" fill="#CDF7F0" />
				<path d="M33.3075 127.029H26.6748V133.662H33.3075V127.029Z" fill="#FFD6C2" />
				<path d="M33.3075 53.4939H26.6748V60.1265H33.3075V53.4939Z" fill="#BBE4FF" />
				<path d="M33.3075 13.4084H26.6748V20.0411H33.3075V13.4084Z" fill="#F1F4CE" />
				<path d="M26.6747 120.253H20.0421V126.885H26.6747V120.253Z" fill="#FFD6C2" />
				<path d="M26.6747 20.0415H20.0421V26.6742H26.6747V20.0415Z" fill="#F1F4CE" />
				<path d="M19.8975 113.62H13.2649V120.252H19.8975V113.62Z" fill="#FFD6C2" />
				<path d="M19.8975 26.6746H13.2649V33.3072H19.8975V26.6746Z" fill="#CDF7F0" />
				<path d="M13.2655 106.988H6.63281V113.621H13.2655V106.988Z" fill="#F1F4CE" />
				<path d="M13.2655 100.21H6.63281V106.843H13.2655V100.21Z" fill="#F1F4CE" />
				<path d="M13.2655 40.084H6.63281V46.7166H13.2655V40.084Z" fill="#BBE4FF" />
				<path d="M13.2655 33.4514H6.63281V40.0841H13.2655V33.4514Z" fill="#CDF7F0" />
				<path d="M6.6327 93.5774H6.10352e-05V100.21H6.6327V93.5774Z" fill="#F1F4CE" />
				<path d="M6.6327 86.9443H6.10352e-05V93.577H6.6327V86.9443Z" fill="#F1F4CE" />
				<path d="M6.6327 80.1687H6.10352e-05V86.8013H6.6327V80.1687Z" fill="#40BBFF" />
				<path d="M6.6327 73.5356H6.10352e-05V80.1683H6.6327V73.5356Z" fill="#40BBFF" />
				<path d="M6.6327 66.9026H6.10352e-05V73.5353H6.6327V66.9026Z" fill="#69EDFF" />
				<path d="M6.6327 60.1262H6.10352e-05V66.7589H6.6327V60.1262Z" fill="#69EDFF" />
				<path d="M6.6327 53.4939H6.10352e-05V60.1265H6.6327V53.4939Z" fill="#69EDFF" />
				<path d="M6.6327 46.7163H6.10352e-05V53.349H6.6327V46.7163Z" fill="#BBE4FF" />
			</g>
		</svg>
	);
};
const Start = () => {
	const { setStep } = useContext(StepContext) as IStep;
	return (
		<div className={`${styles.container} containerColumn`}>
			<Alien
				containerClassName={styles.alienCont}
				alienClassName={styles.alienAnim}
				imageBubble={<BubbleSVG />}
				imageAlien={alienIMG}
			/>
			<div className={styles.text}>
				<span>ПОЙМАЙ ПРИШЕЛЬЦА!</span>
			</div>

			<BgImage className={styles.bubbleBright} />

			<Button className={styles.btn} text={'Начать'} onClick={() => setStep(2)} />
		</div>
	);
};

export default Start;
