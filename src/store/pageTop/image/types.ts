import {AT_SectionImage} from '../../actionTypes';
import {Action} from 'redux';

//stateの型
export type section_title_image_state = {
    show_title_image: string
}

//actionの型
//アクションクリエーターを呼び出した時の戻り値の型を指定する
interface topTitleImageNews extends Action {
    type: typeof AT_SectionImage.section_news_image;
}

interface topTitleImageConcept extends Action {
    type: typeof AT_SectionImage.section_concept_image;
}

interface topTitleImageMenu extends Action {
    type: typeof AT_SectionImage.section_menu_image;
}

interface topTitleImageAccess extends Action {
    type: typeof AT_SectionImage.section_access_image;
}


export type SectionTitleImageActions = topTitleImageNews | topTitleImageConcept | topTitleImageMenu | topTitleImageAccess;