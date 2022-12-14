import css from './Trip.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import settingsWhite from '../../images/settingsWhite.svg';
import transport_blue from '../../images/transport_blue.svg';
import bell_white from '../../images/bell_white.svg';
import flixbus from '../../images/flixbus.svg';
import Katowice from '../../images/Katowice.jpg';
import Sadowa from '../../images/Sadowa.svg';
import rjx from '../../images/rjx.jpg';
import easyjet from '../../images/easyjet.jpg';
import pink from '../../images/pink.svg';
import { Header } from '../Header/Header';

export function Trip() {
  const location = useLocation();
  return (
    <>
      <section className={css.hero}>
        <Header />
        <div>
          <div>
            <ul className={css.ticket__options}>
              <Link
                to={`/cabinet/settings`}
                state={{ from: location }}
              >
                <li className={css.option}>
                  <img
                    src={settingsWhite}
                    alt=""
                    width="32px"
                    height="32px"
                    className={css.option__icon}
                  />
                </li>
              </Link>
              <Link to={`/cabinet/options`} state={{ from: location }}>
                <li className={css.option__transport}>
                  <img
                    src={transport_blue}
                    alt=""
                    width="40px"
                    height="40px"
                    className={css.option__icon__transport}
                  />
                </li>
              </Link>
              <Link
                to={`/cabinet/notifications`}
                state={{ from: location }}
              >
                <li className={css.option__notification}>
                  <img
                    src={bell_white}
                    alt=""
                    width="28px"
                    height="28px"
                    className={css.option__icon__bell}
                  />
                </li>
              </Link>
            </ul>
          </div>
          <div className={css.ticket}>
            <div className={css.details__thumb}>
              <ul className={css.details}>
                <li className={css.travel}>
                  ?????????????? #1
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_pencil}
                  >
                    <use href={sprite + '#icon-pencil'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </ul>

              <div className={css.ticket__thumb}>
                <ul className={css.price__options}>
                  <li className={css.cheapest}>??????????????????????</li>
                  <li className={css.time}>~ 37 EUR</li>
                  <li className={css.best__price}>~ 79 EUR</li>
                </ul>
                <ul className={css.routes}>
                  <li className={css.route}>
                    <svg
                      width="25px"
                      height="22px"
                      aria-label=""
                      className={css.icon__bus}
                    >
                      <use href={sprite + '#icon__bus__yellow'}></use>
                    </svg>
                    ?????????????????????? ???????????? ??????????????????????
                  </li>
                  <li className={css.border}></li>
                  <li className={css.direction}>
                    <svg
                      width="11px"
                      height="13px"
                      aria-label=""
                      className={css.direction__svg}
                    >
                      <use href={sprite + '#icon-edit_location'}></use>
                    </svg>
                    ??????. ????????????????, ????????????????, ?????????????????????? ??????????????, 58000
                    <div className={css.route__details}>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-trip'}></use>
                          </svg>
                          ~ 635 ????
                        </li>
                        <li className={css.route__distance}>
                          <svg
                            width="16px"
                            height="16px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-clock'}></use>
                          </svg>
                          ~ 15 ??????
                        </li>
                      </ul>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-hand'}></use>
                          </svg>
                          ~ 11 EUR
                        </li>
                        <li className={css.route__distance}>
                          <img
                            src={flixbus}
                            alt=""
                            width="15px"
                            height="15px"
                            className={css.distance__icon}
                          />
                          FlixBus
                        </li>
                      </ul>

                      <button type="button" className={css.ticket__btn}>
                        ???????????? ????????????*
                      </button>
                    </div>
                  </li>
                </ul>
                <ul className={css.routes}>
                  <li className={css.route}>
                    <svg
                      width="25px"
                      height="22px"
                      aria-label=""
                      className={css.icon__bus}
                    >
                      <use href={sprite + '#icon__bus__yellow'}></use>
                    </svg>
                    ???????????????????? ????????????????
                  </li>
                  <li className={css.border}></li>
                  <li className={css.direction}>
                    <svg
                      width="11px"
                      height="13px"
                      aria-label=""
                      className={css.direction__svg}
                    >
                      <use href={sprite + '#icon-edit_location'}></use>
                    </svg>
                    ????. S??dowa 5, 40-000 Katowice, ????????????
                    <div className={css.route__details}>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-trip'}></use>
                          </svg>
                          ~ 3 ????
                        </li>
                        <li className={css.route__distance}>
                          <svg
                            width="16px"
                            height="16px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-clock'}></use>
                          </svg>
                          ~ 7 ????
                        </li>
                      </ul>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-hand'}></use>
                          </svg>
                          ~ 2 EUR
                        </li>
                        <li className={css.route__distance}>
                          <img
                            src={Katowice}
                            alt=""
                            width="15px"
                            height="15px"
                            className={css.distance__icon}
                          />
                          KatowicePasTrans
                        </li>
                      </ul>

                      <button type="button" className={css.ticket__btn}>
                        ???????????? ????????????*
                      </button>
                    </div>
                  </li>
                </ul>
                <ul className={css.routes}>
                  <li className={css.route}>
                    <svg
                      width="25px"
                      height="22px"
                      aria-label=""
                      className={css.icon__bus}
                    >
                      <use href={sprite + '#icon-railway-pink'}></use>
                    </svg>
                    Katowice Sadowa
                  </li>
                  <li className={css.border__pink}></li>
                  <li className={css.direction}>
                    <svg
                      width="11px"
                      height="13px"
                      aria-label=""
                      className={css.direction__svg}
                    >
                      <use href={sprite + '#icon-edit_location'}></use>
                    </svg>
                    ????. S??dowa 5, 40-000 Katowice, ????????????
                    <div className={css.route__details}>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-trip'}></use>
                          </svg>
                          ~ 345 ????
                        </li>
                        <li className={css.route__distance}>
                          <svg
                            width="16px"
                            height="16px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-clock'}></use>
                          </svg>
                          ~ 9 ??????
                        </li>
                      </ul>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-hand'}></use>
                          </svg>
                          ~ 15 EUR
                        </li>
                        <li className={css.route__distance}>
                          <img
                            src={Sadowa}
                            alt=""
                            width="15px"
                            height="15px"
                            className={css.distance__icon}
                          />
                          RegionJet 209
                        </li>
                      </ul>

                      <button type="button" className={css.ticket__btn__pink}>
                        ???????????? ????????????*
                      </button>
                    </div>
                  </li>
                </ul>
                <ul className={css.routes}>
                  <li className={css.route}>
                    <svg
                      width="25px"
                      height="22px"
                      aria-label=""
                      className={css.icon__bus}
                    >
                      <use href={sprite + '#icon-railway-pink'}></use>
                    </svg>
                    Wien
                  </li>
                  <li className={css.border__pink}></li>
                  <li className={css.direction}>
                    <svg
                      width="11px"
                      height="13px"
                      aria-label=""
                      className={css.direction__svg}
                    >
                      <use href={sprite + '#icon-edit_location'}></use>
                    </svg>
                    Vienna, International Busterminal (VIB)
                    <div className={css.route__details}>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-trip'}></use>
                          </svg>
                          ~ 670 ????
                        </li>
                        <li className={css.route__distance}>
                          <svg
                            width="16px"
                            height="16px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-clock'}></use>
                          </svg>
                          ~ 12 ??????
                        </li>
                      </ul>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-hand'}></use>
                          </svg>
                          ~ 31 EUR
                        </li>
                        <li className={css.route__distance}>
                          <img
                            src={rjx}
                            alt=""
                            width="15px"
                            height="15px"
                            className={css.distance__icon}
                          />
                          RJX
                        </li>
                      </ul>

                      <button type="button" className={css.ticket__btn__pink}>
                        ???????????? ????????????*
                      </button>
                    </div>
                  </li>
                </ul>
                <ul className={css.routes}>
                  <li className={css.route}>
                    <svg
                      width="25px"
                      height="22px"
                      aria-label=""
                      className={css.icon__bus}
                    >
                      <use href={sprite + '#icon-flight-blue'}></use>
                    </svg>
                    Zurich (ZRH)
                  </li>
                  <li className={css.border__blue}></li>
                  <li className={css.direction}>
                    <svg
                      width="11px"
                      height="13px"
                      aria-label=""
                      className={css.direction__svg}
                    >
                      <use href={sprite + '#icon-edit_location'}></use>
                    </svg>
                    ??????. ????????????????, ????????????????, ?????????????????????? ??????????????, 58000
                    <div className={css.route__details}>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-trip'}></use>
                          </svg>
                          ~ 208 ????
                        </li>
                        <li className={css.route__distance}>
                          <svg
                            width="16px"
                            height="16px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-clock'}></use>
                          </svg>
                          ~ 20 ????
                        </li>
                      </ul>
                      <ul className={css.route__distances}>
                        <li className={css.route__distance}>
                          <svg
                            width="18px"
                            height="18px"
                            aria-label=""
                            className={css.distance__icon}
                          >
                            <use href={sprite + '#icon-hand'}></use>
                          </svg>
                          ~ 31 EUR
                        </li>
                        <li className={css.route__distance}>
                          <img
                            src={easyjet}
                            alt=""
                            width="15px"
                            height="15px"
                            className={css.distance__icon}
                          />
                          EasyJet
                        </li>
                      </ul>

                      <button type="button" className={css.ticket__btn__blue}>
                        ???????????? ????????????*
                      </button>
                    </div>
                  </li>
                </ul>
                <p className={css.final__destination}>
                  <img
                    src={pink}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.final__destination__icon}
                  />
                  Lausanne (QLS)
                </p>
                <p className={css.notification}>
                  <svg
                    width="20px"
                    height="20px"
                    aria-label=""
                    className={css.notification__icon}
                  >
                    <use href={sprite + '#icon-attention-round'}></use>
                  </svg>
                  * ???????????? ?? ?????????????????? ????????????, ?????????????? ?????????????? ???????????????????????? ????
                  ?????????? ??????????????????????. ????????????: ???????????????? ????????????
                </p>
                <p className={css.notification}>
                  <svg
                    width="25px"
                    height="25px"
                    aria-label=""
                    className={css.notification__icon}
                  >
                    <use href={sprite + '#icon-attention-triangle'}></use>
                  </svg>
                  ???????????? ?????????? ???????????????? ?????????????????? ???????????? ???????????????? ?????????? ??
                  ?????????????? ?????????????????????? ?????????????? ???????? ?????????????? ???????????? ????????! ????????????
                  ????????????: dpsu.gov.ua
                </p>
                <div>
                  <ul className={css.ticket__buttons}>
                    <li>
                      <button type="button" className={css.download__btn}>
                        <svg
                          width="16px"
                          height="16px"
                          aria-label=""
                          className={css.button__icon}
                        >
                          <use href={sprite + '#icon-pdf'}></use>
                        </svg>
                        <span className={css.button__text}>
                          ?????????????????????? PDF
                        </span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className={css.save__btn}>
                        <svg
                          width="16px"
                          height="16px"
                          aria-label=""
                          className={css.button__icon}
                        >
                          <use href={sprite + '#icon-saved'}></use>
                        </svg>
                        <span className={css.button__text}>
                          ?????????????????? ????????????????
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to={`/`} state={{ from: location }}>
                <button type="button" className={css.button__search}>
                  <svg
                    width="20px"
                    height="20px"
                    aria-label=""
                    className={css.button_icon}
                  >
                    <use href={sprite + '#icon-search'}></use>
                  </svg>
                  <span className={css.search__text}>???? ???????????????? ????????????</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
