export type ErrorWithMessage = {
	message: string;
};

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
	return (
		typeof error === 'object'
    && error !== null
    && 'message' in error
    && typeof (error as Record<string, unknown>).message === 'string'
	);
}

export function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
	if (isErrorWithMessage(maybeError)) {
		return maybeError;
	}

	try {
		return new Error(JSON.stringify(maybeError));
	} catch {
		// Fallback in case there's an error stringifying the maybeError
		// like with circular references for example.
		return new Error(String(maybeError));
	}
}

export function getErrorMessage(error: unknown) {
	return toErrorWithMessage(error).message;
}

export function isErrorsWithMessage(
	errors: unknown,
): errors is ErrorWithMessage[] {
	return (
		Array.isArray(errors) && errors.every(error => isErrorWithMessage(error))
	);
}

export function toErrorsWithMessage(maybeErrors: unknown): ErrorWithMessage[] {
	if (isErrorsWithMessage(maybeErrors)) {
		return maybeErrors;
	}

	try {
		if (Array.isArray(maybeErrors)) {
			const errors = maybeErrors.map(
				maybeError => new Error(JSON.stringify(maybeError)),
			);

			return errors;
		}

		return [toErrorWithMessage(maybeErrors)];
	} catch {
		// Fallback in case there's an error stringifying the maybeError
		// like with circular references for example.
		return [new Error(String(maybeErrors))];
	}
}

export function getErrorsMessage(error: unknown) {
	return toErrorsWithMessage(error)?.[0]?.message;
}
