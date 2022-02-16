import { useState, useEffect } from "react";
import Adat from "./derekharomszog.json";

function Beker() {
    const [adat, setAdat] = useState({});
    const [aoldal, setAoldal] = useState(0);
    const [boldal, setBoldal] = useState(0);
    const [coldal, setColdal] = useState(0);

    const send = () => {
        setAdat(Adat.push({ aoldal: aoldal, boldal: boldal, coldal: coldal }));
    };

    
    const a = parseInt(aoldal);
    const b = parseInt(boldal);
    const c = parseInt(coldal);

 function kerulet(a, b, c) {
        const ker = (a + b + c);
        return ker;
    }

    function terulet(a, b, c) {
        const s = (a + b + c) / 2;
        const ter = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return ter;
    }

    return (
        

        <div id="haromszog">
            <h1>Normál Háromszögek</h1>
            <label>
                a oldal:
                <input type="number" onChange={(e) => (setAoldal(parseFloat(e.target.value)))} />
            </label>

            <label>
                b oldal:
                <input type="number" onChange={(e) => (setBoldal(parseFloat(e.target.value)))} />
            </label>

            <label>
                c oldal:
                <input type="number" onChange={(e) => (setColdal(parseFloat(e.target.value)))} />
            </label>
            <button onClick={send}>Beküld</button>

            
            <table id="harom">
                <tbody>
                    <tr>
                        <th>A oldal:</th>
                        <th>B oldal:</th>
                        <th>C oldal:</th>
                        <th>Kerület:</th>
                        <th>Terület:</th>
                    </tr>
                    {Adat.map((elem, index) => (<tr key={index}><td>{elem.aoldal} cm</td><td>{elem.boldal} cm</td><td>{elem.coldal} cm</td><td>{kerulet(elem.aoldal, elem.boldal, elem.coldal).toFixed(2)} cm</td><td>{terulet(elem.aoldal, elem.boldal, elem.coldal).toFixed(2)} cm<sup>2</sup></td></tr>))}
                </tbody>
            </table>

        </div>


    )

}

export default Beker;