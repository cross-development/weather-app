//Weather code info
import weatherCode from 'data/weatherCode.json';

export const getIconUrl = icon => {
	return `../../assets/icons/${icon}`;

	// const weatherItem = weatherCode.find(item => code === item.code);

	// return time.includes('PM') ? weatherItem.dayIcon : weatherItem.nightIcon;
};
