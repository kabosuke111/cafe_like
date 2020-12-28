import {AT_SectionImage} from '../../actionTypes';
import {SectionTitleImageActions} from './types';

//action creator
//ステートを変更するためのタイプを発行する関数の設定
export const ActionTitleImageNews = (): SectionTitleImageActions => {
    return {
        type: AT_SectionImage.section_news_image,
    }
}

export const ActionTitleImageConcept = (): SectionTitleImageActions => {
    return {
        type: AT_SectionImage.section_concept_image,
    }
}

export const ActionTitleImageMenu= (): SectionTitleImageActions => {
    return {
        type: AT_SectionImage.section_menu_image,
    }
}

export const ActionTitleImageAccess = (): SectionTitleImageActions => {
    return {
        type: AT_SectionImage.section_access_image,
    }
}

