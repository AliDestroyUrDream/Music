import style from './Header.module.css';
import logo from '../../img/logo.png';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo1}>
        <img className={style.logo} src={logo} />
      </div>
      <nav className={style.Nav}>
        <div className={style.linkBox}>
          <a className={style.rel} href="/Body">
            главная
          </a>
          <a className={style.art} href="/art">
            Артисты
          </a>
          <a className={style.log} href="#">
            Log in
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
