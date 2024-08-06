import React, { useState } from "react";
import "./Components.css";

export default function Home() {
    const style1 = { '--i': 1 };
    const style2 = { '--i': 2 };
    const style4 = { '--i': 3 };
    const style6 = { '--i': 4 };

    const [menuActive, setMenuActive] = useState(false);

    const handleToggleClick = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <section className="skills-section relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20 md:py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl text-white font-extrabold mx-auto sm:text-6xl md:text-8xl name">
                            Jayaprakash
                        </h2>
                        <div className={`menu ${menuActive ? 'active' : ''}`}>
                            <div className="toggle" title="Click" onClick={handleToggleClick}>
                                <ion-icon name="link-outline" />
                            </div>
                            <li style={style1}>
                                <a href="https://github.com/telugujayaprakash" target="_blank" rel="noopener noreferrer" title="Github"><ion-icon name="logo-github" /></a>
                            </li>
                            <li style={style2}>
                                <a href="https://www.instagram.com/jayaprakash_317/" target="_blank" rel="noopener noreferrer" title="Instagram"><ion-icon name="logo-instagram" /></a>
                            </li>
                            <li style={style4}>
                                <a href="https://www.linkedin.com/in/telugujayaprakash" target="_blank" rel="noopener noreferrer" title="LinkedIn"><ion-icon name="logo-linkedin" /></a>
                            </li>
                            <li style={style6}>
                                <a href="mailto:jayaprakash96030@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail"><ion-icon name="mail-unread-outline" /></a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    );
}
