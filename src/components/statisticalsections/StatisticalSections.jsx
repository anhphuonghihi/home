import React from "react";

import classNames from "classnames/bind";
import { FaChevronRight } from "react-icons/fa";
import styles from "./_StatisticalSections.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const StatisticalSections = () => {
  const data = [
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/star2.png",
      title: "2014",
      text: "Monkey Junior - ứng dụng học tiếng Anh cho trẻ mới bắt đầu ra đời.",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/icon-top.svg",
      title: " TOP 1",
      text: "Ứng dụng tiên phong áp dụng các phương pháp Giáo dục sớm tại Việt Nam",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/person.svg",
      title: " 15 TRIỆU TRẺ EM",
      text: "Học tiếng Anh cùng Monkey trên toàn thế giới",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/path.svg",
      title: " 108 QUỐC GIA",
      text: "Và vùng lãnh thổ có trẻ em học tiếng Anh với Monkey",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          {data.map((item, index) => (
            <div className={cx("col")} key={index}>
              <div>
                <span>
                  <i style={{ backgroundImage: `url(${item.img})` }}></i>{" "}
                  {item.title}
                </span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className={cx("btn")}>
          Những Cột Mốc Tiêu Biểu <FaChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default StatisticalSections;
