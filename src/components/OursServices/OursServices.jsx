import { Link } from 'react-router-dom';

import classes from './OursServices.module.css';

export default function OursServices() {
    return (
        <div className={classes.mainServices}>
            <div className={classes.textOurServices}>
                Наши услуги
            </div>
            <div className={classes.OurServices}>
                <div className={classes.OurServicesFistrRow}>
                    <div className={classes.OurServicesPsychologist}>
                        <div className={classes.NameServices}>
                            Психолог
                        </div>
                        <div className={classes.DescriptionServices}>
                            Поможет наладить <br/>
                            гармоничные <br/>
                            отношения в семье
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={classes.OurServicesLawyer}>
                        <div className={classes.NameServices}>
                            Юрист
                        </div>
                        <div className={classes.DescriptionServices}>
                            Проведет юридическую <br/>
                            косультацию по вопросам <br/>
                            семьи и детьства
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={classes.OurServicesMediator}>
                        <div className={classes.NameServices}>
                            Медиатор
                        </div>
                        <div className={classes.DescriptionServices}>
                            Поможет в <br/>
                            урегулировании <br/>
                            споров и конфликтов
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.OurServicesSecondRow}>
                    <div className={classes.OurServicesCustody}>
                        <div className={classes.NameServices}>
                            Вопросы опеки
                        </div>
                        <div className={classes.DescriptionServices}>
                            Специалисты проконсультируют <br/>
                            по вопросам опеки и <br/>
                            попечительства
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={classes.OurServicesConsultant}>
                        <div className={classes.NameServices}>
                            Семейный консультант 
                        </div>
                        <div className={classes.DescriptionServices}>
                            Если вы оказались в трудной ситуации, <br/>
                            наши специалисты готовы прийти на помощь
                        </div>
                        <div className={classes.Button2}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.OurServicesThirdRow}>
                    <div className={classes.OurServicesLogopedist}>
                        <div className={classes.NameServices}>
                            Логопед
                        </div>
                        <div className={classes.DescriptionServices}>
                            Поможет устранит дефекты речи вашего <br/>
                            ребенка, и преодолеть стенсительность
                        </div>
                        <div className={classes.Button2}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={classes.OurServicesClubs}>
                        <div className={classes.NameServices}>
                            Подростковые клубы  
                        </div>
                        <div className={classes.DescriptionServices}>
                            Предлагаем разнообразные активности <br/>
                            и мероприятия для подростков
                        </div>
                        <div className={classes.Button2}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.OurServicesFourthRow}>
                    <div className={classes.OurServicesClubs2}>
                        <div className={classes.NameServices}>
                            Детские клубы
                        </div>
                        <div className={classes.DescriptionServices}>
                            Веселые и познавательные <br/>
                            занятия для детей разных <br/>
                            возрастов!
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={classes.OurServicesClubs3}>
                        <div className={classes.NameServices}>
                            Родительские клубы
                        </div>
                        <div className={classes.DescriptionServices}>
                            Общение, поддержка и полезная информация  <br/>
                            для родителей. Делимся опытом, учимся и <br/>
                            растем вместе!
                        </div>
                        <div className={classes.Button}>
                            <button  className={classes.DetaileServices}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}