import {Link} from "react-router-dom";
import {MenuItems} from "../styling/MenuItems";
import React from "react";


export const Header:React.FC<{ context: any }> = ({context}) => (
  <header className="container menu--justify top-right">
    <div>
      <h1><img src={process.env.PUBLIC_URL + "/img/favicon-32x32.png"} alt="Solent University Logo" />Solent Student Social</h1>
    </div>
    <nav className="container menu_justify">
      <MenuItems>
        <ul>
          <li>
            <Link className={context.activeMenu === 'news' ? 'active' : ''} to="/news">News</Link>
          </li>
          <li> <Link className={context.activeMenu === 'posts' ? 'active' : ''} to="/posts">Posts</Link></li>
          <li> <Link className={context.activeMenu === 'career' ? 'active' : ''} to="/career">Career</Link></li>
          <li> <Link className={context.activeMenu === 'messages' ? 'active' : ''} to="/messages">Messages</Link></li>
          {!context.user && (<li><Link className={context.activeMenu === 'login' ? 'active' : ''} to="/login">Login</Link></li>)}
          {context.user && (<li><Link className={context.activeMenu === 'login' ? 'active' : ''} to="/login">Logout</Link></li>)}
        </ul>
      </MenuItems>
    </nav>
  </header>
);
