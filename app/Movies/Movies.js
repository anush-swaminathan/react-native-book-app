import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight, Navigator, Picker} from 'react-native';

import MovieAppList from './MovieAppList';
import MovieDescription from './MovieDescription';

export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: 'popular',
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{id: 1, option: 'popular', title: '', movieDetails: null}}
                    renderScene={this.renderScene.bind(this)}
                    navigationBar={
                        <Navigator.NavigationBar
                            routeMapper={{
                                LeftButton: (route, navigator, index, navState) => {
                                    if (route.id === 1) {
                                        return null;
                                    } else {
                                        return (
                                            <TouchableHighlight onPress={() => navigator.pop()}>
                                                <Image source={require('./../img/back.png')} resizeMode="cover"
                                                       style={{marginTop: 10}}></Image>
                                            </TouchableHighlight>
                                        );
                                    }
                                },
                                RightButton: (route, navigator, index, navState) => {
                                    return (null)
                                },
                                Title: (route, navigator, index, navState) => {
                                    return (
                                        <View style={{
                                            flex: 1
                                        }}>
                                            <View style={{
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    color: '#FFF',
                                                    flex: 1,
                                                    fontSize: 18,
                                                    paddingTop: 15,
                                                    alignSelf: 'center'
                                                }}>
                                                    Now Playing Movies
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                },
                            }}
                            style={{backgroundColor: 'blue'}}
                        />
                    }
                />
            </View>
        );
    }

    renderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 1:
                return (
                    <View style={{flex: 1}}>
                        <View style={{paddingTop: 50, paddingBottom: 0}}>
                            <Picker
                                selectedValue={this.state.option}
                                onValueChange={(opt) => this.setState({option: opt})} mode="dropdown">
                                <Picker.Item label="Now Playing" value="now_playing"/>
                                <Picker.Item label="Popular" value="popular"/>
                                <Picker.Item label="Top Rated" value="top_rated"/>
                                <Picker.Item label="Upcoming" value="upcoming"/>
                            </Picker>
                        </View>
                        <MovieAppList movieType={this.state.option} onPress={(data) => {
                            navigator.push({
                                id: 2,
                                movieDetails: data,
                                title: data.title + ' ' + data.releaseDate
                            });
                        }}/>
                    </View>);
            case 2:
                return (<MovieDescription movieDetails={route.movieDetails}/>);
        }
    }

}