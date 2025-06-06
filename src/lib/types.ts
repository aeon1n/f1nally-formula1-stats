export interface Driver {
	driverId: string;
	code: string;
	url: string;
	givenName: string;
	familyName: string;
	dateOfBirth: Date;
	nationality: string;
}

export interface Standing {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: {
		driverId: string;
		code: string;
		url: string;
		givenName: string;
		familyName: string;
		dateOfBirth: string;
		nationality: string;
	};
	Constructors?: { name: string }[];
}

export interface Constructor {
	constructorId: string;
	url: string;
	name: string;
	nationality: string;
}
