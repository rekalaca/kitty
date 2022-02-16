
function Negyzetre() {

    const negyzetreEmel = (szam) => {
        return szam();
    };

    return (
        <div id="tablas">
            <h2>Négyzetre emelve...</h2>
            <table>
                <tbody>
            <tr><th>Szám:</th><th>Négyzete:</th></tr>
            {
                negyzetreEmel(() => {
                    const row = [];
                    const n = 18;
                    for (var i = 1; i <= n; i++) {
                        row.push(<tr><td key={i}>{i}</td><td>{i * i}</td></tr>);
                    }
                    return row;
                })
            }
            </tbody>
            </table>
        </div>

    );
}

export default Negyzetre;