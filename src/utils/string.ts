export function isNumber(str: string): boolean {
    return /^\d+$/.test(str);
}

export function isUpperCase(str: string, options = { number: true }): boolean {
    return options.number ? /^[A-Z\d]+$/.test(str) : /^[A-Z]+$/.test(str);
}

export function isLowerCase(str: string, options = { number: true }): boolean {
    return options.number ? /^[a-z\d]+$/.test(str) : /^[a-z]+$/.test(str);
}

export function isCapital(str: string): boolean {
    return isUpperCase(str[0]) && isLowerCase(str.slice(1), { number: true });
}

export function upperFirst(str: string): string {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function lowerFirst(str: string): string {
    return `${str[0].toLowerCase()}${str.slice(1)}`;
}

export function capitalize(str: string): string {
    return upperFirst(str.toLowerCase());
}

const wordReg = /([a-z\d]+)|([A-Z]\d*[a-z][a-z\d]*)|(([A-Z][A-Z\d]*)(?=(([A-Z]\d*[a-z][a-z\d]*)|([^a-zA-Z\d])|$)))/g;
export function words(str: string): string[] {
    return str.match(wordReg) || [];
}

export function duplicate(str: string, n: number) {
    let strArr = [];
    for (let i = 0; i < n; i += 1) {
        strArr.push(str);
    }
    return strArr.join('');
}
