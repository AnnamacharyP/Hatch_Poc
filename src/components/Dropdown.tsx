import React from "react";
import { data } from "./data";
import styles from "../css/dropdown.module.css";
function Dropdown({ activeId }: any) {
  const currentpage = data.find((item) => item.id === activeId);

  if (currentpage === undefined) {
    return;
  }

  if(!currentpage?.children){
    return;
  }
  
  return (
    <div className={styles.sub_container}>
      <div className={styles.center_dropdown}>
        <div className={styles.firstCl}>
          <p>{currentpage?.firstcl}</p>
        </div>
        <div className={styles.sub_links}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              marginBottom: "0.6rem",
            }}
          >
            {currentpage.name}
          </h3>
          {currentpage?.children?.map((item): any => {
            return (
              <li className={styles.sub_link}>
                <a>{item.name}</a>
              </li>
            );
          })}
        </div>
        <div className={styles.thirdcl}>
          <img src={currentpage?.thirdcl?.img} alt="" />
          <h5>{currentpage?.thirdcl?.content}</h5>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
