import {type ReadonlyURLSearchParams} from 'next/navigation';

export function createUrl(
	pathname: string,
	parameters: URLSearchParams | ReadonlyURLSearchParams,
) {
	const parametersString = parameters.toString();

	const queryString = `${parametersString.length > 0 ? '?' : ''}${parametersString}`;

	return `${pathname}${queryString}`;
}
