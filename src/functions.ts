export function concatString(str1: string, str2: string):string {
    if (str1 === '' || str2 === '') return str1;
    return `${str1}-${str2}`
}
