// src/lib/teams.ts

type Driver = {
	name: string;
	imgTransparent: string;
	nationality: string;
	flag: string;
};

type TeamInfo = {
	name: string;
	color: string;
	logo: string;
	drivers: Driver[];
};

export const teams: Record<string, TeamInfo> = {
	mclaren: {
		name: 'McLaren',
		color: 'orange-500',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mclaren-logo.png',
		drivers: [
			{
				name: 'Oscar Piastri',
				nationality: 'AU',
				flag: '🇦🇺',
				imgTransparent:
					'https://media.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png'
			},
			{
				name: 'Lando Norris',
				nationality: 'GB',
				flag: '🇬🇧',
				imgTransparent:
					'https://media.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png'
			}
		]
	},
	redbull: {
		name: 'Red Bull Racing',
		color: 'blue-800',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/red-bull-racing-logo.png',
		drivers: [
			{
				name: 'Max Verstappen',
				nationality: 'NL',
				flag: '🇳🇱',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png'
			},
			{
				name: 'Yuki Tsunoda',
				nationality: 'JP',
				flag: '🇯🇵',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png'
			}
		]
	},
	ferrari: {
		name: 'Ferrari',
		color: 'red-500',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/ferrari-logo.png',
		drivers: [
			{
				name: 'Lewis Hamilton',
				nationality: 'GB',
				flag: '🇬🇧',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png'
			},
			{
				name: 'Charles Leclerc',
				nationality: 'MC',
				flag: '🇲🇨',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png'
			}
		]
	},
	mercedes: {
		name: 'Mercedes',
		color: 'cyan-500',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mercedes-logo.png',
		drivers: [
			{
				name: 'George Russell',
				nationality: 'GB',
				flag: '🇬🇧',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png'
			},
			{
				name: 'Andrea Kimi Antonelli',
				nationality: 'IT',
				flag: '🇮🇹',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/ANDANT01_Kimi_Antonelli/andant01.png'
			}
		]
	},
	williams: {
		name: 'Williams',
		color: 'blue-400',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/williams-logo.png',
		drivers: [
			{
				name: 'Alexander Albon',
				nationality: 'TH',
				flag: '🇹🇭',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png'
			},
			{
				name: 'Carlos Sainz',
				nationality: 'SP',
				flag: '🇪🇸',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png'
			}
		]
	},
	rbf1team: {
		name: 'RB F1 Team',
		color: 'blue-600',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/racing-bulls-logo.png',
		drivers: [
			{
				name: 'Isack Hadjar',
				nationality: 'FR',
				flag: '🇫🇷',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png'
			},
			{
				name: 'Yuki Tsunoda',
				nationality: 'JP',
				flag: '🇯🇵',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png'
			}
		]
	}
};

export function getTeamInfo(key: string): TeamInfo | undefined {
	return teams[key.toLowerCase()];
}
