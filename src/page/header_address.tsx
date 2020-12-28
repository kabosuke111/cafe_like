import React from 'react';
import {Company_data} from './../data/data_company';

interface CompanyData {
  tel: string;
  address: string;
}

const HeaderAddress = () => {
  const data: CompanyData = Company_data;

  return (
    <div className="header__address">
      <p className="address__tel m_font_largest">{data.tel}</p>
      <p className="address__address"><address className="address__address__inner">{data.address}</address></p>
    </div>
  );
}

export default HeaderAddress;