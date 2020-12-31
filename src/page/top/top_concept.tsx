import React from 'react';
import ImageCalm from '../../images/top/concept-calm.jpg';
import ImageSilence from '../../images/top/concept-silence.jpg';
import ImageHappiness from '../../images/top/concept-happiness.jpg';
import TitleImage from './parts_image/title/title_image';

interface TYPE_concept_list {
  "title": string,
  "image": string
}

interface Props {
  "func": (text:string) => string;
}

const TopConcept = (props: Props) => {

  const conseptList: Array<TYPE_concept_list> = [
    {
      "title": "calm",
      "image": ImageCalm,
    },
    {
      "title": "silence",
      "image": ImageSilence,
    },
    {
      "title": "happiness",
      "image": ImageHappiness,
    }
  ]
  console.log(props.func("hh"));

  //先頭のみ小文字から大文字へ
  const upperCase = (text: string): string => {
    const firstCharset = text.charAt(0);
    const lowerText = text.slice(1);
    const upText = firstCharset.toUpperCase();
    const afterUpper = `${upText}${lowerText}`;
    return afterUpper;
  }

  return (
    <section className="l-section concept">
      <TitleImage  src="concept" />
      <div className="b--concept">
        <ul className="b--concept__features m_d_flex_nowrap_stretch m_f_between">
          {conseptList.map((key) => (
              <li className="b--concept__features__item m_relative">
                <img className={`b--concept__features__image ${key.title}`} src={key.image} alt={key.title} />
                <p className="b--concept__features__title m_font_white m_l_h_1">{`${upperCase(key.title)}`}</p>
              </li>
          ))}
        </ul>
        <p className="b--concept__text">目指したのは心の休まる安らぎの空間。<br />
        なんかまた来たいな、と思わせるような癒しのカフェを目指しました。<br />
        わいわいがやがやもいいけれど、<br />
        一人で静かに過ごすのも大切ですよね。</p>
      </div>
    </section>
  );
}


export default TopConcept;
