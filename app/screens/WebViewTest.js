import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    WebView,
    View,
    Image,
    ListView,
    Dimensions,
    TouchableOpacity
} from 'react-native';




export default class WebViewTest extends Component {

    render() {
        return (
            <View style={styles.outerView}>
                <WebView
                    source={{uri: 'https://www.baidu.com'}}
                    style={{marginTop: 20}}
                />
                <Text>1111</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({

    outerView: {
        flex: 1
    },

});
