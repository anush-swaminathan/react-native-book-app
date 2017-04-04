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

import MovieList from './MovieList';

var URL = "https://api.themoviedb.org/3/movie/popular?api_key=1d27cb192429ad5e457befa6c6da3efa&language=en-US&page=1";

export default class MovieAppList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            movieData: ds.cloneWithRows([])
        };
    }

    // Life Cycle Hook called when Component is Loaded
    componentDidMount() {
        this._refreshData();
    }

    _renderRow(rowData) {
        return (
            <MovieList coverURL={{uri: 'https://image.tmdb.org/t/p/w500_and_h281_bestv2/' + rowData.poster_path}}
                       title={rowData.title}
                       releaseDate={rowData.release_date}
                       rating={Math.round(rowData.vote_average * 10) / 10} onPress={() => this.props.onPress(rowData)}/>
        );
    }

    componentWillReceiveProps(nextProps) {
        URL = 'https://api.themoviedb.org/3/movie/' + nextProps.movieType + '?api_key=1d27cb192429ad5e457befa6c6da3efa&language=en-US&page=1';
        this._refreshData();
    }

    _renderFooter() {
        return (
            <View style={styles.sectionDivider}>
                <Text>Bringing Movies List from TMDB</Text>
            </View>
        );
    }

    _refreshData() {
        fetch(URL)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    movieData: this.state.movieData.cloneWithRows(rjson.results)
                });
            });
    }

    render() {
        return (
            <ListView dataSource={this.state.movieData} renderRow={this._renderRow.bind(this)}
                      renderFooter={this._renderFooter}/>
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

