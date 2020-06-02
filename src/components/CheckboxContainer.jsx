import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import {withStyles} from "@material-ui/core";
import {
    putFieldValue,
} from "../actions/bookAction";

class CheckboxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    handleChange = name => event => {
        let {field, prefix} = this.props;
        let {checked} = event.target;
        this.setState({checked: checked});
        let value = checked ;
        if (field === "numRequested") {
            value = checked ? 3 : 1;
        } else {
            value = checked ? true: null;
        }
        let property = typeof prefix ==="object" ? Object.keys(prefix) : [];
        this.props.inputFieldValue(field, value)
    }

    render() {
        let {classes, label, field} = this.props;
        let {checked} = this.state;
        return (
            <React.Fragment>
                <Grid container className={classes.root} justify="space-between" style={{color: "#98a6ad"}}>
                    <Grid container justify="space-between">
                        <Grid container item xs={9} justify="flex-start">
                            {label}
                        </Grid>
                        <Grid container item xs={3} justify="flex-end">
                            <Checkbox
                                checked={checked}
                                onChange={this.handleChange(field)}
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const styles = (theme) => ({
    root: {
    }

});

const mapStateToProps = state => {
    const {id} = state.bookStore;
    return {
        id
    };
};


const mapDispatchToProps = dispatch => {
    return {
        inputFieldValue: (field, value) => {
            dispatch(putFieldValue(field, value));
        },
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer)
);
