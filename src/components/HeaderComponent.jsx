import {Link, Outlet} from 'react-router-dom';
import { isAuthenticate } from '../authenticate';
import style from './webStyle.module.css';

const HeaderComponent = () =>{
    const auth = isAuthenticate;
    return (auth.id !== 1) || (!auth) ? (
        <div style={style.header}>
            afsafs
        </div>
    ) : (
        <div>
    </div>
    );
};

export default HeaderComponent;

