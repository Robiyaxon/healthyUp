import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./NumberSec.module.css";
import { instance } from './../../api/api';

export const NumberSec = () => {
  const [data, setData] = useState({})
  const { t } = useTranslation();

  useEffect(() => {
    instance.get("info_num/").then((response) => setData(response.data));
  }, [])
  return (
    <div className={styles.numberSec}>
      <div className={styles.numberSec__block}>
        <h1 className={styles.numberSec__title}>
          Healthy Up is a <strong>100% digital agency </strong> offering
          innovative solutions
        </h1>
        <div className={styles.counter_body}>
          <div className={styles.counter_block}>
            <CountUp start={1} end={data.bemorlar} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutPatient")}</h1>

          </div>
          <div className={styles.counter_block}>
            <CountUp start={0} end={data.dietolog} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutDietologist")}</h1>

          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={data.sportsmen} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutSportsman")}</h1>

          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={data.ayollar} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutWomen")}</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={data.erkaklar} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutMen")}</h1>
          </div>
        </div>
      </div>
      </div>
  );
};
