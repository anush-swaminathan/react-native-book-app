/**
 * Created by anush on 3/29/2017.
 */

import React, {Component} from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import BookApp from './Books/Books';
import Movies from './Movies/Movies';

export const Tabs = TabNavigator({
    Books: {
        screen: BookApp,
        navigationOptions: {
            tabBar: {
                label: 'Books',
                icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
            },
        },
    },
    Movies: {
        screen: Movies,
        navigationOptions: {
            tabBar: {
                label: 'Movies',
                icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
            },
        },
    },
});