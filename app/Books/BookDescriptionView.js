/**
 * Created by anush on 3/3/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

export default class BookDescriptionView extends Component {
    render() {
        return (
            <View>
                <View style={{height: 50, backgroundColor: 'blue'}}>
                    <Text style={styles.author}>Back</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={[styles.row, styles.noPadding]}>
                            <View style={styles.info}>
                                <Text style={styles.title}>{this.props.bookData.title}</Text>
                                <Text style={styles.author}>{this.props.bookData.contributor}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Image source={this.props.bookImage} style={styles.bookCover}/>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.desc}>
                                <Text style={styles.descText}>{this.props.bookData.description}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }


}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 10
    },
    bookCover: {
        flex: 1,
        height: 350,
        resizeMode: 'contain'
    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: 50,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20
    },
    author: {
        fontSize: 14
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    desc: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    descText: {
        fontSize: 16,
        fontStyle: 'italic'
    },
    noPadding: {
        padding: 0
    }
});