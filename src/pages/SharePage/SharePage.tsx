import cityBG from '../../assets/images/bg2.png';
import BgImage from '../../components/BgImage/BgImage';
import styles from './SharePage.module.scss';
import starIMG from '../../assets/images/star.png';
import Button from '../../components/Button/Button';
import vkIMG from '../../assets/images/vk.png';
import odnoklassnikiIMG from '../../assets/images/odnoklassniki.png';
import telegramIMG from '../../assets/images/telegram.png';
import { IStep, StepContext } from '../../providers/stepProvider';
import { useContext } from 'react';

const shareText = (alienCount: number) => {
	if (alienCount >= 9) {
		return 'ЛУЧШИЙ ИЗ ЛУЧШИХ. Настоящий спаситель человечества.';
	}
	if (alienCount >= 5) {
		return 'ты, конечно, не супергерой, но своё дело знаешь. город еще не спасен. попробуешь еще раз?';
	}

	if (alienCount >= 0) {
		return 'теперь понятно, почему тебя не зовут спасать мир. попробуешь еще раз?';
	}
	return '';
};

const encodeText = (alienCount: number) => {
	return encodeURIComponent(shareText(alienCount));
};
const SharePage = () => {
	const { alienCount, setAlienCount, setStep } = useContext(StepContext) as IStep;
	return (
		<div className="container">
			<BgImage image={cityBG} />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.start}>
						{alienCount >= 0 && <img src={starIMG} alt={'star'} />}
						{alienCount >= 5 && <img src={starIMG} alt={'star'} />}
						{alienCount >= 9 && <img src={starIMG} alt={'star'} />}
					</div>

					<div className={styles.text}>
						<div className={styles.result}>Поймано {alienCount}/10</div>
						<div className={styles.sharingText}>{shareText(alienCount)}</div>
					</div>

					<Button
						text={'ЕЩЕ РАЗ'}
						onClick={() => {
							setStep(1);
							setAlienCount(0);
						}}
					/>

					<div className={styles.sharingBlock}>
						<div className={styles.text}>Поделиться</div>

						<ul>
							<li>
								<a
									href={`https://t.me/share/url?url=${window.location.href}&text=${shareText(
										alienCount,
									)}`}
									target="_blank">
									<img src={telegramIMG} alt="telegram" />
								</a>
							</li>
							<li>
								<a
									href={`https://connect.ok.ru/offer?url=${window.location.href}&title=${encodeText(
										alienCount,
									)}`}
									target="_blank">
									<img src={odnoklassnikiIMG} alt="OK" />
								</a>
							</li>
							<li>
								<a
									href={`https://vk.com/share.php?url=${window.location.href}&title=${encodeText(
										alienCount,
									)}`}
									target="_blank">
									<img src={vkIMG} alt="VK" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SharePage;
