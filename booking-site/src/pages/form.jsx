import { useState } from "react";
import { InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import styles from "../styles/Form.module.css";

export default function Form({ spots }) {
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleChange = (event) => {
    setSelectedSpot(event.target.value);
    setSelectedArea(event.target.value);
  };

  return (
    <>
      <h1>Tickets</h1>
      <form>
        <FormControl variant="filled">
          <Card>
            <CardContent className={styles.formWrapper}>
              <TextField label="Date" />
              <TextField label="Tickets" />
              <TextField label="Ticket Type" />

              <InputLabel id="dropdown-label" label="spots" placeholder="form" style={{ position: "relative" }}>
                Choose spots
              </InputLabel>
              {/* onChange gør det samme som event.target.value */}
              <Select labelId="dropdown-label" id="dropdowm" label="Available spots" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                {spots.map((spot, availability) => (
                  <MenuItem key={availability} value={(spot.available, spot.area)}>
                    {spot.area + ": " + spot.available}
                  </MenuItem>
                ))}
              </Select>

              <h2>Other options</h2>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Green Option" />
                <FormControlLabel control={<Checkbox />} label="Tent setup" />
              </FormGroup>
            </CardContent>
          </Card>
        </FormControl>
      </form>
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/available-spots";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: { spots: data },
  };
}
