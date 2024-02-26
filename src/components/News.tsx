"use client";

import React from "react";
import styles from "../css/news.module.scss";

const News = () => {
  return (
    <>
      <h3 className={styles.h3news}>
        <a href="https://www.hatch.com/About-Us/News-And-Media">Recent News</a>
      </h3>
      <div style={{ display: "flex", gap: "10rem" }}>
        <div className={styles.news_hub}>
          <div className={styles.news_card_contain}>
            <div className={styles.news_text}>
              <p>
                {" "}
                Reaffirming our dedication to sustainability through ISO
                14001:2015 recertification
              </p>
              <div className={styles.news_cta}>
                <a href="https://www.hatch.com/About-Us/News-And-Media/2024/01/Reaffirming-our-dedication-to-sustainability-through-ISO-14001-2015-recertification">
                  Read more
                </a>
              </div>
            </div>
            <div className={styles.news_card}>
              <img
                src="https://www.hatch.com/-/media/Hatch-Corporate/News/2024/ISO-14001_2015_ANAB_color.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.news_hub}>
          <div className={styles.news_card_contain}>
            <div className={styles.news_text}>
              Hatch Secures Platinum Elite Status in ReNew Canada&#39;s Top 100
              Infrastructure Projects
              <div className={styles.news_cta}>
                <a href="https://www.hatch.com/About-Us/News-And-Media/2024/01/Reaffirming-our-dedication-to-sustainability-through-ISO-14001-2015-recertification">
                  Read more
                </a>
              </div>
            </div>
            <div className={styles.news_card}>
              <img
                src="https://www.hatch.com/-/media/Hatch-Corporate/News/2024/HatchSecuresPlatinumEliteStatusinReNewCanadasTop100InfrastructureProjectsOG2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;

{
  /* <h3 class="h3news"><a href="https://www.hatch.com/About-Us/News-And-Media">Recent News</a></h3>
<div class="news-hub">
    <!-- *CARD 1* -->
<!-- Card 1 -->
    <div class="news-card-contain">
        <div class="news-text">
            Reaffirming our dedication to sustainability through ISO 14001:2015 recertification
            <div class="news-cta"><a href="https://www.hatch.com/About-Us/News-And-Media/2024/01/Reaffirming-our-dedication-to-sustainability-through-ISO-14001-2015-recertification">Read more</a></div>
        </div>
        <div class="news-card" style='background-image: url(/-/media/Hatch-Corporate/News/2024/ISO-14001_2015_ANAB_color.jpg);'>
        </div>
    </div>
<!-- Card 1 -->
    <div class="news-card-contain">
        <div class="news-text">
            Hatch Secures Platinum Elite Status in ReNew Canada&#39;s Top 100 Infrastructure Projects
            <div class="news-cta"><a href="https://www.hatch.com/About-Us/News-And-Media/2024/01/Hatch-Secures-Platinum-Elite-Status-in-ReNew-Canadas-Top-100-Infrastructure-Projects">Read more</a></div>
        </div>
        <div class="news-card" style='background-image: url(/-/media/Hatch-Corporate/News/2024/HatchSecuresPlatinumEliteStatusinReNewCanadasTop100InfrastructureProjectsOG2.png);'>
        </div>
    </div>

</div> */
}
