import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, Navigator} from 'react-native';

import BookAppList from './BookAppList';
import BookDescription from './BookDescription';

export default class BookApp extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{id: 1, bookRank: null, title: 'Bestsellers in Hardcover Fiction'}}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) =>
                            {
                                if (route.id === 1) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                            <Text>Back</Text>
                                        </TouchableHighlight>
                                    );
                                }
                            },
                            RightButton: (route, navigator, index, navState) =>
                            { return (null) },
                            Title: (route, navigator, index, navState) =>
                            { return (<Text style={{color: '#FFF', fontSize: 16, alignItems: 'center'}}>{route.title}</Text>); },
                        }}
                        style={{backgroundColor: 'blue'}}
                     />
                }
            />
        );
    }

    renderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 1:
                return (<BookAppList onPress={(data) => {
                    navigator.push({
                        id: 2,
                        bookDetails: data,
                        title: data.title + ' ' + data.contributor
                    });
                }}/>);
            case 2:
                return (<BookDescription bookDetails={route.bookDetails}/>);
        }
    }

}