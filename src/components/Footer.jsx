import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <Grid container item xs={12} justify="center">
                    <List>
                        <ListItem>
                            <ListItemText primary="© chenhm881" />
                        </ListItem>
                    </List>
                </Grid>
            </React.Fragment>
        );
    }
}



export default Footer
