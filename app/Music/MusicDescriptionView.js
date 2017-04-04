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

export default class MovieDescriptionView extends Component {
    render() {
        return (
            <View style={{paddingTop: 50}}>
                <ScrollView>
                    <View>
                        <View style={{height: 80, paddingTop: 10}}>
                            <View style={styles.info}>
                                <Text style={styles.title}>{this.props.movieData.title}</Text>
                                <Text style={styles.rating}>Release Date: {this.props.movieData.release_date}</Text>
                                <Text style={styles.rating}>Rating: {Math.round( this.props.movieData.vote_average * 10 ) / 10}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Image source={{uri: 'https://image.tmdb.org/t/p/w500_and_h281_bestv2/' + this.props.movieData.poster_path}} style={styles.movieCover}/>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.desc}>
                                <Text style={styles.descText}>{this.props.movieData.overview}</Text>
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10
    },
    movieCover: {
        flex: 1,
        height: 350,
        width: 350
    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: 50,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20
    },
    rating: {
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