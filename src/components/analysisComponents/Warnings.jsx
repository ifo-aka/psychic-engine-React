import ThreatAlert from "../DashBoardWighets/ThreatAlert";
const Warnings = () => {
    return <div className="warnings box">
        <ThreatAlert activeThreats={3} />
        <ThreatAlert activeThreats={1} />
        <ThreatAlert activeThreats={0} />
        <ThreatAlert activeThreats={5} />
    </div>
}
export default Warnings;