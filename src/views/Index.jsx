import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import TextFieldContainer from "../components/TextFieldContainer";
import CheckboxContainer from "../components/CheckboxContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import clsx from "clsx";
class Index extends Component {

    componentDidMount() {
        document.title = "Book home";
    }

    render() {
        let {classes} = this.props;
        return <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            <Container maxWidth="lg">
                <Header/>
                <div className={clsx(classes.contentStyle, classes.contentTop)}>
                    <Grid justify="space-between" container className={classes.sectionStyle}>
                        <Grid item container>
                            <Grid container justify="space-between" className={classes.title}>
                                <Typography variant="h6" display="inline">
                                    Welcome:
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.sectionContent}>
                            <Grid item container xs={12} sm={4} md={2} lg={2} xl={2} justify="space-evenly">
                                <Grid item xs={12}>
                                    <Grid item className={classes.boxStyle}>
                                        <Grid item className={classes.textFieldBoxStyle} >
                                            <TextFieldContainer label={'Id'} field={'id'}  defaultValue={'1'} prefix={{}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.boxStyle}>
                                        <Grid item className={classes.checkBoxStyle}>
                                            <CheckboxContainer label={'Multiple'} field={'numRequested'} prefix={{}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.contentStyle}><Footer/></div>
            </Container>
        </React.Fragment>
    }
}

const styles = (theme) => ({
    contentStyle: {
        backgroundColor: "#EFF1F3",
    },
    CardContent: {
        padding: "0px"
    },
    sectionStyle: {
        backgroundColor: "#f9f9fc",
        marginBottom: "10px",
    },
    contentTop: {
        marginTop: "10px",
    },
    sectionContent: {
        margin: "0px",
        padding: "12px 0px",
        backgroundColor: "#f9f9fc",
    },
    title: {
        margin: '10px 12px 0px 12px',
        borderBottom: "solid 1px #98a6ad33",
    },
    boxStyle: {
        padding: "3px 12px 9px 12px",
    },
    subBoxStyle: {
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "5px 10px",
    },

    textFieldBoxStyle: {
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "6.29px 10px 6.29px 10px",
    },

    selectBoxStyle: {
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "6.51px 10px 6.52px 10px",
    },

    checkBoxStyle: {
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "8.26px 10px 8.26px 10px",
    },

    radioBoxStyle: {
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "6.51px 10px 6.52px 10px",
    },

    cardStyle: {
        overflow: "hidden",
        boxShadow: "0 0 14px 0 #3540520d",
        padding: "5px",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    button: {
        margin: theme.spacing(1),
    },
    foldTitle: {
        paddingRight: '12px',
    },


});

export default withStyles(styles)(Index);
