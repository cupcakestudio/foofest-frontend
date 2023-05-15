import { useContext } from "react";
import { ProgramContext } from "../contexts/programContext";

function ProgramSite() {
  const artistName = useContext(ProgramContext);
  console.log(bandData);
  return (
    <div>
      <span>This is a band: </span>
    </div>
  );
}
export default ProgramSite;
