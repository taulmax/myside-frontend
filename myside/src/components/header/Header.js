import React from "react";
import Title from "../elements/Title";
import "../../css/header/header.scss";

/**
 * @설명 Header입니다.
 */
const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo-02.jpg" className="header__logo" alt="logo" />
      <ul className="header__menu">
        <li>
          <Title name="내편찾기" />
        </li>
        <li>
          <Title name="할인행사" />
        </li>
        <li>
          <Title name="커뮤니티" />
        </li>
        <li>
          <Title name="Brand Story" />
        </li>
      </ul>
      <div className="header__profile">
        <img src="/images/default_profile.png" className="profile__img" alt="profile__img" />
        <span className="profile__check">내편이 아닙니다.</span>
      </div>
    </header>
  );
};

export default Header;
