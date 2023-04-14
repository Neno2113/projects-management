
export const upperCaseFirstLetter = ( letter: string ) => {

    let firstLetter = letter.charAt(0).toLocaleUpperCase();
    let remaindLetter = letter.slice(1);
    return firstLetter + remaindLetter;

    
}
