import {AT_SectionTitle} from '../../actionTypes';
import {section_title_state, SectionTitleActions} from './types';

//reducer

const initialState: section_title_state = {
    show_title: AT_SectionTitle.top_title
}

export const toppage_reducer = (state = initialState, action: SectionTitleActions): section_title_state => {
    switch(action.type) {
        case AT_SectionTitle.top_title:
            return {
                ...state,
                show_title: AT_SectionTitle.top_title
            };
        case AT_SectionTitle.section_news:
            return {
                ...state,
                show_title: AT_SectionTitle.section_news
            };
        case AT_SectionTitle.section_concept:
            return {
                ...state,
                show_title: AT_SectionTitle.section_concept
            };
        case AT_SectionTitle.section_menu:
            return {
                ...state,
                show_title: AT_SectionTitle.section_menu
            };
        case AT_SectionTitle.section_access:
            return {
                ...state,
                show_title: AT_SectionTitle.section_access
            };
        default:
            return state;
    }
}