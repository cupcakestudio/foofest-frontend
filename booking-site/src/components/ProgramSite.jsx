import { useContext } from "react";
import { ProgramContext } from "../contexts/programContext";

function ProgramSite() {
  const artistName = useContext(ProgramContext);
  console.log(artistName);
  return (
    <div>
      <span>This is a band: {artistName}</span>
    </div>
  );
}
export default ProgramSite;
