import React , {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import {GlobalContext} from '../context/GlobalState'

const AddTransection = () => {

    const [input, setInput] = React.useState({
        text:'',
        amount:0,
    });

    const {addTransection} = useContext(GlobalContext);
    
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

    // variable for style for material Ui
    const classes = useStyles();


    // Submit Function

  function handleSubmit(e){
        e.preventDefault();

        const data = {
            id: new Date().getTime(),
            text: input.text,
            amount: input.amount,
        }
        addTransection(data);
    }

    return (
        <div>
            <h3>Add new transection</h3>
                <TextField
                    className='input-text'
                    label="Text"
                    multiline
                    rowsMax={8}
                    variant="outlined"
                    value={input.text}
                    onChange={(e)=>{setInput({...input ,  text:e.target.value})}}
                />
                <h4 className='title'>(negative - expense , positive - income)</h4>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput 
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                        onChange={(e)=>{setInput({...input ,  amount:Number(e.target.value)})}}
                    />
                </FormControl>
                <Button variant="contained" onClick={(e) => handleSubmit(e)} className={classes.ali} color="primary">
                    Add transection
                </Button>
        </div>
    )
}

export default AddTransection
