import React from 'react';
import ImageCalm from '../../images/top/concept-calm.jpg';
import ImageSilence from '../../images/top/concept-silence.jpg';
import ImageHappiness from '../../images/top/concept-happiness.jpg';

interface TYPE_concept_list {
  "title": string,
  "image": string
}

const TopConcept = () => {
  const conseptList: Array<TYPE_concept_list> = [{
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

//先頭のみ小文字から大文字へ
const upperCase = (text: string): string => {
  const firstCharset = text.charAt(0);
  const lowerText = text.slice(1);
  const upText = firstCharset.toUpperCase();
  const afterUpper = `${upText}${lowerText}`;
  return afterUpper;
}

  return (
    <section className="l-section top-concept">
      <ul className="concept-ul">
        {conseptList.map((key) => (
            <li className="concept-list">
              <img className={`concept-image ${key.title}`} src={key.image} alt={key.title} />
              <p className="concept-title">{`${upperCase(key.title)}`}</p>
            </li>
        ))}
      </ul>
      <p></p>
    </section>
  );
}


export default TopConcept;