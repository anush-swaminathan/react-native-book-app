/**
 * Created by anush on 3/3/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import BookDescriptionView from './BookDescriptionView';

export default class BookDescription extends Component {

    constructor () {
        super();
    }

    render() {
        // alert(this.state.bookData.rank);
        return (
            <BookDescriptionView bookImage={{uri: this.props.bookDetails.book_image}} bookData={this.props.bookDetails} />
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