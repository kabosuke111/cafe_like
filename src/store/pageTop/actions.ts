import {AT_SectionTitle} from '../actionTypes';
import {SectionTitleActions} from './types';

//action creator
export const ActionTopTitle = (): SectionTitleActions => {
    return {
        type: AT_SectionTitle.top_title,
    }
}

export const ActionNews = (): SectionTitleActions => {
    return {
        type: AT_SectionTitle.section_news
    }
}

export const ActionConcept = (): SectionTitleActions => {
    return {
        type: AT_SectionTitle.section_concept
    }
}

export const ActionMenu = (): SectionTitleActions => {
    return {
        type: AT_SectionTitle.section_menu
    }
}

export const ActionAccess = (): SectionTitleActions => {
    return {
        type: AT_SectionTitle.section_access
    }
}

