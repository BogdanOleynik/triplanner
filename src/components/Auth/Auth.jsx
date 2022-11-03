import css from "./Auth.module.css"
import "./styles.css"
import React,{useState} from "react"

export default function Auth() {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const toogle1=()=>{
        setState1(!state1);
    }
    const toogle2=()=>{
        setState2(!state2);
    }
    return (
        <>
            <section>
                <div className="modal fade" id="authModal" tabIndex="-1" role="dialog" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" id={css.content}>
                            <div className={css.authreg}>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <button onClick={toogle1} className={"auth-tab " + (state1 ? "auth-tab-active": "auth-tab")} data-toggle="tab" href="#auth" role="tab" aria-controls="home" aria-selected="true">Авторизація</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={toogle2} className={"reg-tab " + (state2 ? "reg-tab-active": "reg-tab")} data-toggle="tab" href="#reg" role="tab" aria-controls="profile" aria-selected="false">Реєстрація</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-body auth-modal">
                                <p>Увійти через</p>
                                <ul className="social-log">
                                    <li><button className="google"></button></li>
                                    <li><button className="facebook"></button></li>
                                </ul>
                                <p>Або</p>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="auth" role="tabpanel" aria-labelledby="auth-tab">
                                    <form method="GET">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="authInputEmail" placeholder="Адреса електронної пошти" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="authInputPassword" placeholder="Пароль" />
                                            <a href='#' className="forgot">Забули пароль?</a>
                                        </div>

                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="authCheck" />
                                            <label className="form-check-label" htmlFor="authCheck" id="authCheckText"> Запам'ятати мене</label>
                                        </div>
                                        <button type="submit" className="btn-login">Увійти</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="reg-tab">
                                    <form method="GET">
                                        <div className="form-group">
                                            <input type="input" className="form-control" id="regInputName" placeholder="Ім'я" />
                                            <p className="atn">Заповнювати поле тільки латиницею</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="regInputEmail" placeholder="Адреса електронної пошти" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="regInputPassword" placeholder="Пароль" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="regInputPassword" placeholder="Повторити ароль" />
                                            <p className="atn">Пароль повинен містити від 8 до 20 символів,
                                                щонайменше одну заголовну літеру, одне число та
                                                один спеціальний символ</p>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="regCheck" />
                                            <label className="form-check-label" htmlFor="regCheck" id="regCheckText"> Натискаючи кнопку реєстрації, я приймаю
                                                умови <a href="#">Договору оферти</a> і не заперечую проти
                                                <a href="#">Обробки моїх персональних даних</a> і передачі їх
                                                третім особам (авіаперевізнику та ін.).</label>
                                        </div>
                                        <button type="submit" className="btn-reg">Створити аккаунт</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}