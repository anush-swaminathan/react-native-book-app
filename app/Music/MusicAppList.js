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

import MusicList from './MusicList';

var URL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=fec9b8e517fee793d027be186b3c990b&format=json";

export default class MusicAppList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            musicData: ds.cloneWithRows([])
        };
    }

    // Life Cycle Hook called when Component is Loaded
    componentDidMount() {
        this._refreshData();
    }

    _renderRow(rowData) {
        let artist = '';
        if (typeof rowData.artist === 'object') {
            artist = rowData.artist.name;
        } else {
            artist = rowData.artist;
        }
        return (
            <MusicList coverURL={{uri: rowData.image[3]['#text']}}
                       name={rowData.name}
                       artist={artist}/>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchKey) {
            URL = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + nextProps.songName + '&api_key=fec9b8e517fee793d027be186b3c990b&format=json';
            this._searchData();
        } else {
            URL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=fec9b8e517fee793d027be186b3c990b&format=json";
            this._refreshData();
        }

    }

    _renderFooter() {
        return (
            <View style={styles.sectionDivider}>
                <Text>Powered By Last.fm</Text>
            </View>
        );
    }

    _refreshData() {
        fetch(URL)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    musicData: this.state.musicData.cloneWithRows(rjson.tracks.track)
                });
            });
    }

    _searchData() {
        fetch(URL)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    musicData: this.state.musicData.cloneWithRows(rjson.results.trackmatches.track)
                });
            });
    }

    render() {
        return (
            <ListView dataSource={this.state.musicData} renderRow={this._renderRow.bind(this)}
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

