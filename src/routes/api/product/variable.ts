import { WOO_AUTH_HEADER, WOO_ENDPOINT } from '$lib/config';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const productID = params.id;
	const _url = WOO_ENDPOINT + `/products?${productID}/variations`;
	const res: Response = await fetch(_url, {
		method: 'GET',
		headers: {
			Accept: 'Application/json',
			Authorization: WOO_AUTH_HEADER
		}
	});
	if (res.status === 200) {
		const data = await res.json();
		return {
			status: 200,
			body: data
		};
	} else {
		return {
			status: res.status,
			body: { error: 'Error fetching data' }
		};
	}
};
