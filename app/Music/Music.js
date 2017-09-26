import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight, Navigator, TextInput} from 'react-native';

import MusicAppList from './MusicAppList';
import MusicDescription from './MusicDescription';

export default class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchKey: false
        };
    }

    updateText(event) {
        let searchText = event.nativeEvent.text;
        if (searchText !== '') {
            this.setState({search: searchText, searchKey: true});
        } else {
            this.setState({search: searchText, searchKey: false});
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{id: 1, musicDetails: null}}
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
                                                    Top Charts
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
                            <TextInput placeholder='Search Songs & Artist' blurOnSubmit={true} onSubmitEditing={this.updateText.bind(this)} returnKeyType='go'/>
                        </View>
                        <MusicAppList songName={this.state.search} searchKey={this.state.searchKey} onPress={(data) => {
                            navigator.push({
                                id: 2,
                                musicDetails: data
                            });
                        }}/>
                    </View>);
            case 2:
                return (<MusicDescription musicDetails={route.musicDetails}/>);
        }
    }

}