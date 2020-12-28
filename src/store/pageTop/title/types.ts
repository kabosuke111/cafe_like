import {AT_SectionTitle} from '../../actionTypes';
import {Action} from 'redux';

//stateの型
export type section_title_state = {
    show_title: string
}

//actionの型
interface topTitle extends Action {
    type: typeof AT_SectionTitle.top_title
}

interface SectionNews extends Action {
    type: typeof AT_SectionTitle.section_news
}

interface SectionConcept extends Action {
    type: typeof AT_SectionTitle.section_concept
}

interface SectionMenu extends Action {
    type: typeof AT_SectionTitle.section_menu
}

interface SectionAccess extends Action {
    type: typeof AT_SectionTitle.section_access
}

export type SectionTitleActions = topTitle | SectionNews | SectionConcept | SectionMenu | SectionAccess;