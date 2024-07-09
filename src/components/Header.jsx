

import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Header = () => {
    const [flag, setFlag] = useState(true);
    const navigate = useNavigate();
  return (
    <div>
    <div className="header">
        <Link onClick={() => setFlag(true)} to={'/'}>Logo</Link>

        <nav>
            <Link onClick={() => setFlag(true)} to={'/'}>home</Link>
            <Link onClick={() => setFlag(false)} to={'/page1'}>page 1</Link>
            <Link onClick={() => setFlag(false)} to={'/page2'}>page 2</Link>
        </nav>
        
    </div>
    
    <Outlet />
    {
        flag ? (
        <nav className="clock">
            <Link onClick={() => setFlag(true)} to={'/'}><h1>home</h1></Link>
            <Link onClick={() => setFlag(false)} to={'/page1'}><h1>page 1</h1></Link>
            <Link onClick={() => setFlag(false)} to={'/page2'}><h1>page 2</h1></Link>
        </nav>
        ) : navigate(0)
    }
    
    
    </div>
  )
}
export default Header