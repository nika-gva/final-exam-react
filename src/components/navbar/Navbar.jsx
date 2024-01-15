import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [mode, setMode] = useState("light");

  const [menuOpen, setMenuOpen] = useState("false");

  const changeTheme = () => {
    const localData = localStorage.setItem("mode", mode === "light" ? "dark" : "light");
    setMode(localData)
  };

  useEffect(() => {
    const localData = localStorage.getItem("mode");
    document.querySelector("body").setAttribute("data-theme", mode);
    setMode(localData)
  }, [mode]);
  return (
    <header>
      <div className={styles.navbar}>
        <div className={`${styles.logo} font-bold text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px]`}><Link to={"/"}>Portfolio</Link></div>
        <nav style={{ height: menuOpen === "true" && "250px" }}>
          <ul>
            <Link to="/"><li>home</li></Link>
            <li><Link to="about">about</Link></li>
            <li><Link to={"/portfolio"}>portfolio</Link></li>
            <li><Link to="contacts">contacts</Link></li>
            <div onClick={changeTheme}>
              {mode}
              <div>
                <div className={styles.toggle} onClick={changeTheme}>
                  <div className={styles.bubble} theme={mode}>
                    {mode==="light"? <FaSun color="yellow"/>: <IoMoon color="#0B2447"/>}
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </nav>
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen(menuOpen === "false" ? "true" : "false")}
          clicked={menuOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
