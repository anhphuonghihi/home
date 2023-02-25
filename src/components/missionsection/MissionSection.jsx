import React from "react";

import classNames from "classnames/bind";
import styles from "./_MissionSection.module.scss";
const cx = classNames.bind(styles);

const MissionSection = () => {
  const data = [
    {
      text: "Học tiếng Anh không nhất thiết phải có năng khiếu. Bạn nhỏ nào cũng có thể giỏi tiếng Anh nếu có công cụ học tập phù hợp, phương pháp đúng đắn và sự đồng hành của ba mẹ.",
    },
    {
      text: "Cho trẻ học tiếng Anh ba mẹ không cần phải tốn nhiều tiền. Mọi gia đình đều có khả năng chi trả cho con được học tiếng Anh.",
    },
    {
      text: "Không có công cụ, phương pháp, thầy cô hay trường lớp nào thay thế được sự đồng hành của ba mẹ trên hành trình học tập của con.",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>Sứ Mệnh Của Monkey</h2>
        </div>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col")}>
              <div className={cx("img")}>
                <img
                  src="https://monkeymedia.vcdn.com.vn/upload/web/img_default/monkey2.png"
                  alt=""
                />
              </div>
              <div className={cx("content")}>
                Monkey mang đến những sản phẩm giáo dục chất lượng cao, đạt tiêu
                chuẩn quốc tế đến cho mọi trẻ em - ở mọi vùng miền, điều kiện
                hoàn cảnh, với mức chi phí đa số các gia đình Việt Nam có khả
                năng chi trả.
              </div>
            </div>
            <div className={cx("col")}>
              <div className={cx("reason")}>
                <span>Tại Monkey, chúng tôi tin rằng:</span>
                {data.map((item, index) => (
                  <div className={cx("item")} key={index}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
