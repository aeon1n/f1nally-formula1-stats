export interface TrackMap {
	[key: string]: string;
}

const img =
	'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/';

export const Tracks: TrackMap = {
	'Albert Park Grand Prix Circuit': `${img}/Australia`,
	'Shanghai International Circuit': `${img}/China`,
	'Suzuka Circuit': `${img}/Japan`,
	'Bahrain International Circuit': `${img}/Bahrain`,
	'Jeddah Corniche Circuit': `${img}/Saudi_Arabia`,
	'Miami International Autodrome': `${img}/Miami`,
	'Autodromo Enzo e Dino Ferrari': `${img}/Emilia Romagna`,
	'Circuit de Monaco': `${img}/Monaco`,
	'Circuit de Barcelona-Catalunya': `${img}/Spain`,
	'Circuit Gilles Villeneuve': `${img}/Canada`,
	'Red Bull Ring': `${img}/Austria`,
	'Silverstone Circuit': `${img}/Great Britain`,
	'Circuit de Spa-Francorchamps': `${img}/Belgium`,
	Hungaroring: `${img}/Hungary`,
	'Circuit Park Zandvoort': `${img}/Netherlands`,
	'Autodromo Nazionale di Monza': `${img}/italy`,
	'Baku City Circuit': `${img}/Azerbaijan`,
	'Marina Bay Street Circuit': `${img}/Singapore`,
	'Circuit of the Americas': `${img}/USA`,
	'Autódromo Hermanos Rodríguez': `${img}/Mexico`,
	'Autódromo José Carlos Pace': `${img}/Brazil`,
	'Las Vegas Strip Street Circuit': `${img}/Las Vegas`,
	'Losail International Circuit': `${img}/Qatar`,
	'Yas Marina Circuit': `${img}/Abu Dhabi`
};
