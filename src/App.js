import './App.css';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <header className='slide-in-top'>
        <menu>
          <li><a href='#' className='menu__link menu__link_active'>Главная</a></li>
          <li><a href='#price' className='menu__link'>Услуги</a></li>
          <li><a href='#about' className='menu__link'>О нас </a></li>
          <li><a href='#faq' className='menu__link'>FAQ</a></li>
        </menu>
        <div>
          <button type='button' className='btn btn-sign'>Войти</button>
          <button type='button' className='btn btn-outline-primary'>Зарегистрироваться</button>
        </div>
      </header>
      <main>
        <Main />
      </main>
      <footer>
        2022 © YourScalp.bot
      </footer>
    </div>
  );
}

export default App;
