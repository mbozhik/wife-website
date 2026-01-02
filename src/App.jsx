import './App.css'
import image from './assets/image.png'
import imageCopy from './assets/image copy.png'
import imageCopy2 from './assets/image copy 2.png'
import imageCopy3 from './assets/image copy 3.png'
import imageCopy4 from './assets/image copy 4.png'
import CircularText from './CircularText'

function App() {
  return (
    <>
      <header className="top-menu">
        <div className="menu-left">BestWife™</div>
        <div className="menu-right">Дипломированная жена №1</div>
      </header>
      <div className="content">
        <div className="hero-block">
          <div className="hero-text">
            <h1 className="hero-title">Лучшая жена</h1>
            <p className="hero-description">Премиальное качество. Забота. Ласка. Бесплатная доставка любви.</p>
            <div className="hero-days-container">
              <span className="hero-days-number">678</span>
              <span className="hero-days-text">дней</span>
            </div>
            <p className="hero-days-label">прошло с момента, как лучший муж активировал подписку</p>
            <a href="#testimonials" className="hero-button">Получить бессрочную подписку на любовь</a>
          </div>
          <div className="hero-image-wrapper">
            <img src={image} alt="Best Wife" className="hero-image" />
            <div className="circle-badge">
              <div className="circle-background"></div>
              <CircularText 
                text="Доступна только в единственном экземпляре     " 
                radius={190}
                fontSize={24}
                startAngle={320}
              />
            </div>
          </div>
        </div>
        <div className="cards-block">
          <div className="cards-row">
            <div className="card">
              <div className="card-line-1">Ласковость</div>
              <div className="card-line-2">UltraSoft 2.0</div>
              <div className="card-line-3">Гарантированно поднимает настроение. Работает даже ночью.</div>
            </div>
            <div className="card">
              <div className="card-line-1">Домашняя кухня</div>
              <div className="card-line-2">Premium Edition</div>
              <div className="card-line-3">Вкуснее, чем у блогеров. Подаётся тёплым, с любовью.</div>
            </div>
            <div className="card">
              <div className="card-line-1">Мудрость и поддержка</div>
              <div className="card-line-2">SmartCare</div>
              <div className="card-line-3">Всегда знает, что сказать. Поддерживает мягко, но уверенно.</div>
            </div>
          </div>
          <div className="cards-row">
            <div className="card">
              <div className="card-line-1">Утренний Ритуал</div>
              <div className="card-line-2">Boost</div>
              <div className="card-line-3">Гарантированное пробуждение с улыбкой на лице.</div>
            </div>
            <div className="card">
              <div className="card-line-1">Порядок без усилий</div>
              <div className="card-line-2">Lite</div>
              <div className="card-line-3">Появляется сама собой. Муж ничего не подозревает.</div>
            </div>
            <div className="card">
              <div className="card-line-1">Антистресс-защита</div>
              <div className="card-line-2">Silence Mode</div>
              <div className="card-line-3">Мгновенно улавливает напряжение и активирует режим снятия стресса.</div>
            </div>
          </div>
        </div>
        <div className="big-cards-block">
          <div className="big-card big-card-promo">
            <div className="big-card-content">
              <div className="big-card-text">
                <div className="big-card-line-1">Акция недели!</div>
                <div className="big-card-line-2">Дополнительное объятие в подарок</div>
                <div className="big-card-line-3">1+1=3</div>
              </div>
              <div className="big-card-image-wrapper">
                <img src={imageCopy} alt="Promo" className="big-card-image" />
              </div>
            </div>
          </div>
          <div className="big-card big-card-premium">
            <div className="big-card-content">
              <div className="big-card-text">
                <div className="big-card-premium-title">Счастье Навсегда</div>
                <div className="big-card-premium-header">Премиум-пакет *</div>
                <div className="big-card-premium-list">
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">1</div>
                    <div className="big-card-premium-text">Поддержка</div>
                  </div>
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">2</div>
                    <div className="big-card-premium-text">Любовь</div>
                  </div>
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">3</div>
                    <div className="big-card-premium-text">Юмор</div>
                  </div>
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">4</div>
                    <div className="big-card-premium-text">Уют</div>
                  </div>
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">5</div>
                    <div className="big-card-premium-text">Радость</div>
                  </div>
                  <div className="big-card-premium-item">
                    <div className="big-card-premium-number">6</div>
                    <div className="big-card-premium-text">Забота</div>
                  </div>
                </div>
                <div className="big-card-premium-footer">* Подписка бессрочная, автоматическое продление поцелуями.</div>
              </div>
              <div className="big-card-image-wrapper">
                <img src={imageCopy2} alt="Premium" className="big-card-image" />
              </div>
            </div>
          </div>
          <div className="big-card big-card-night">
            <div className="big-card-content">
              <div className="big-card-text">
                <div className="big-card-line-1">Ночная акция</div>
                <div className="big-card-night-line-3">Otaku Deluxe</div>
                <div className="big-card-night-line-4">Гарантирует уютный марафон аниме и игр вдвоём (пока я не усну)</div>
              </div>
              <div className="big-card-image-wrapper">
                <img src={imageCopy3} alt="Night" className="big-card-image" />
              </div>
            </div>
          </div>
        </div>
        <div id="testimonials" className="testimonials-block">
          <div className="testimonials-image-wrapper">
            <img src={imageCopy4} alt="Testimonials" className="testimonials-image" />
          </div>
          <div className="testimonials-content">
            <h2 className="testimonials-title">За нас говорят наши отзывы</h2>
            <div className="testimonials-cards">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-author">Муж</div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
                <div className="testimonial-text">"Лучшая модель, что существует на рынке, самые навороченные функции, самые лучшие технологии, внимание уделено, как и внешнему дизайну, так и внутреннему наполнению. Безумно люблю ❤️"</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-author">Мамочка</div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
                <div className="testimonial-text">"Лучшая невестка! Будьте счастливы мои дети! ❤️"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-left">© BestWife™</div>
        <div className="footer-right">
          <div className="footer-line-1">Сделано с любовью.</div>
          <div className="footer-line-2">Использовать осторожно: вызывает привыкание.</div>
        </div>
      </footer>
    </>
  )
}

export default App
