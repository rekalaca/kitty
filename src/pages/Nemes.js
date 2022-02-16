import { useState } from "react";
import Adat from "./nemek.json";

function Nemes() {
    const [nev, setNev] = useState(null);
    const [nem, setNem] = useState(null);
    const [adat, setAdat] = useState({});

    const send = () => {
        setAdat(Adat.push({ nev: nev, nem: nem }));
    };

    function torol(i) {
        setAdat(Adat.splice(i, 1))
    };

    function nemesi(item) {
        if (item.nem == "lany")
            return "csaj";
        else {
            return "srac";
        }
    }

    return (
        <div id="nemes">
            <h1>2. feladat</h1>
            <div id="egyfelad">
                Kérjük be egy személy nevét és nemét. A nevet adjuk hozzá egy tömbhöz! A tömb elemeit
                írjuk ki egy táblázatba, nemenként más színnel!
            </div>
            <div id="beker">
                <label>Kérek egy nevet: </label><input type="text" onChange={(e) => setNev(e.target.value)}></input>
                <label>  Kérem a nemét:</label><select id="nem" type="text" onChange={(e) => (setNem(e.target.value))}>
                    <option value="">Válassz!</option>
                    <option value="lany">Lány</option>
                    <option value="fiu">Fiú</option>
                </select>
                <br></br>
                <button onClick={send}>Feliratkozom !</button>
            </div>
            <div id="kiir">
                <table>
                    <tbody>
                        <tr>
                            <th>Névsor:</th>
                        </tr>

                        {Adat.map((item, index) => (
                            <tr onClick={() => torol(index)} key={index} className={nemesi(item) === "csaj" ? "magenta" : "blue"}>
                                <td>{item.nev}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default Nemes;