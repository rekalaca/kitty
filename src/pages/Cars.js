import { useState } from "react";
import Adat from "./autok.json";

function Cars() {
    const [tipus, setTipus] = useState("");
    const [rendszam, setRendszam] = useState("");
    const [fogyasztas, setFogyasztas] = useState(0);
    const [adat, setAdat] = useState(null);

    const send = () => {
        setAdat(Adat.push({ tipus: tipus, rendszam: rendszam, fogyasztas: fogyasztas }));
    };

    Adat.sort(function (a, b) {
        return a.fogyasztas - b.fogyasztas;
    });


    return (
        <div id="cars">
            <h1>3. feladat</h1>
            <div id="egyfelad">
                Kérjük be autók típusát, rendszámát, és fogyasztását! Tároljuk egy tömbben az adatokat,
                majd írjuk ki egy táblázatba fogyasztás szerint rendezve!
            </div>
            <div id="beker">
                <label>Kérem az autó típusát: </label><input type="text" onChange={(e) => setTipus(e.target.value)}></input>
                <label>Kérem a rendszámot: </label><input type="text" onChange={(e) => setRendszam(e.target.value)}></input>
                <label>Kérem a fogyasztást: </label><input type="text" onChange={(e) => setFogyasztas(e.target.value)}></input>

                <br></br>
                <button onClick={send}>Megadom az autó adatait !</button>
            </div>
            <div id="kiir">
                <table>
                    <tbody>
                        <tr>
                            <th>Típus:</th>
                            <th>Rendszám:</th>
                            <th>Fogyasztás:</th>
                        </tr>

                        {Adat.map((item, index) => (
                            <tr key={index}>
                                <td>{item.tipus}</td>
                                <td>{item.rendszam}</td>
                                <td>{item.fogyasztas}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>



    )
}

export default Cars;