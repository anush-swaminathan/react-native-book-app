'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default class MovieList extends Component {
    propTypes: {
        coverURL: React.PropTypes.string.isRequired,
        releaseDate: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        rating: React.PropTypes.number.isRequired
    };

    setNativeProps() {
        this.refs.container.setNativeProps(this.propTypes);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.MovieItem}>
                    <Image style={styles.cover} source={this.props.coverURL}/>
                    <View style={styles.info}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.release}>
                            Release Date-{this.props.releaseDate}
                        </Text>
                        <Text style={styles.text2}>
                            (Rating: {this.props.rating})
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

}

var styles = StyleSheet.create({
    MovieItem: {
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
        width: 75
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    release: {
        fontSize: 15,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    rating: {
        fontSize: 20,
        paddingTop: 20
    }
});