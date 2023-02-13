

export const lightTheme = {
    backgroundColor:"#F1F1F1",
    colorTitle:"#888888"
};

export const darkTheme = {
    backgroundColor:"#344563",
    colorTitle:"#fff"
}

export const langLocal=localStorage.getItem('lang') || 'tr';
export default langLocal=='tr' ? darkTheme : lightTheme ;

