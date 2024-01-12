"use client";
import React, { useState } from "react";
import styles from "../css/navbar.module.css";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { data } from "./data";

function Navbar() {
  const [activeId, setActiveId]: any = useState(null);

  return (
    <>
      <div
        className={styles.nav_container}
        onMouseLeave={() => setActiveId(null)}
      >
        <div className={styles.nav_center}>
          <a className={styles.logo} href="/">
            <img
              src={
                "https://www.hatch.com/-/media/Images/Hatch/Corporate-Site/Global/Hatch-Corporate-Logo.png?h=25&iar=0&w=150&hash=EDA7129B328C56ABD6C814D899360135"
              }
              alt=""
            />
          </a>
          <div className={styles.links_container}>
            {data.map((item) => {
              return (
                <a
                  key={item.id}
                  className={styles.nav_link}
                  href="/"
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaSearch className={styles.icon} />
            <select className={styles.select}>
              <option value="english" style={{ color: "black" }}>
                english
              </option>
              <option value="telugu" style={{ color: "black" }}>
                telugu
              </option>
              <option value="hindi" style={{ color: "black" }}>
                hindi
              </option>
            </select>
          </div>
        </div>
        <Dropdown activeId={activeId} />
      </div>
    </>
  );
}

export default Navbar;
