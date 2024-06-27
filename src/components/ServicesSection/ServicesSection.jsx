import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import classes from './ServicesSection.module.css';

function ServicesSectionButton({ path }) {
  return (
    <div className={classes.servicesSectionContainer}>
      <HashLink to={path + '/#'} className={classes.servicesSectionButton}>
        Подробнее
      </HashLink>
    </div>
  );
}

ServicesSectionButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default function ServicesSection() {
  return (
    <div className={classes.mainServices} id="ServicesSection">
      <div className={classes.textOurServices}>Наши услуги</div>
      <div className={classes.OurServices}>
        <div className={classes.OurServicesFistrRow}>
          <div className={classes.OurServicesPsychologist}>
            <div className={classes.ServiceName}>Психолог</div>
            <div className={classes.DescriptionServices}>
              Поможет наладить <br />
              гармоничные <br />
              отношения в семье
            </div>
            <ServicesSectionButton path="/services/psychologist" />
          </div>
          <div className={classes.OurServicesLawyer}>
            <div className={classes.ServiceName}>Юрист</div>
            <div className={classes.DescriptionServices}>
              Проведет юридическую <br />
              косультацию по вопросам <br />
              семьи и детьства
            </div>
            <ServicesSectionButton path="/services/lawyer" />
          </div>
          <div className={classes.OurServicesMediator}>
            <div className={classes.ServiceName}>Медиатор</div>
            <div className={classes.DescriptionServices}>
              Поможет в <br />
              урегулировании <br />
              споров и конфликтов
            </div>
            <ServicesSectionButton path="/services/mediator" />
          </div>
        </div>
        <div className={classes.OurServicesSecondRow}>
          <div className={classes.OurServicesCustody}>
            <div className={classes.ServiceName}>Вопросы опеки</div>
            <div className={classes.DescriptionServices}>
              Специалисты проконсультируют <br />
              по вопросам опеки и <br />
              попечительства
            </div>
            <ServicesSectionButton path="/services/guardianship" />
          </div>
          <div className={classes.OurServicesConsultant}>
            <div className={classes.ServiceName}>Семейный консультант</div>
            <div className={classes.DescriptionServices}>
              Если вы оказались в трудной ситуации, <br />
              наши специалисты готовы <br />
              прийти на помощь
            </div>
            <ServicesSectionButton path="/services/family-consultant" />
          </div>
        </div>
        <div className={classes.OurServicesThirdRow}>
          <div className={classes.OurServicesLogopedist}>
            <div className={classes.ServiceName}>Логопед</div>
            <div className={classes.DescriptionServices}>
              Поможет устранит дефекты речи вашего <br />
              ребенка, и преодолеть стенсительность
            </div>
            <ServicesSectionButton path="/services/logopedist" />
          </div>
          <div className={classes.OurServicesClubs}>
            <div className={classes.ServiceName}>Подростковые клубы</div>
            <div className={classes.DescriptionServices}>
              Предлагаем разнообразные активности <br />и мероприятия для
              подростков
            </div>
            <ServicesSectionButton path="/services/teen-clubs" />
          </div>
        </div>
        <div className={classes.OurServicesFourthRow}>
          <div className={classes.OurServicesClubs2}>
            <div className={classes.ServiceName}>Детские клубы</div>
            <div className={classes.DescriptionServices}>
              Веселые и познавательные <br />
              занятия для детей разных <br />
              возрастов!
            </div>
            <ServicesSectionButton path="/services/children-clubs" />
          </div>
          <div className={classes.OurServicesClubs3}>
            <div className={classes.ServiceName}>Родительские клубы</div>
            <div className={classes.DescriptionServices}>
              Общение, поддержка и полезная информация <br />
              для родителей. Делимся опытом, учимся и <br />
              растем вместе!
            </div>
            <ServicesSectionButton path="/services/parent-clubs" />
          </div>
        </div>
      </div>
    </div>
  );
}
