import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export default function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.png" alt="пользователь" />
          <div className={styles['name']}> Эдуард Хисматов </div>
          <div className={styles['email']}>E.Khismatov@yandex.ru</div>
        </div>
        <div className={styles['menu']}>
          <Link to="/" className={styles['link']}>
            <img src="/menu-icon.svg" alt="меню" />
            Menu
          </Link>
          <Link to="/cart" className={styles['link']}>
            <img src="/cart-icon.svg" alt="корзина" />
            Корзина
          </Link>
        </div>
        <Button className={styles['exit']}>
        <img src="/exit.svg" alt="выход" />Выход</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
