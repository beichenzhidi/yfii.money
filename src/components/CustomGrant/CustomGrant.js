// import _ from 'lodash';
import React from "react";
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import ElementResizeDetector from "element-resize-detector";
import { useTranslation } from 'react-i18next';

import ImgUnisave from "assets/img/carousel/unisave-new.png";
import YFIIMoon from "assets/img/carousel/yfii-moon.png";
import bgi from "assets/img/home/bgi@1x.png";
import man from "assets/img/home/man@2x.png";
import title from "assets/img/home/title@2x.png";
import YFIIstatue from "assets/img/home/YFIIstatue@1x.png";
// defi产品Image
import sakeimg from "assets/img/home/roundsakeswap@1x.png";
import ethimg from "assets/img/home/roundeth@1x.png";
import apollobscimg from "assets/img/home/roundapollobsc@1x.png";
import ysdimg from "assets/img/home/roundysd@1x.png";
import unisaveimg from "assets/img/home/roundunisave@1x.png";
import hecoimg from "assets/img/home/roundheco@1x.png";
import round from "assets/img/home/round@1x.png";

// community mine image
import boringdao from "assets/img/home/boringdao@1x.png";
import orbits from "assets/img/home/orbits@1x.png";
import golff from "assets/img/home/golff@1x.png";
import wepiggy from "assets/img/home/wepiggy@1x.png";
import qian_protocol from "assets/img/home/qian_protocol@1x.png";

// community load image
import fortube from "assets/img/home/fortube@1x.png";
import filda from "assets/img/home/filda@1x.png";
import flux from "assets/img/home/flux@1x.png";
import wepiggyload from "assets/img/home/wepiggy@1x.png";

// adavantage image
import adasecurity from "assets/img/home/adasecurity@1x.png";
import adahighprofit from "assets/img/home/adahighprofit@1x.png";
import adastrongmanage from "assets/img/home/adastrongmanage@1x.png";

// eco image
import ecowepiggy from "assets/img/home/wepiggy@1x.png";
import ecofinnexus from "assets/img/home/finnexus@1x.png";
import ecograpfarmer from "assets/img/home/grapfarmer@1x.png";
import ecosfinance from "assets/img/home/ecos.finance@1x.png";
import ecoysd from "assets/img/home/ecoysd@1x.png";

// partner image
import near from "assets/img/home/near@1x.png";
import oasis from "assets/img/home/oasis@1x.png";
import silfinance from "assets/img/home/silfinance@1x.png";
import binancechain from "assets/img/home/binancechain@1x.png";
import chainlink from "assets/img/home/chainlink@1x.png";

import huobiECOChain from "assets/img/home/huobiecochain@1x.png";
import acala from "assets/img/home/acala@1x.png";
import polkadot from "assets/img/home/polkadot@1x.png";
import moonswap from "assets/img/home/moonswap@1x.png";
import nest from "assets/img/home/nest@1x.png";

import fiargame from "assets/img/home/fiargame@1x.png";
import mercurity from "assets/img/home/mercurity@1x.png";
import bifrost from "assets/img/home/bifrost@1x.png";
import video from "assets/img/home/video.png";

import styles from "assets/jss/material-kit-pro-react/components/customGrantStyle.js";

const useStyles = makeStyles(styles);

function useResize() {
  const reSizer = React.useRef(
    ElementResizeDetector({
      strategy: "scroll", // <- For ultra performance.
    })
  );

  const refDom = React.useRef(null);

  const [rect, setRect] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  React.useEffect(
    () => () => {
      if (reSizer.current && reSizer.current.uninstall && refDom.current) {
        reSizer.current.uninstall(refDom.current);
      }

      refDom.current = undefined;
      reSizer.current = undefined;
    },
    []
  );

  const ref = React.useCallback((dom) => {
    if (reSizer.current && reSizer.current.listenTo && !refDom.current && dom) {
      refDom.current = dom;
      reSizer.current.listenTo(refDom.current, (element) =>
        setRect(element.getBoundingClientRect())
      );
    }
  }, []);

  return [ref, rect];
}

function CustomGrant(props) {
  // const {  } = props;

  const { t } = useTranslation();
  const classes = useStyles();

  const [ref, rect] = useResize();

  const { width } = rect;
  const height = width / (1200 / 300);

  return (
    <>
    {/* defi advantage */}
    <div className={classes.producttitle}>
      <div className={classes.producttitletext}>
      {t('Grant-Main-Title')}
      </div>
      </div>
    <div ref={ref} className={classes.container}>
          <div className={classes.productadvantage}>
        <ul>
          <li>
          <img src={adasecurity}/>
          <p>{t('Grant-Project-Value')}</p>
          {/* <span>所有正式上线的DFI.Money产品将在至少一家权威安全机构完成审核后才会发布。任何新业务类型都将优先考虑用户资产安全。</span> */}
          {/* en:https://github.com/sec-bit/yfii-security-review/blob/master/200803-YFII-Token-Pool1-Pool2.en.md */}
          <span>{t('Home-clickview')}
          <a target="_blank" href={t('Home-dfisecurityadvantage')}> {t('Grant-Project-Value')}</a>
          </span>
          </li>
          <li>
          <img src={adahighprofit}/>
          <p>{t('Grant-Token-Publicity')}</p>
          {/* <span>除了基本的长期挖矿策略，BSC和Heco链上的机枪池还为用户提供了中短期超高收益策略。创新性的使用可插拔技术，帮助开发者快速切换策略，为用户捕获头矿高额收益。</span> */}
          <span>{t('Home-clickview')}<a target="_blank" href="https://stats.dfi.money/"> {t('Grant-Token-Publicity')}</a></span>
          </li>
          <li>
          <img src={adastrongmanage}/>
          <p>{t('Grant-Donation-Process')}</p>
          {/* <span>积极的开发、营销和运营团队，可靠的资助委员会，持续的行动。从项目挖掘开始，DFI.Money核心开发团队对协议治理有了更积极、更负责任的考虑，它将与社区共同构建独特的DAO价值和科学的治理框架。</span> */}
          <span>{t('Home-clickview')}<a target="_blank" href="https://gov.dfi.money/t/topic/780"> {t('Grant-Donation-Process')}</a></span>
            
          </li>
        </ul>
      </div>
      </div>
    </>
  );
  
  
}

export default React.memo(CustomGrant);