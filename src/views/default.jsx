import React, { Component } from 'react';
import { connect } from 'react-redux';

class DefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {      
        return (
          <section>hello</section>
        );
    }
}

const mapStateToProps = state => {
    const {isLoading, queryResult} = state;
    return {
        isLoading,
        queryResult
    };
}

export default connect(mapStateToProps, null)(DefaultPage);
