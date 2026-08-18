import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import NumberField from '../component/NumberField.jsx';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import FormHelperText from '@mui/material/FormHelperText';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';



import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';

import Avatar from '@mui/material/Avatar'

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';



import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem disablePadding key={email}>
                        <ListItemButton onClick={() => handleListItemClick(email)}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <img src="src/Container/nat.jpg" alt="" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={email} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton
                        autoFocus
                        onClick={() => handleListItemClick('addAccount')}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add account" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

function not(a, b) {
    return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
    return a.filter((value) => b.includes(value));
}

const CustomList = React.forwardRef(function CustomList(props, ref) {
    const { items, checked, handleToggle } = props;

    return (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <MenuList dense component="div" role="list" ref={ref}>
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <MenuItem
                            component="div"
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                    slotProps={{
                                        input: { 'aria-labelledby': labelId },
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Paper>
    );
});

CustomList.propTypes = {
    checked: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleToggle: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
};


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

function Muibasics(props) {

    const id = React.useId(); ///////////////////////
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const [hover, setHover] = React.useState(-1);


    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
        setHelperText('Choose wisely');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [valuee, setValuee] = React.useState(30);

    const handleChangeee = (event, newValue) => {
        setValuee(newValue);
    };


    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const leftListRef = React.useRef(null);
    const rightListRef = React.useRef(null);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
        setChecked(not(checked, left));
        rightListRef.current?.focus();
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
        rightListRef.current?.focus();
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
        leftListRef.current?.focus();
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
        setChecked(not(checked, right));
        leftListRef.current?.focus();
    };


    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClosee = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className='container my-4'>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Songs" />}
            />

            <Stack direction="column" spacing={2} className='my-4' sx={{ width: '300px' }}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>


            <FormGroup className='my-4'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>

            <Box sx={{ display: 'grid', gap: 4 }}>
                <NumberField label="Number Field" min={10} max={40} />
                <NumberField label="Number Field (Small)" size="small" />
                <NumberField
                    label="Number Field with Error"
                    min={10}
                    max={40}
                    defaultValue={100}
                    size="small"
                    error
                />
            </Box>

            <FormControl className='my-4'>
                <FormLabel id={`${id}-label`}>Gender</FormLabel>
                <RadioGroup
                    aria-labelledby={`${id}-label`}
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>


            <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} error={error} variant="standard">
                    <FormLabel id={`${id}-label`}>(Quizz)Please choose correct answer…</FormLabel>
                    <RadioGroup
                        aria-labelledby={`${id}-label`}
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="best" control={<Radio />} label="The best!" />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                        Check Answer
                    </Button>
                </FormControl>
            </form>

            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>


            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>



            <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                    <VolumeDown />
                    <Slider aria-label="Volume" value={valuee} onChange={handleChangeee} />
                    <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            </Box>

            <div>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} defaultChecked />
                <Switch {...label} />
            </div>


            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>


            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <CustomList
                    ref={leftListRef}
                    items={left}
                    checked={checked}
                    handleToggle={handleToggle}
                />
                <Stack>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        ≫
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        ≪
                    </Button>
                </Stack>
                <CustomList
                    ref={rightListRef}
                    items={right}
                    checked={checked}
                    handleToggle={handleToggle}
                />
            </Grid>


            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="src/Container/nature.jpg" />
                <Avatar alt="Travis Howard" src="src/Container/img.webp" />
                <Avatar alt="Cindy Baker" src="src/Container/nat.jpg" />
            </Stack>


            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>

            <div>
                <Typography variant="subtitle1" component="div">
                    Selected: {selectedValue}
                </Typography>
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                </Button>
                <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClosee}
                />
            </div>


            <div className='my-4'>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </div>
        </div>
    );
}

export default Muibasics;