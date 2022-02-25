// declarations/str-utils/index.d.ts

declare module 'str-utils' {
    type Utils = (input: string) => string;
    export const strReverse: Utils;
    export const strToLower: Utils;
    export const strToUpper: Utils;
    export const strRandomize: Utils;
    export const strInvertCase: Utils;
}
