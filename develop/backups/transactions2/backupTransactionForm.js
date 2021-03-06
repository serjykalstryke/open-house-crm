//* Dependencies
import React, { useState, useContext, useEffect } from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* State context
import TransactionContext from "../../context/transactions/transactionContext";
import { Divider } from "@material-ui/core";

//* Defines styles to be served via makeStyles MUI hook
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//* Exported component
const TransactionForm = ({ handleClose }) => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes context state
  const transactionContext = useContext(TransactionContext);
  const {
    addTransaction,
    updateTransaction,
    clearCurrent,
    current,
  } = transactionContext;

  useEffect(() => {
    if (current !== null) {
      setTransaction(current);
    } else {
      setTransaction({
        trxName: "",
        type: "",
        cost: "",
        revenue: "",
        dateOpened: "",
        dateClosed: "",
        expectedCloseDate: "",
        note: "",
      });
    }
  }, [transactionContext, current]);

  const [transaction, setTransaction] = useState({
    trxName: "",
    type: "",
    cost: "",
    revenue: "",
    dateOpened: "",
    dateClosed: "",
    expectedCloseDate: "",
    note: "",
  });

  const {
    trxName,
    type,
    cost,
    revenue,
    dateOpened,
    dateClosed,
    expectedCloseDate,
    note,
  } = transaction;

  const onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTransaction(transaction);
    } else {
      updateTransaction(transaction);
    }

    setTransaction({
      trxName: "",
      type: "",
      cost: "",
      revenue: "",
      dateOpened: "",
      dateClosed: "",
      expectedCloseDate: "",
      note: "",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  //* Returns JSX to DOM
  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {current ? "Edit Transaction" : "Add Transaction"}
      </Typography>

      <Box style={{ textAlign: "center" }}>
        {/* These TextFields are repetitive and could be componentized then mapped across the transaction object to reduce line count */}
        <TextField
          variant="standard"
          required={true}
          type="text"
          id="standard-required"
          label="Name"
          size="small"
          helperText="Required"
          name="trxName"
          value={trxName}
          onChange={onChange}
        />

        <TextField
          required={true}
          variant="standard"
          label="Transaction Type"
          size="small"
          name="type"
          select
          helperText="Required"
          value={type}
          onChange={onChange}
        >
          <MenuItem key="listing" value="Listing">
            Listing
          </MenuItem>
          <MenuItem key="sale" value="Sale">
            Sale
          </MenuItem>
          <MenuItem key="referral" value="Referral">
            Referral
          </MenuItem>
        </TextField>

        <TextField
          variant="standard"
          label="Cost"
          type="number"
          size="small"
          name="cost"
          value={cost}
          onChange={onChange}
        />

        <TextField
          variant="standard"
          label="Revenue"
          type="number"
          size="small"
          name="revenue"
          value={revenue}
          onChange={onChange}
        />

        <InputLabel>Date Opened</InputLabel>
        <TextField
          variant="standard"
          type="date"
          size="small"
          name="dateOpened"
          value={dateOpened}
          onChange={onChange}
        />

        <InputLabel>Expected Closing Date</InputLabel>
        <TextField
          variant="standard"
          type="date"
          size="small"
          name="expectedCloseDate"
          value={expectedCloseDate}
          onChange={onChange}
        />

        <InputLabel>Date Closed</InputLabel>
        <TextField
          variant="standard"
          type="date"
          size="small"
          name="dateClosed"
          value={dateClosed}
          onChange={onChange}
        />

        <Divider />
        <TextField
          variant="standard"
          label="Notes"
          id="standard-textarea"
          type="text"
          name="note"
          rows={4}
          multiline
          value={note}
          onChange={onChange}
        />
      </Box>
      <Button
        variant="outlined"
        type="submit"
        color="primary"
        fullWidth={true}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={handleClose}
      >
        Submit
      </Button>
      {current && (
        <Button
          variant="outlined"
          fullWidth={true}
          type="submit"
          color="secondary"
          style={{ marginBottom: "1rem" }}
          onClick={clearAll}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

export default TransactionForm;
