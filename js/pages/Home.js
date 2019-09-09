import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import NavigationBar from 'react-native-andy-navigationbar'
import ItemCell from 'react-native-andy-itemcell'
import Detail from "./Detail"

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectModel: {
                item: {
                    full_name: 'Example',
                    description: 'Dev',
                    owner: 'Andy',
                    stargazers_count: 100
                }
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('props => ', props)
        console.log('state => ', state)
        if ( props.name !== state.name ) {
            return {
                name: props.name,
                list: null
            };
        }
        return null;
    }

    onSelect(projectModel) {
        console.log('projectModel => ', projectModel)
        this.props.navigator.push({
            component: Detail,
            params: {
                projectModel: projectModel,
                ...this.props
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Home'}
                    style={{
                        backgroundColor: '#6495ED'
                    }}
                    statusBar={{
                        backgroundColor: '#6495ED'
                    }}
                />
                <ItemCell
                    projectModel={this.state.projectModel}
                    onSelect={() => this.onSelect(this.state.projectModel)}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    show: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 22,
        height: 22,
        margin: 5
    }
})
