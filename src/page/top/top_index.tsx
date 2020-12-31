import React from 'react';
import TopNews from './top_news';
import TopConcept from './top_concept';
import TopMenu from './top_menu';
import TopAccess from './top_access';

interface UpperCaseValue {
  "firstCharset": string;
  "lowerText": string;
  "upText": string;
  "afterUpper": string;
}

const TopIndex = () => {
  const upperCaseValue: UpperCaseValue = {
    "firstCharset": "",
    "lowerText": "",
    "upText": "",
    "afterUpper": "",
  }

  //先頭のみ小文字から大文字へ
  const upperCase = (text: string): string => {
    upperCaseValue.firstCharset = text.charAt(0);
    upperCaseValue.lowerText = text.slice(1);
    upperCaseValue.upText = upperCaseValue.firstCharset.toUpperCase();
    upperCaseValue.afterUpper = `${upperCaseValue.upText}${upperCaseValue.lowerText}`;
    return upperCaseValue.afterUpper;
  }

  return (
    <main className="l-main">
      <TopNews />
      <TopConcept func={upperCase} />
      <TopMenu />
      <TopAccess />
    </main>
  );
}

export default TopIndex;
