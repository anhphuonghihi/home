import React from "react";
import classNames from "classnames/bind";
import styles from "./_MainSection.module.scss";
const cx = classNames.bind(styles);
const MainSection = () => {
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col")}>
            <div className={cx("intro")}>
              <h1>Về Monkey</h1>
              <p>
                Monkey Việt Nam cung cấp bộ ứng dụng số 1 về tiếng Anh và giáo
                dục sớm cho trẻ 0 - 10 tuổi. Mỗi sản phẩm của Monkey gửi gắm
                tình yêu, định hướng, ước mơ và nỗ lực đồng hành của ba mẹ dành
                cho con trong những bước đi đầu tiên trên hành trình khám phá
                tri thức.
              </p>
            </div>
          </div>
          <div className={cx("col")}>
            <img
              data-src="https://monkeymedia.vcdn.com.vn/upload/web/img_default/img-intro.png"
              className=" lazyloaded"
              alt="Về Monkey"
              src="https://monkeymedia.vcdn.com.vn/upload/web/img_default/img-intro.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
