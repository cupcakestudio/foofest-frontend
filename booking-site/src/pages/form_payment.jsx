import { InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import styles from "../styles/Form.module.css";

export default function FormPay({}) {
  return (
    <>
      <h1>Payment details</h1>
      <article>
        <h2>Overview</h2>
        {/* Fetch data from tickets */}
        {/* date */}
        {/* number of tickets/ ticket type */}
      </article>
      <form>
        <FormControl variant="filled">
          <Card>
            <CardContent className={styles.formWrapper}>
              <h2>Personal data</h2>
              <TextField label="Name" />
              <TextField label="E-mail" />
              <TextField label="Phone" />

              <h2>Payment</h2>
              <FormGroup></FormGroup>
            </CardContent>
          </Card>
        </FormControl>
      </form>
    </>
  );
}
