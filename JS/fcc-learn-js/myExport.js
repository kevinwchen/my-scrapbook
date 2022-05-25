export const capitaliseString = str => str.toUpperCase();

const capitaliseString2 = (string) => {
    return string.charAt(0).toUpperCase + string.slice(1);
}
export { capitaliseString2 };

// Export default (fallback)
// If you only want to export one thing from a file
// function subtract(x,y) {return x - y;}
export default function subtract(x,y) {return x - y;}