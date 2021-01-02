import React from 'react';
import TitleImage from './parts_image/title/title_image';

const TopAccess = () => {

  return (
    <footer id="access" className="l-section access">
      <TitleImage  src="access" tagChange="change" />
      <div className="b--access">
        <address className="b--access__address m_t_center">
          <p className="b--access__address__tel m_font_JSO m_font_largest m_font_white">023-7485-2144</p>
          <p className="b--access__address__address m_font_white">〒232-0202 野良犬県うましか市ちょんまげ町245丁目6番地 ビルに入って東の５階</p>
        </address>
      </div>
      <p className="b--copyright m_t_right m_font_white">&copy; 2020 cola-daisuki co.,Ltd.</p>
    </footer>
  );
}


export default TopAccess;
