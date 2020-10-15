//typescript

export interface SE_TI {
    [key: string]: string;
    "top_title": string;
    "section_news": string;
    "section_concept": string;
    "section_menu": string;
    "section_access": string;
}

export const AT_SectionTitle: SE_TI = {
    "top_title": "GOOD MASON",
    "section_news": "News",
    "section_concept": "Concept",
    "section_menu": "Menu",
    "section_access": "Access",
} as const;