import { Tracks } from './tracks';

export const api = 'https://api.jolpi.ca/ergast/';

export function getTrackPoster(circuitName: string): string {
	return Tracks[circuitName as keyof typeof Tracks];
}
