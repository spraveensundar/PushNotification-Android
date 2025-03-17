import React from 'react';
import { Text } from 'react-native';
import { useNotification } from './useNotifications';

const App = () => {
    useNotification()
    return (
        <Text>Firebase Setup Done!</Text>
    );
};

export default App;
