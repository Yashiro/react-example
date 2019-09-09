import React, {Component} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import Home from './js/pages/Home'

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        component: Home
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component
                        return <Component navigator={navigator} {...route.params} />
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECC3D8'
    }
})
