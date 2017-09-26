/**
 * Created by anush on 3/3/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import MovieDescriptionView from './MovieDescriptionView';

export default class MovieDescription extends Component {

    constructor () {
        super();
    }

    render() {
        // alert(this.state.bookData.rank);
        return (
            <MovieDescriptionView movieData={this.props.movieDetails} />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#bbb'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    col50: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});