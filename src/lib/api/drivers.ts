import type { Driver, Standing } from '$lib/types';
import { api } from '$lib/utils';

export async function getDrivers(): Promise<Driver[]> {
	const res = await fetch(`${api}/f1/2025/driverstandings/`);
	if (!res.ok) {
		throw new Error('Failed to fetch drivers');
	}

	const data = await res.json();

	const standings = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];

	const drivers: Driver[] = standings.map((standing: Standing) => {
		const d = standing.Driver;
		const constructorName = standing.Constructors?.[0]?.name ?? 'Unknown';

		return {
			driverId: d.driverId,
			code: d.code,
			url: d.url,
			givenName: d.givenName,
			familyName: d.familyName,
			dateOfBirth: new Date(d.dateOfBirth),
			nationality: d.nationality,
			constructor: constructorName.toLowerCase().replace(/\s+/g, '')
		};
	});

	return drivers;
}

export async function getDriverStandings(): Promise<Standing[]> {
	const res = await fetch(`${api}/f1/2025/driverstandings/`);

	if (!res.ok) {
		throw new Error('Failed to fetch standings!');
	}

	const data = await res.json();

	const standings: Standing[] = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	return standings;
}
