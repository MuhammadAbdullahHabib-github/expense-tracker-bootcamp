import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const AddTransection = () => {

    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    //Style for Form  
    const useStyles = makeStyles((theme) => ({
        margin: {
            marginTop: theme.spacing(2),
        },
        ali: {
            marginTop: theme.spacing(2),
            width: '45ch',
        }
    }))

    const classes = useStyles();
    return (
        <div>
            <h3>Add new transection</h3>
            <form>
                <TextField
                    className='input-text'
                    label="Text"
                    multiline
                    rowsMax={8}
                    variant="outlined"
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                />
                <h4 className='title'>(negative - expense , postive - income)</h4>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                </FormControl>
                <Button variant="contained" className={classes.ali} color="primary">
                    Add transection
                </Button>
            </form>
        </div>
    )
}

export default AddTransection
