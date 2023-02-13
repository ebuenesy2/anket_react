
export const LangTr = {
    title: 'Başlik',
    color: 'Renk'
};

export const LangEn = {
    title: 'Title',
    color: 'Color'
}

export const LangGer = {
    title: 'Titel',
    color: 'Farbe'
}


export const langLocal=localStorage.getItem('lang') || 'tr';
export default langLocal=='en' ? LangEn : langLocal=='en' ? LangGer : LangTr ;

