import {
    AppBar,
    createStyles,
    fade,
    IconButton,
    InputBase,
    MenuItem,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import {Link, useHistory} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: '#000',
            fontWeight: 'bold',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: '#000',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '30ch',
                '&:focus': {
                    width: '40ch',
                },
            },
        },
    }));


const Header = () => {
    let history = useHistory();
    const [searchValue, setSearchValue] = useState('');

    const handleClick = (ev: any) => {
        if (ev.key === 'Enter') {
            setSearchValue('')
            ev.preventDefault();
            history.push("/search?q=" + searchValue);
        }
    };

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position='fixed' style={{backgroundColor: '#FFF'}}>
            <Toolbar>
                <Link to={"/"}>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        aria-label='menu'
                    >
                        <FastfoodIcon/>
                    </IconButton>
                </Link>
                <MenuItem>
                    <Typography variant='h5' className={classes.title}>
                        FOOD RECIPES
                    </Typography>
                </MenuItem>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                        onKeyPress={handleClick}
                        onChange={handleChange}
                        value={searchValue}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>;
}

export default Header;
