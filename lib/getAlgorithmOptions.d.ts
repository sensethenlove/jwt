declare const _default: (isFor: 'sign' | 'verify' | 'generate' | 'import') => {
    name: string;
    namedCurve: string;
} | {
    name: string;
    hash: {
        name: string;
    };
};
export default _default;
