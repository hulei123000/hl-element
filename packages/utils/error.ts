import { isString } from 'lodash-es';

class HlUIError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'HlUIError';
	}
}

export function throwError(scope: string, msg: string) {
	return new HlUIError(`[${scope}]: ${msg}`);
}

export function debugWarn(scope: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
	if (import.meta.env.MODE !== 'production') {
		const err = isString(scope) ? new HlUIError(`[${scope}]: ${msg}`) : scope;
		console.warn(err);
	}
}
