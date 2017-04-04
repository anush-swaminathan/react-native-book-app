'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default class BookList extends Component {
    propTypes: {
        coverURL: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    };

    setNativeProps() {
        this.refs.container.setNativeProps(this.propTypes);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.bookItem}>
                    <Image style={styles.cover} source={this.props.coverURL}/>
                    <View style={styles.info}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.author}>{this.props.author}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

}

var styles = StyleSheet.create({
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
    }
});