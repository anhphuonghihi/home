import React from "react";

import classNames from "classnames/bind";
import styles from "./_QuestionsSection.module.scss";
const cx = classNames.bind(styles);
const QuestionsSection = () => {
  const data = [
    {
      content:
        "Hướng dẫn ba mẹ cách cài đặt các tính năng trong ứng dụng học Monkey Stories",
    },
    {
      content: "Làm thế nào kích hoạt gói học đã đăng ký?",
    },
    {
      content:
        "Hướng dẫn ba mẹ cài đặt các chương trình Monkey trên thiết bị di động",
    },
    {
      content:
        "Hướng dẫn ba mẹ cài đặt ứng dụng Monkey Stories trên Máy tính/Laptop",
    },
    {
      content:
        "Hướng dẫn ba mẹ cài đặt ứng dụng Monkey Junior trên Máy tính/Laptop",
    },
    {
      content: "Hướng dẫn tải học liệu trên ứng dụng Monkey Stories",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("box")}>
          <h3>Câu hỏi thường gặp</h3>
          <div className={cx("list")}>
            {data.map((item, index) => (
              <div className={cx("item")} key={index}>
                <span>{index + 1}. </span>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
