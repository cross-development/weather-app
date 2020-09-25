//Weather code info
import weatherCode from 'data/weatherCode.json';

export const getIconUrl = (code, time) => {
	const weatherItem = weatherCode.find(item => code === item.code);

	return time.includes('PM') ? weatherItem.dayIcon : weatherItem.nightIcon;
};
