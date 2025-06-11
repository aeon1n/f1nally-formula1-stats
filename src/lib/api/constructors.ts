import type { ConstructorStandings } from '$lib/types';
import { api } from '$lib/utils';

export async function getConstructorStandings(): Promise<ConstructorStandings[]> {
	const res = await fetch(`${api}/f1/2025/constructorstandings?limit=3`);

	if (!res.ok) {
		throw new Error('Failed to fetch standings!');
	}

	const data = await res.json();

	const standings: ConstructorStandings[] =
		data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
	return standings;
}
