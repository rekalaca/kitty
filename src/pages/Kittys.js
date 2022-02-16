import './App1.css';
import { useState } from "react";
import Kiir from './Kiir'

function Kittys() {
    const [szam, setSzam] = useState(null);
    const [nev, setNev] = useState(null);
    const [adat, setAdat] = useState({});

    function Parose(szam) {
        this.szam = szam;
        this.sorozat = function () {
            const row = [];
            for (var i = 1; i <= szam; i++) {
                if (szam != 0 && i % 2 == 0) {
                    row.push(<p class="paros" key={i}>{nev}</p>);
                }
                else {
                    row.push(<p class="paratlan" key={i}>{nev}</p>);
                }
            }
            return row;
        }

    }

    const [tomb, setTomb] = useState([]);

    return (
        <div id="kittys">
            <h1>1. feladat</h1>
            <div id="egyfelad">
                Kérjük be egy számot és egy nevet, majd írjuk ki a nevet annyiszor, mint a bekért szám! A
                kiírást két különböző színnel végezzük (páros, páratlan eltérő színnel)
            </div>
            <div id="beker">
                <label>Kérek egy számot: </label><input type="number" onChange={(e) => setSzam(e.target.value)}></input>
                <label>Kérek egy nevet: </label><input type="text" onChange={(e) => setNev(e.target.value)}></input>
                <button onClick={() => {
                    setTomb(tomb.concat(new Parose(szam)));
                }}>Kiiratom !</button>
            </div>
            <table>
                <tbody>
                    <tr>

                        {
                            tomb.map((item, index) => <Kiir parose={item} key={index} />)
                        }

                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Kittys;