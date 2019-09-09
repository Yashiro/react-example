import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    WebView,
    DeviceEventEmitter,
    TouchableOpacity
} from 'react-native'
import NavigationBar from 'react-native-andy-navigationbar'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://github.com/Yashiro/andy-redux',
            title: 'Detail',
            canGoBack: false,
        }
    }

    go() {
        this.setState({
            url: this.text
        })
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        })
    }

    onBack() {
        if (this.state.canGoBack) {
            this.webView.goBack()
        } else {
            DeviceEventEmitter.emit('showToast', '回到顶级菜单')
            this.props.navigator.pop()
        }
    }

    getLeftButton(callBack) {
        return <TouchableOpacity onPress={callBack}>
            <Image
                style={{
                    width: 16,
                    height: 16,
                    margin: 5
                }}
                source={require('../../res/images/left_arrow.png')}
            />
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={this.state.title}
                    style={{
                        backgroundColor: '#6495ED'
                    }}
                    leftButton={this.getLeftButton(
                        () => this.onBack()
                    )}
                />
                <WebView
                    ref={webView => this.webView = webView}
                    source={{uri: this.state.url}}
                    onNavigationStateChange={navState => this.onNavigationStateChange(navState)}
                    startInLoadingState={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    tips: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    input: {
        height: 40,
        flex: 1,
        borderWidth: 1,
        margin: 2
    }
})
