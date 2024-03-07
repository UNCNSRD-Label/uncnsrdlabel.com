export type ShopifyErrorLike = {
	status: number;
	message: Error;
};

export function findError<T extends Record<string, unknown>>(error: T): boolean {
	if (Object.prototype.toString.call(error) === '[object Error]') {
		return true;
	}

	const prototype = Object.getPrototypeOf(error) as T;

	return prototype === null ? false : findError(prototype);
}

export function isObject(object: unknown): object is Record<string, unknown> {
	return (
		typeof object === 'object' && object !== null && !Array.isArray(object)
	);
}

export function isShopifyError(error: unknown): error is ShopifyErrorLike {
	if (!isObject(error)) {
		return false;
	}

	if (error instanceof Error) {
		return true;
	}

	return findError(error);
}

export function formatErrorMessage(error: Error): string {
	return JSON.stringify(error, Object.getOwnPropertyNames(error));
}
