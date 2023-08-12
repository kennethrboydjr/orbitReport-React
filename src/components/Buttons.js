import satData from "./satData";

const Buttons = ({ displaySats, filterByType, setSat }) => {
  return (
    <div className="Buttonz">
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
      ))}
        <button onClick={() => setSat(satData)}>All Orbits</button>          
      </div>
    );
};

export default Buttons;