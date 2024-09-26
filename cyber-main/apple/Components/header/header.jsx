import React from 'react';
import Logo from '../../src/assets/cyberLogo.svg';
import Favori from '../icons/favorite.jsx';
import Magaza from '../icons/shop';
import Kullanici from '../icons/user';
import AramaKutusu from '../comp/searchBox';
import Kırıntılar from './breadcrumbs';

const Header = () => {
  return (
    <>
      <div className="header-bar">
        <img src={Logo} alt="Logo bulunamadı." />
        <AramaKutusu />
        <div className="navigation">
          <ul>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="icons">
          <Favori />
          {/* Mağaza bileşenine cartItemCount prop'unu geçirin */}
          <Magaza />
          <Kullanici />
        </div>
      </div>
      <Kırıntılar />
    </>
  );
};

export default Header;
