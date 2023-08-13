import satData from "./satData";

const Buttons = ({ displaySats, filterByType, setSat }) => {

  let buttonOne = displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
    )
  })

  return (
    <div className="Buttonz">
      { buttonOne }
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;