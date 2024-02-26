"use client";

import React from "react";
import styles from "../css/award.module.scss";

function Awards() {
  return (
    <section className={styles.section} style={{ display: "flex" }}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src="https://www.hatch.com/-/media/Hatch-Corporate/Homepage/Campaign/CIM-2023AwardWinner.jpg"
          alt=""
        />
      </div>
      <div className={styles.sidebarBlock_richText}>
        <h3>
          <img
            alt="trophy"
            className={styles.cim_trophy}
            src="https://www.hatch.com/-/media/Hatch-Corporate/Homepage/Campaign/CIM_Safety_Award_Trophy_clear.png"
          />
          Nominate a Canadian Mining and Minerals Project online today!
        </h3>
        <p>
          <em>Nominations close December 11, 2023</em>
        </p>
        <p>
          The Hatch-CIM Mining and Minerals Project Development Safety Award
          recognizes project safety programs that achieve above-average
          statistics, feature rigorous training, and have regular auditing.
        </p>
        <br />
        <div id={styles.cta_more}>
          <a href="/About-Us/News-And-Media/2023/11/Nominations-open-2024-Hatch-CIM-safety-award">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Awards;

{
  /* <section class="section-main brand-gray-lightest">
    <div class="container"/>
        <div class="row"/>
            <div class="col-md-12"/>
                
<div class="row "/>
    <div class="col-md-4">
    	    <div class="sidebarBlock richText ">
        <img id="cim-img-01" alt="2023 CIM award winner" src="/-/media/Hatch-Corporate/Homepage/Campaign/CIM-2023AwardWinner.jpg" />


    </div>

    </div>
    <div class="col-md-8"/>
    	    <div class="sidebarBlock richText "/>
        <h3><img alt="trophy" id="cim-trophy" src="/-/media/Hatch-Corporate/Homepage/Campaign/CIM_Safety_Award_Trophy_clear.png" />Nominate a Canadian Mining and Minerals Project online today!</h3>
<p><em>Nominations close December 11, 2023</em></p>
<p>The Hatch-CIM Mining and Minerals Project Development Safety Award recognizes project safety programs that achieve above-average statistics, feature rigorous training, and have regular auditing.</p>
<div id="cta-more"><a href="/About-Us/News-And-Media/2023/11/Nominations-open-2024-Hatch-CIM-safety-award">Learn more</a></div>
<p>
</p>

<section/> */
}
