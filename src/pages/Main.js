import logo from '../utils/img/logo.svg'
import './Main.css'

const Main = () => {
  return (
    <div>
      <section className='main'>
        <div className='main__title-content slide-in-left'>
          <img src={logo} alt='Logo' className='logo' />
          <div className='main__titles'>
            <h1>
              YourScalp.bot
            </h1>
            <p className='main__subtitle'>Зарабатывайте прямо сейчас</p>
          </div>
        </div>
        <h2 className='main__headline fade-in'>Сделайте вложение сейчас<br />и получите дополнительную выгоду!</h2>
        <div className='price slide-in-fwd-center' id="price">
          <h3 className='title'>Тарифы</h3>
          <div className='price__wrapper'>
            <div className='price-card'>
              <h4 className="price-card__title">Стандарт</h4>
              <p className='price-card__text'>
                Автономный бот, который оперирует вашими средствами в «эконом» варианте. Идеально подходит для клиентов, которые будут довольны стабильным пассивным доходом.
              </p>
              <p className='price-card__text_big'>
                Доходность в месяц – 30%<br />
                Комисcия команды – 5%
              </p>
              <p className='price-card__price'>200 USDT</p>
              <button type="button" className="btn btn-primary">Купить</button>
            </div>
            <div className='price-card'>
              <h4 className="price-card__title">Премиум</h4>
              <p className='price-card__text'>
                Автономный бот, пользующийся так называемыми «вилками», активный на нескольких мировых биржах одновременно, что позволяет преобразовывать ваши средства еще более эффективно.
              </p>
              <p className='price-card__text_big'>Доходность в месяц – 50%<br />
                Комисcия команды – 7%
              </p>

              <p className='price-card__price'>350 USDT</p>
              <button type="button" className="btn btn-primary">Купить</button>
            </div>
            <div className='price-card'>
              <h4 className="price-card__title">Премиум+</h4>
              <p className='price-card__text'>
                Наш сотрудник - профессионал в мире криптовалюты, оперирующий вашими средствами, использующий инсайды из всех возможных источников. Риск потери меньше, а его действия являются эффективнее случаев, в которых этим занимается искусственный интеллект.
              </p>
              <p className='price-card__text_big'>Доходность в месяц – 70%<br />
                Комисcия команды – 10%</p>
              <p className='price-card__price'>550 USDT</p>
              <button type="button" className="btn btn-primary">Купить</button>
            </div>
          </div>
        </div>
      </section>
      <section className='about' id="about">
        <h3 className='title'>В чем заключается наш заработок?</h3>
        <div className='about__wrapper'>
          <div className='about__item'>
            <p className='about__number'>1</p>
            <p className='about__text'>Для того, чтобы начать работу с нами, в первую очередь необходимо оплатить наши услуги в независимости от тарифа.</p>
          </div>
          <div className='about__item'>
            <p className='about__number'>2</p>
            <p className='about__text'>При выводе средств, наша система будет взымать определенный % комиссии от средств, которые вы захотите вывести в зависимости от тарифа.</p>
          </div>
        </div>
      </section>
      <section id="faq">
        <h3 className='title'>FAQ или «Вопрос-ответ»</h3>
        <div className="accordion" id="accordion-faq">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Как начать работу с нами?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                Приобрести услуги бота и пополнить его счет желаемой суммой. Минимальная ставка 10 USDT.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Как работает бот?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                Бот владеет крипто-кошельками на нескольких биржах, что расширяет его возможности. Принцип работы заключается в сделках с минимальным риском и мгновенной продажей, сразу после покупки. В небольших объёмах, но эффективно и стабильно.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Как вывести средства с нашего сервиса?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                Вывод возможен через 15 дней после приобретения услуг в окошке «Вывод средств».
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Почему вывод возможен только через 15 дней?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                Вывод возможен через 15 дней или более, так как этого количества времени хватает для завершения цикла работы, а отрезок времени в менее 15 дней может привести к незначительной позитивной динамике, либо же совсем в минус. Лишь после 15 дней бот выходит на верный, стабильный результат.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Возвращается ли оплата услуг бота при выводе средств?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                Нет, поэтому мы рекомендуем не покидать нас прежде, чем ваши вложения будут оправданы.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Как отслеживать динамику работы бота?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordion-faq">
              <div className="accordion-body">
                В вашем личном кабинете ежедневно будут афишироваться результаты работы за прошедший день.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main