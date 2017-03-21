'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    Navigator
} from 'react-native';

import BookList from './BookList';

var API_KEY = "1d079471abbd4dfc83a9e076072ad4e2";
var Query_Type = "hardcover-fiction";
var API_STEM = "https://api.nytimes.com/svc/books/v3/lists";
var URL = `${API_STEM}/${Query_Type}?response-format=json&api-key=${API_KEY}`;

export default class BookAppList extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    // Life Cycle Hook called when Component is Loaded
    componentDidMount() {
        this._refreshData();
    }

    _renderRow(rowData) {
        return (
            <BookList coverURL={{uri: rowData.book_image}} title={rowData.title} rank={rowData.rank} author={rowData.author} onPress={() => this.props.onPress(rowData)} />
        );
    }

    _renderFooter() {
        return (
            <View style={styles.sectionDivider}>
                <Text>Data from the New York Times Best Seller list</Text>
            </View>
        );
    }

    _refreshData() {
        fetch(URL)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
                });
            });
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}
                      renderFooter={this._renderFooter} style={styles.pt50} />
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingTop: 24
    },
    list: {
        flex: 1,
        flexDirection: 'row'
    },
    listContent: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDD'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#EEE',
        alignItems: 'center'
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center'
    },
    bookItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    pt50: {
        paddingTop: 50
    }
});

