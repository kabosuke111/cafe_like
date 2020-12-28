import {AT_SectionImage} from '../../actionTypes';
import {section_title_image_state, SectionTitleImageActions} from './types';

//reducer

const initialState: section_title_image_state = {
    show_title_image: AT_SectionImage.section_news_image,
}

//actionクリエーターを通じて送られてきたaction.typeの内容に応じて、処理を分岐
export const toppage_titleimage_reducer = (state = initialState, action: SectionTitleImageActions): section_title_image_state => {
    switch(action.type) {
        case AT_SectionImage.section_news_image:
            return {
                ...state,
                show_title_image: AT_SectionImage.section_news_image
            };
        case AT_SectionImage.section_concept_image:
            return {
                ...state,
                show_title_image: AT_SectionImage.section_concept_image
            };
        case AT_SectionImage.section_menu_image:
            return {
                ...state,
                show_title_image: AT_SectionImage.section_menu_image
            };
        case AT_SectionImage.section_access_image:
            return {
                ...state,
                show_title_image: AT_SectionImage.section_access_image
            };

        default:
            return state;
    }
}