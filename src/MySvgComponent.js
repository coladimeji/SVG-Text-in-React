// MySvgComponent.js
import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

function MySvgComponent() {
  return (
    <SvgLoader path="/JANET_SVG.svg">
      <SvgProxy selector="#1.2 NAME/ NOM" textContent="BROWN, JOHN" />
      <SvgProxy selector="#8 " textContent="1665 Pickering Road L1V 4R4 Ontario" />
      <SvgProxy selector="4d NUMBER/NUMERO " textContent= "D5432-12221-00911" />
      <SvgProxy selector="4a ISS/ DEL " textContent= "2023/10/06" />
      <SvgProxy selector="4b EXP. /EXP" textContent=  "2028/10/06" />
      <SvgProxy selector="5 DD /REF. " textContent="DJ0231006" />
      <SvgProxy selector="16 HGT /HAUT." textContent= "175 cm " />
      <SvgProxy selector="#15 SEX/SEXE" textContent="M" />
      <SvgProxy selector="#9 CLASS/ CATEG" textContent="G" />
      <SvgProxy selector="#12 REST / COND" textContent="" />
      <SvgProxy selector="#3 DOB/DDN" textContent="2009/10/06" />
      
    </SvgLoader>
  );
}

export default MySvgComponent;
