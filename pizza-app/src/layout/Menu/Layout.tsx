import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

import cn from 'classnames';

export default function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img
            className={styles['avatar']}
            src="/avatar.png"
            alt="пользователь"
          />
          <div className={styles['name']}> Эдуард Хисматов </div>
          <div className={styles['email']}>E.Khismatov@yandex.ru</div>
        </div>
        <div className={styles['menu']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/menu-icon.svg" alt="меню" />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/cart-icon.svg" alt="корзина" />
            Корзина
          </NavLink>
        </div>
        <Button className={styles['exit']}>
          <img src="/exit.svg" alt="выход" />
          Выход
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
