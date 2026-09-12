import { Sun, Bell, Moon } from 'lucide-react';
import { Thermometer } from "./components/thermometer";
import { useState, useEffect } from "react";

function Clock() {

    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    let thang = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    let ngay = now.getDate();
    let thu = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    let gio = now.getHours();
    let phut = now.getMinutes();
    let giay = now.getSeconds();

    gio = gio < 10 ? `0${gio}` : gio;
    phut = phut < 10 ? `0${phut}` : phut;

    let isDay;

    if (gio >= 6 && gio <= 17) {
        isDay = true;
        document.documentElement.style.setProperty('--text-color', '#FEFDAB');
        document.documentElement.style.setProperty('--shadow-text-color', 'rgba(221, 63, 15,0.8)');
    }
    else {
        isDay = false;
        document.documentElement.style.setProperty('--text-color', '#7AF7FD');
        document.documentElement.style.setProperty('--shadow-text-color', 'rgba(0,110,255,0.8)');
    }

    let buoi;

    if (gio >= 5 && gio < 12) {
        buoi = "Good Morning";
    }
    else if (gio >= 12 && gio < 18) {
        buoi = "Good Afternoon";
    }
    else {
        buoi = "Good Evening";
    }

    const hourAngle = (gio % 12) * 30 + phut * 0.5 - 90;
    const minuteAngle = phut * 6 + giay * 0.1 - 90;
    const secondAngle = giay * 6 - 90;


    return (
        <div className="outer-clock">
            <div className="clock">
                <div className="left-left">
                    <Bell />
                    <div>
                        {isDay ? <Sun /> : <Moon />}
                    </div>
                </div>
                <div className="left">
                    <div id="gio">{gio}</div>
                    :
                    <div id="phut">{phut}</div>
                </div>
                <div className="line-row"></div>
                <div className="clock-circle">
                    <div class="marker marker-1"><div class="marker-dot"></div></div>
                    <div class="marker marker-2"><div class="marker-dot"></div></div>
                    <div class="marker marker-3"><div class="marker-dot"></div></div>
                    <div class="marker marker-4"><div class="marker-dot"></div></div>
                    <div class="marker marker-5"><div class="marker-dot"></div></div>
                    <div class="marker marker-6"><div class="marker-dot"></div></div>
                    <div class="marker marker-7"><div class="marker-dot"></div></div>
                    <div class="marker marker-8"><div class="marker-dot"></div></div>
                    <div class="marker marker-9"><div class="marker-dot"></div></div>
                    <div class="marker marker-10"><div class="marker-dot"></div></div>
                    <div class="marker marker-11"><div class="marker-dot"></div></div>
                    <div class="marker marker-12"><div class="marker-dot"></div></div>

                    <div class="number number-1"><span class="number-1-text">1</span></div>
                    <div class="number number-2"><span class="number-2-text">2</span></div>
                    <div class="number number-3"><span class="number-3-text">3</span></div>
                    <div class="number number-4"><span class="number-4-text">4</span></div>
                    <div class="number number-5"><span class="number-5-text">5</span></div>
                    <div class="number number-6"><span class="number-6-text">6</span></div>
                    <div class="number number-7"><span class="number-7-text">7</span></div>
                    <div class="number number-8"><span class="number-8-text">8</span></div>
                    <div class="number number-9"><span class="number-9-text">9</span></div>
                    <div class="number number-10"><span class="number-10-text">10</span></div>
                    <div class="number number-11"><span class="number-11-text">11</span></div>
                    <div class="number number-12"><span class="number-12-text">12</span></div>
                    <div className="hand hour" style={{ transform: `rotate(${hourAngle}deg)` }} ></div>
                    <div className="hand minute" style={{ transform: `rotate(${minuteAngle}deg)` }} ></div>
                    <div className="hand second" style={{ transform: `rotate(${secondAngle}deg)` }} ></div>
                    <div className="center"></div>
                </div>
                <div className="right">
                    <div className="right-top">
                        <div id="thu">{thu}</div>
                        <div id="thang">{thang}</div>
                        <div id="ngay">{ngay}</div>
                    </div>
                    <div className="line-cl"></div>
                    <div id="buoi">
                        {buoi}
                    </div>
                    <div className="right-down">
                        <Thermometer />
                        <div className="temperature">100<sup>o</sup>C</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;