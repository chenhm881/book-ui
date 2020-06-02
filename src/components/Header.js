import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
        fontWeight: 700,
        fontVariantCaps: 'small-caps',
        fontFamily: '"Helvetica Neue", "Lucida Grande", "Segoe UI", Arial, Helvetica, Verdana, sans-serif;',
    },
}));

const Header = props => {
    const { className, ...rest} = props;
    const classes = useStyles();
    return (
        <div
            {...rest}
            className={classes.grow}>
            <AppBar position="static" style={{backgroundColor: '#4b6c9e'}}>
                <Toolbar>
                    <Grid container justify="flex-start">
                        <Typography className={classes.title} variant="h4" noWrap>
                             Tool
                        </Typography>
                        <div style={{paddingRight: "10px"}}></div>
                    </Grid>
                    <Grid container justify="flex-end">
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string
};


export default Header;
