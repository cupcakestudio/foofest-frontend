import {
  FormControl,
  Card,
  CardContent,
  TextField,
  FormGroup,
} from "@mui/material";
import { IMaskInput } from "react-imask";
import styles from "../styles/Form.module.css";

export default function FormPay({}) {
  const ref = useRef(null);
  const inputRef = useRef(null);
  return (
    <>
      <h1>Payment details</h1>
      <article>
        <h2>Overview</h2>
        <article className="TicketOverview_container">
          {/* Fetch data from tickets */}
          {/* date */}
          {/* number of tickets/ ticket type */}
        </article>
      </article>
      <form>
        <FormControl variant="outlined">
          <Card>
            <CardContent className={styles.formWrapper}>
              <h2>Personal data</h2>
              <TextField
                id="outlined-required"
                label="Name"
                placeholder={"fx: John Doe"}
              />
              <br></br>
              <TextField
                id="outlined-required"
                label="Email"
                placeholder={"fx: JohnDoe@gmail.com"}
              />
              <br></br>
              <TextField
                type="tel"
                id="outlined-required"
                label="Phone"
                maxLength="4"
                pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                placeholder={"fx: 11111111"}
                required
              />

              <h2>Payment</h2>
              <FormGroup variant="standard" id="paymentInfoGroup">
                <TextField
                  id="standard-card"
                  label="Credit Card No."
                  placeholder={"fx: XXXX-XXXX-XXXX-XXXX"}
                />
                <TextField type="month" />

                <IMaskInput
                  mask={Number}
                  radix="."
                  value="222"
                  unmask={true} // true|false|'typed'
                  ref={ref}
                  inputRef={inputRef} // access to nested input
                  // DO NOT USE onChange TO HANDLE CHANGES!
                  // USE onAccept INSTEAD
                  onAccept={
                    // depending on prop above first argument is
                    // `value` if `unmask=false`,
                    // `unmaskedValue` if `unmask=true`,
                    // `typedValue` if `unmask='typed'`
                    (value, mask) => console.log(value)
                  }
                  // ...and more mask props in a guide

                  // input props also available
                  placeholder="Enter number here"
                />
              </FormGroup>
            </CardContent>
          </Card>
        </FormControl>
      </form>
    </>
  );
}
