import React from "react";

import classNames from "classnames/bind";
import styles from "./_OfficeSection.module.scss";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
const cx = classNames.bind(styles);

const OfficeSection = () => {
  const data = [
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/van-phong-ha-noi.jpg",
      title: "Hanoi, Vietnam",
      adress:
        "2nd Floor, FS Building, TNR Gold Season Shopping Center, 47 Nguyen Tuan, Thanh Xuan Trung Ward, Thanh Xuan District, Hanoi City",
      phone: " Hotline: 1900 636052",
      email: "",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/van-phong-ha-noi.jpg",
      title: "Delaware, The United States",
      adress: "8 The Green, Suite A, Dover, Delaware 19901, USA",
      phone: "",
      email: "support.global@monkeyenglish.net",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>Văn Phòng Của Monkey</h2>
        </div>
        <div className={cx("list")}>
          {data.map((item, index) => (
            <div className={cx("office")} key={index}>
              <div className={cx("office_img")}>
                <img alt="" src={item.img} />
              </div>
              <div className={cx("office_content")}>
                <div className={cx("title")}>{item.title}</div>
                <div className={cx("address")}>
                  <i></i>
                  <p>{item.adress}</p>
                </div>
                {item.phone && (
                  <Link to="tel+:1900636052" className={cx("phone")}>
                    <i></i>
                    <p>{item.phone}</p>
                  </Link>
                )}
                {item.email && (
                  <Link to="tel+:1900636052" className={cx("email")}>
                    <FaEnvelope />
                    <p>{item.email}</p>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
