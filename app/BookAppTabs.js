/**
 * Created by anush on 3/29/2017.
 */

import React, {Component} from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import BookApp from './BookApp';
import Me from './Me';

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
    Me: {
        screen: Me,
        navigationOptions: {
            tabBar: {
                label: 'Me',
                icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
            },
        },
    },
});