//typescript
import News from "./../images/top/svg/title_news.svg";
import Concept from "./../images/top/svg/title_concept.svg";
import Menu from "./../images/top/svg/title_menu.svg";
import Access from "./../images/top/svg/title_access.svg";

export interface SE_TI {
    [key: string]: string;
    "top_title": string;
    "section_news": string;
    "section_concept": string;
    "section_menu": string;
    "section_access": string;
}

export interface SE_IMAGE {
    "section_news_image": string;
    "section_concept_image": string;
    "section_menu_image": string;
    "section_access_image": string;
}

export const AT_SectionTitle: SE_TI = {
    "top_title": "GOOD MASON",
    "section_news": "News",
    "section_concept": "Concept",
    "section_menu": "Menu",
    "section_access": "Access",
} as const;

export const AT_SectionImage: SE_IMAGE = {
    "section_news_image": News,
    "section_concept_image": Concept,
    "section_menu_image": Menu,
    "section_access_image": Access,
} as const;