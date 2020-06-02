import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
    putFieldValue,
} from "../actions/bookAction";
import connect from "react-redux/es/connect/connect";

class TextFieldContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
        };
    }

    handleChange = name => event => {
        let {field, prefix} = this.props;
        let value = event.target.value;
        this.setState({value: value});

        let property = prefix && typeof prefix ==="object" ? Object.keys(prefix) : [];
        this.props.inputFieldValue(field, value);
    }

    render() {
        let {classes, label, field} = this.props;
        let {value} = this.state;
        return (
            <React.Fragment>
                <Grid container className={classes.root} justify="space-between">
                    <Grid container item xs={6} justify="flex-start" className={classes.textStyle}>
                        {label}
                    </Grid>
                    <Grid container item xs={6} justify="flex-end">
                        <TextField
                            id={field}
                            className={classes.textField}
                            value={value}
                            onChange={this.handleChange(field)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                classes: {
                                    input: classes.inputStyle
                                }
                            }}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const styles = (theme) => ({
    root: {
      paddingBottom: "1px"
    },
    textStyle: {
        paddingTop: "3px",
    },
    inputStyle: {
        padding: "5px 5px 2px 0px",
    }

});

const mapDispatchToProps = dispatch => {
    return {
        inputFieldValue: (field, value) => {
            dispatch(putFieldValue(field, value));
        }
    };
};

export default withStyles(styles)(
    connect(null, mapDispatchToProps)(TextFieldContainer)
);
