import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import {
  DesktopOutlined,
  LaptopOutlined,
  SnippetsOutlined,
  RadarChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const data = [
  { icon: <DesktopOutlined />, title: 'Стрічка', url: '/search' },
  { icon: <LaptopOutlined />, title: 'В кіно', url: '/active' },
  { icon: <SnippetsOutlined />, title: 'Підібрати', url: '/' },
  { icon: <RadarChartOutlined />, title: 'Серіали', url: '/series' },
  { icon: <UserOutlined />, title: 'Профіль', url: '/user' },
];

const Navigation = ({}) => {
  return (
    <nav className={style.footer}>
      <ul className={style.navigation}>
        {data.map((el, i) => {
          return (
            <NavLink className={style.link} to={el.url} key={i}>
              <div className={style.icon}>{el.icon}</div>
              <p className={style.desc}>{el.title}</p>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
