import harm from "./derekharomszog.json";

function Derharomszog() {

    function kerulet(aoldal, boldal, coldal){
        let kerulet = aoldal+boldal+coldal;
        return kerulet;
    }

    function terulet(aoldal, boldal) {
        let terulet = (aoldal*boldal)/2;
        return terulet;
    }


    return (
        <div id="fo">
            <h1>Derékszögű Háromszögek</h1>
            <table id="harom">
                <tbody>
                    <tr>
                        <th>A oldal:</th>
                        <th>B oldal:</th>
                        <th>C oldal:</th>
                        <th>Kerület:</th>
                        <th>Terület:</th>
                    </tr>
                    {harm.map((elem, index) => (<tr key={index}><td>{elem.aoldal} cm</td><td>{elem.boldal} cm</td><td>{elem.coldal} cm</td><td>{kerulet(elem.aoldal,elem.boldal,elem.coldal).toFixed(2)} cm</td><td>{terulet(elem.aoldal,elem.boldal).toFixed(2)} cm<sup>2</sup></td></tr>))}
                </tbody>
            </table>
            


        </div>



    )




}

export default Derharomszog;