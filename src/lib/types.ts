export interface Driver {
	driverId: string;
	code: string;
	url: string;
	givenName: string;
	familyName: string;
	dateOfBirth: Date;
	nationality: string;
	permanentNumber?: string;
}

export interface Standing {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: Driver;
	Constructors?: { name: string }[];
}

export interface Constructor {
	constructorId: string;
	url: string;
	name: string;
	nationality: string;
}

export interface Circuit {
	circuitId: string;
	url: string;
	circuitName: string;
	Location: Location;
}

export interface Location {
	lat: string;
	long: string;
	locality: string;
	country: string;
}

export interface Session {
	date: string;
	time: string;
}

export interface Race {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: Circuit;
	date: string;
	time: string;
	FirstPractice: Session;
	SecondPractice: Session;
	ThirdPractice: Session;
	Qualifying: Session;
	Sprint?: Session;
	SprintQualifying?: Session;
}

export interface ConstructorStandings {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Constructor: Constructor;
}
