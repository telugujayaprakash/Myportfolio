import React, { useState, useEffect } from "react";
import "./Components.css";

export default function Home() {
    const style1 = { '--i': 1 };
    const style2 = { '--i': 2 };
    const style3 = { '--i': 3 };
    const style4 = { '--i': 4 };
    const style5 = { '--i': 5 };
    const style6 = { '--i': 6 };

    const [menuActive, setMenuActive] = useState(false);

    const handleToggleClick = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="bg-gray-900 min-h-screen ">
            <div className="flex items-center justify-between py-5 md:block">
                <h2 className="ml-5 text-4xl text-white">Jp</h2>
            </div>
            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-8xl text-white font-extrabold mx-auto md:text-15xl">
                            Jayaprakash
                        </h2>
                        <div className={`menu ${menuActive ? 'active' : ''}`}>
                            <div className="toggle" onClick={handleToggleClick}>
                                <ion-icon name="link-outline" />
                            </div>
                            <li style={style1}>
                                <a href="#"><ion-icon name="logo-github" /></a>
                            </li>
                            <li style={style2}>
                                <a href="#"><ion-icon name="logo-instagram" /></a>
                            </li>
                            <li style={style3}>
                                <a href="#"><ion-icon name="logo-facebook" /></a>
                            </li>
                            <li style={style4}>
                                <a href="#"><ion-icon name="logo-linkedin" /></a>
                            </li>
                            <li style={style5}>
                                <a href="#"><ion-icon name="logo-whatsapp" /></a>
                            </li>
                            <li style={style6}>
                                <a href="#"><ion-icon name="mail-unread-outline" /></a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    );
}
