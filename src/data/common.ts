//typescript
interface UpperCaseValue {
    "firstCharset": string;
    "lowerText": string;
    "upText": string;
    "afterUpper": string;
}

interface LowerCaseValue {
    "firstCharset": string;
    "upText": string;
    "lowerText": string;
    "afterLower": string;
}
    
interface Objs {
    make_texts: Array<string>;
    key_names: Array<string>;
    positions: number;
    extract_strings: number;
    extract_quot: number;
    names: string;
}

interface Data {
    mediaquery: number,
}

//さまざなデータの規定値
export const data: Data = {
    mediaquery: 767 //レスポンシブの目安
}

//先頭のみ小文字から大文字へ
export const upperCase = (text: string): string => {
    const upperCaseValue: UpperCaseValue = {
        "firstCharset": "",
        "lowerText": "",
        "upText": "",
        "afterUpper": "",
    }

    upperCaseValue.firstCharset = text.charAt(0);
    upperCaseValue.lowerText = text.slice(1);
    upperCaseValue.upText = upperCaseValue.firstCharset.toUpperCase();
    upperCaseValue.afterUpper = `${upperCaseValue.upText}${upperCaseValue.lowerText}`;
    return upperCaseValue.afterUpper;
}

//先頭のみ大文字から小文字へ
export const lowerCase = (text: string): string => {
    const lowerCaseValue: LowerCaseValue = {
        "firstCharset": "",
        "upText": "",
        "lowerText": "",
        "afterLower": "",
    }

    lowerCaseValue.firstCharset = text.charAt(0);
    lowerCaseValue.upText = text.slice(1);
    lowerCaseValue.lowerText = lowerCaseValue.firstCharset.toLowerCase();
    lowerCaseValue.afterLower = `${lowerCaseValue.lowerText}${lowerCaseValue.upText}`;
    return lowerCaseValue.afterLower;
}
  
//引数のテキストに、指定のオブジェクトの値を追加した文章の配列を作る。
export function clsNameObj(find_text: string, arrays: any): Objs {
    const objs: Objs = {
        make_texts: [],
        key_names: [],
        positions: 0,
        extract_strings: 0,
        extract_quot: 0,
        names: "",
    }

    const get_origin_array = (origin: Array<string> = []): Array<string> => {
        Object.keys(arrays).map((key)=>{origin.push(key)});
        return origin;
    }

    //オブジェクトを検索をして、指定の文章だけ抽出した配列を作る
    objs.names = JSON.stringify(get_origin_array());
    while(objs.extract_strings > -1) {
        objs.extract_strings = objs.names.indexOf(find_text, objs.positions);
        objs.extract_quot = objs.names.indexOf('"', objs.extract_strings);
        objs.positions = objs.extract_strings + 1;
        objs.key_names.push(objs.names.slice(objs.extract_strings, objs.extract_quot));
    }
    objs.key_names.pop();
    objs.key_names.map((key: string)=>{
        objs.make_texts.push(arrays[key]);
    });
    
    return objs;
}