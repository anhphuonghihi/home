import React from "react";

import styles from "./_TeamSection.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const TeamSection = () => {
  const data = [
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/dao_xuan_hoang_thumb.jpg",
      name: "Đào Xuân Hoàng",
      position: "Founder - CEO",
      content:
        "Là bố của 3 cô con gái và là người thắp lửa mang tiếng Anh đến mọi trẻ em cùng gần 300 cộng sự truyền lửa tại Monkey.",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/tran_thi_cam_ha_thumb.jpg",
      name: "Trần Thị Cẩm Hà",
      position: "Chief Financial Officer",
      content:
        "Đầu tư vào con người và thế hệ tương lai là sự đầu tư khôn ngoan nhất.",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/tran_cong_dao_thumb.jpg",
      name: "Trần Công Đạo",
      position: "Chief Technology Officer",
      content: "Hơn 10 năm kinh nghiệm trong ngành công nghệ phần mềm.",
    },
    {
      img: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/dang_le_linh_chi_thumb.png",
      name: "Đặng Lê Linh Chi",
      position: "Chief Experience Officer",
      content:
        "Mối quan hệ của doanh nghiệp với khách hàng cũng giống quan hệ giữa người với người, cốt lõi vẫn là 'Thành tâm' và 'Trao giá trị'_ST_.",
    },
  ];
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>Đội Ngũ Của Monkey</h2>
          <p>Monkey tự hào bởi đội ngũ thành viên tâm huyết</p>
        </div>
        <div className={cx("row")}>
          {data.map((item, index) => (
            <div className={cx("col")} key={index}>
              <div className={cx("img")}>
                <img src={item.img} alt="" />
              </div>
              <div className={cx("info")}>
                <div className={cx("name")}>{item.name}</div>
                <div className={cx("position")}>{item.position}</div>
                <div className={cx("content")}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
