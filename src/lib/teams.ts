// src/lib/teams.ts

export type Driver = {
	name: string;
	imgTransparent: string;
	nationality: string;
};

export type TeamInfo = {
	name: string;
	color: string;
	logo: string;
	carImg?: string;
	drivers: Driver[];
};

export const teams: Record<string, TeamInfo> = {
	mclaren: {
		name: 'McLaren',
		color: 'orange-500',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mclaren-logo.png',
		carImg:
			'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png',
		drivers: [
			{
				name: 'Oscar Piastri',
				nationality: 'AU',
				imgTransparent:
					'https://media.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png'
			},
			{
				name: 'Lando Norris',
				nationality: 'GB',
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
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png'
			},
			{
				name: 'Liam Lawson',
				nationality: 'NZ',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png'
			}
		]
	},
	ferrari: {
		name: 'Ferrari',
		color: 'red-500',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/ferrari-logo.png',
		carImg:
			'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png',
		drivers: [
			{
				name: 'Lewis Hamilton',
				nationality: 'GB',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png'
			},
			{
				name: 'Charles Leclerc',
				nationality: 'MC',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png'
			}
		]
	},
	mercedes: {
		name: 'Mercedes',
		color: 'teal-400',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/mercedes-logo.png',
		carImg:
			'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png',
		drivers: [
			{
				name: 'George Russell',
				nationality: 'GB',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png'
			},
			{
				name: 'Andrea Kimi Antonelli',
				nationality: 'IT',
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
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png'
			},
			{
				name: 'Carlos Sainz',
				nationality: 'ES',
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
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png'
			},
			{
				name: 'Yuki Tsunoda',
				nationality: 'JP',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png'
			}
		]
	},
	haasf1team: {
		name: 'Haas F1 Team',
		color: 'white',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/haas-logo.png',
		drivers: [
			{
				name: 'Esteban Ocon',
				nationality: 'FR',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png'
			},
			{
				name: 'Oliver Bearman',
				nationality: 'GB',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png'
			}
		]
	},
	sauber: {
		name: 'Sauber',
		color: 'green-600',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/kick-sauber-logo.png',
		drivers: [
			{
				name: 'Nico Hülkenberg',
				nationality: 'DE',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png'
			},
			{
				name: 'Gabriel Bortoleto',
				nationality: 'BR',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png'
			}
		]
	},
	astonmartin: {
		name: 'Aston Martin',
		color: 'emerald-700',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/aston-martin-logo.png',
		drivers: [
			{
				name: 'Fernando Alonso',
				nationality: 'ES',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png'
			},
			{
				name: 'Lance Stroll',
				nationality: 'CA',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png'
			}
		]
	},
	alpinef1team: {
		name: 'Apline F1 Team',
		color: 'pink-400',
		logo: 'https://media.formula1.com/content/dam/fom-website/teams/2025/alpine-logo.png',
		drivers: [
			{
				name: 'Pierre Gasly',
				nationality: 'FR',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png'
			},
			{
				name: 'Franco Colapinto',
				nationality: 'AR',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png'
			},
			{
				name: 'Jack Doohan',
				nationality: 'AR',
				imgTransparent:
					'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO1_Jack_Doohan/jacdoo01.png'
			}
		]
	}
};

export function getTeamInfo(key: string): TeamInfo | undefined {
	return teams[key.toLowerCase()];
}
