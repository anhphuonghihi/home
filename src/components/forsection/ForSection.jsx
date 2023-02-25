import React from "react";

import classNames from "classnames/bind";
import styles from "./_ForSection.module.scss";
const cx = classNames.bind(styles);

const ForSection = () => {
  const data = [
    {
      text: "Ứng dụng học tập của Monkey dành cho tất cả các bạn nhỏ từ 0 - 10 tuổi và ba mẹ muốn giúp con học tiếng Anh từ sớm nhưng không biết bắt đầu từ đâu.",
    },
    {
      text: "Ba mẹ muốn giúp con học giỏi tiếng Anh trước tuổi lên 10, thành thạo 4 kĩ năng tiếng Anh: nghe, nói, đọc, viết.",
    },
    {
      text: "Ba mẹ muốn giúp con phát triển toàn diện cả tư duy và ngôn ngữ (tiếng Anh, tiếng Việt hoặc đa ngôn ngữ).",
    },
    {
      text: "Cho những ba mẹ khác nhau về hoàn cảnh, điều kiện kinh tế, trình độ tiếng Anh,... - nhưng đều có chung mong muốn giúp con học tập đúng đắn, khoa học để hướng tới một tương lai tốt đẹp hơn",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col")}>
            <h2 className={cx("text")}>Monkey Dành Cho Ai?</h2>
            <div>
              {data.map((item, index) => (
                <div className={cx("li")} key={index}>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("col")}>
            <div className={cx("img")}>
              <img
                src="https://monkeymedia.vcdn.com.vn/upload/web/img_default/img-mk1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSection;
