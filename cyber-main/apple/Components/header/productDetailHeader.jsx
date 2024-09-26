import React from 'react';
import Logo from '../../src/assets/cyberLogo.svg';
import Favorite from '../icons/favorite.jsx';
import Shop from '../icons/shop';
import User from '../icons/user';
import SearchBox from '../comp/searchBox';
import BreadCrumbs from './productDetailBreadCrumbs.jsx';

const ProductDetailHeader = () => {
  return (
    <>
      <div className="header-bar">
        <img src={Logo} alt="Logo bulunamadı." />
        <SearchBox />
        <div className="navigation">
          <ul>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="icons">
          <Favorite />
          <Shop />
          <User />
        </div>
      </div>
      <BreadCrumbs />
    </>
  );
};

export default ProductDetailHeader;
