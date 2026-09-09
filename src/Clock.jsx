import { Sun, Bell, Moon } from 'lucide-react';
import { Thermometer } from "./components/thermometer";


function Clock() {
    let thang = new Date().toLocaleDateString('en-US', {month: 'short'}).toUpperCase();
    let ngay = new Date().getDate();
    let thu = new Date().toLocaleDateString('en-US', {weekday: 'short'}).toUpperCase();
    let gio = new Date().getHours();
    let phut = new Date().getMinutes();

    gio = gio < 10 ? `0${gio}` : gio;
    phut = phut < 10 ? `0${phut}` : phut;

    let isDay;

    if ( gio >= 6 && gio <= 17) {
        isDay = true;
        document.documentElement.style.setProperty('--text-color', '#fffdae');
        document.documentElement.style.setProperty('--shadow-text-color', 'rgba(221, 63, 15,0.6)');
    }
    else {
        isDay = false;
        document.documentElement.style.setProperty('--text-color', '#8bf7ff');
        document.documentElement.style.setProperty('--shadow-text-color', 'rgba(0,110,255,0.6)');
    }

    let buoi;

    if ( gio >= 5 && gio < 12 ) {
        buoi = "Good Morning";
    }
    else if ( gio >= 12 && gio < 18 ) {
        buoi = "Good Afternoon";
    }
    else {
        buoi = "Good Evening";
    }
    

    return (
        <div className="outer-clock">
            <div className="clock">
                <div className="left-left">
                    <Bell/>
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