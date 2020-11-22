import React from "react";
import "../../css/elements/title.scss";

/**
 * @설명 Jua 폰트를 사용하는 컴포넌트 입니다.
 * @사용법 props로 안에 들어갈 텍스트를 넣어주시면 됩니다.
 * @ex 내편찾기, 할인행사, 베스트 상품 ...
 */
const Title = ({ name }) => {
  return (
    <div className="title_box">
      <img src="/images/point.png" className="point" alt="point" />
      <span className="Jua_title">{name}</span>
    </div>
  );
};

export default Title;
