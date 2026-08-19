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


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

import {
    Menubar,
    MenuRoot,
    MenuTrigger,
    MenuPortal,
    MenuPositioner,
    MenuPopup,
    MenuCheckboxItem,
    MenuSeparator,
} from '../component/Menubar.jsx';

import ClickAwayListener from '@mui/material/ClickAwayListener';


import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg width="100" height="100">
            <Box
                component="polygon"
                points="0,100 50,00, 100,100"
                sx={(theme) => ({
                    fill: theme.palette.common.white,
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                })}
            />
        </svg>
    </Paper>
);


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

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


    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangec = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenum = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosec = () => {
        setAnchorEl(null);
    };


    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [showSidebar, setShowSidebar] = React.useState(true);
    const [showToolbar, setShowToolbar] = React.useState(true);
    const [showStatusBar, setShowStatusBar] = React.useState(false);
    const [googleTasks, setGoogleTasks] = React.useState(true);
    const [mail, setMail] = React.useState(false);
    const [messages, setMessages] = React.useState(false);



    const handleClickk = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };


    const handleOpenn = () => setOpen(true);
    const handleCloseee = () => setOpen(false);

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


            <div className='my-4'>
                <h2>Accordian</h2>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel2-content`}
                        id={`${id}-panel2-header`}
                    >
                        <Typography component="span">Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel3-content`}
                        id={`${id}-panel3-header`}
                    >
                        <Typography component="span">Accordion Actions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>


            <Box sx={{ flexGrow: 1 }} className='my-4'>
                <h2>App Bar</h2>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChangec}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Photos
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenum}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClosec}
                                >
                                    <MenuItem onClick={handleClosec}>Profile</MenuItem>
                                    <MenuItem onClick={handleClosec}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>

            <h2 className='mt-4'>Card</h2>
            <Card sx={{ maxWidth: 345 }} className='my-4'>

                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src="src/Container/nat.jpg" alt="" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Beauty of Nature"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="src/Container/nat.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Nature is a beautiful gift that surrounds us with peace and freshness. The green trees, colorful flowers, flowing rivers, and gentle breeze make us feel calm and happy. Spending time in nature helps us forget our worries and enjoy the simple beauty of life. 🌿🌸✨
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <h2 className='mt-4'>Breadcrumbs with icons</h2>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Core
                    </Link>
                    <Typography
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Breadcrumb
                    </Typography>
                </Breadcrumbs>
            </div>

            <h2 className='mt-4'>Menubar</h2>
            <Menubar>
                <MenuRoot>
                    <MenuTrigger>View</MenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4} alignOffset={-2}>
                            <MenuPopup>
                                <MenuCheckboxItem
                                    checked={showSidebar}
                                    onCheckedChange={setShowSidebar}
                                >
                                    Show Sidebar
                                </MenuCheckboxItem>
                                <MenuCheckboxItem
                                    checked={showToolbar}
                                    onCheckedChange={setShowToolbar}
                                >
                                    Show Toolbar
                                </MenuCheckboxItem>
                                <MenuCheckboxItem
                                    checked={showStatusBar}
                                    onCheckedChange={setShowStatusBar}
                                >
                                    Show Status Bar
                                </MenuCheckboxItem>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </MenuRoot>

                <MenuRoot>
                    <MenuTrigger>Window</MenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4} alignOffset={-2}>
                            <MenuPopup>
                                <MenuItem hint="⌘M">Minimize</MenuItem>
                                <MenuItem>Zoom</MenuItem>
                                <MenuItem hint="⌃⌥F">Fill</MenuItem>
                                <MenuItem hint="⌃⌥C">Center</MenuItem>
                                <MenuSeparator />
                                <MenuItem>Bring All to Front</MenuItem>
                                <MenuSeparator />
                                <MenuCheckboxItem
                                    checked={googleTasks}
                                    onCheckedChange={setGoogleTasks}
                                >
                                    Google Tasks - Tasks
                                </MenuCheckboxItem>
                                <MenuCheckboxItem checked={mail} onCheckedChange={setMail}>
                                    Mail
                                </MenuCheckboxItem>
                                <MenuCheckboxItem checked={messages} onCheckedChange={setMessages}>
                                    Messages
                                </MenuCheckboxItem>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </MenuRoot>
            </Menubar>


            <h2 className='my-4'>Click-Away Listener</h2>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: 'relative' }}>
                    <button type="button" onClick={handleClickk}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Box sx={styles}>
                            Click me, I will stay visible until you click outside.
                        </Box>
                    ) : null}
                </Box>
            </ClickAwayListener>


            <h2 className='mt-4'>Basic modal</h2>
            <div className='my-4'>
                <Button onClick={handleOpenn}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleCloseee}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>


            <h2>Collapse Transition</h2>
            <Box sx={{ height: 300 }}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show"
                />
                <Box
                    sx={{
                        '& > :not(style)': {
                            display: 'flex',
                            justifyContent: 'space-around',
                            height: 120,
                            width: 250,
                        },
                    }}
                >
                    <div>
                        <Collapse in={checked}>{icon}</Collapse>
                        <Collapse in={checked} collapsedSize={40}>
                            {icon}
                        </Collapse>
                    </div>
                    <div>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked}>
                                {icon}
                            </Collapse>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                                {icon}
                            </Collapse>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

export default Muibasics;