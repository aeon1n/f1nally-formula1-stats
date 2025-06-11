import type { Race } from '$lib/types';
import { api } from '$lib/utils';

export async function getRaces() {
	const res = await fetch(`${api}f1/2025/races/`);
	const data = await res.json();

	return data.MRData.RaceTable.Races as Race[];
}
export async function getTracks() {
	const res = await fetch(`${api}f1/2025/`);
	const data = await res.json();

	return data;
}
