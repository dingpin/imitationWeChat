/** @format */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
var width = Dimensions.get('window').width;
var height= Dimensions.get('window').height;

export default class HomeScreen extends Component {


    static navigationOptions = {
        title: '微信',
        //tabBarLabel: '微信',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../images/ic_weixin_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../images/ic_weixin_normal.png')}/>
            );
        },
    };
    constructor(props){
        super(props);
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            newText: '',
            chattext:'',
            msg:null,
        };
    }
    _onChangeText(inputData){
        //console.log("输入的内容",inputData);
        //把获取到的内容，设置给showValue
        this.setState({showValue:inputData});
    }
    // 点击控制显示文本
    sendMsg=()=>{
        this.setState({
            msg:
                <View>
                    {this.state.msg}
                    <View style={styles.userTwo}>
                        <Image
                            source={require('../img/bronzeHeadTwo.jpg')}
                            resizeMode='contain'
                            style={styles.bronzeHeadSty1}/>
                        <ImageBackground
                            source={require('../img/bubbleTwo.png')}
                            resizeMode='stretch'
                            style={styles.bubbleSty1}>
                            <Text style={{marginLeft:width*0.06,fontSize:20}}>{this.state.chattext}</Text>
                        </ImageBackground>

                    </View>
                </View>
        });
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.titleSty}>
                    <Text style={{fontSize:20,marginLeft:width*0.01}}>消息</Text>
                    <Text style={{fontSize:20}}>丁平@sunny</Text>
                    <Text style={{fontSize:20,marginRight:width*0.01}}>设置</Text>
                </View>
                <ScrollView>
                    <View style={styles.userOne}>
                        <Image
                            source={require('../img/bronzeHeadOne.jpg')}
                            resizeMode='contain'
                            style={styles.bronzeHeadSty}/>
                        <ImageBackground
                            source={require('../img/bubbleOne.png')}
                            resizeMode='stretch'
                            style={styles.bubbleSty}>
                            <Text style={{marginLeft:width*0.06,fontSize:20}}>麻烦哟</Text>
                        </ImageBackground>

                    </View>
                    <View style={styles.userTwo}>
                        <Image
                            source={require('../img/bronzeHeadTwo.jpg')}
                            resizeMode='contain'
                            style={styles.bronzeHeadSty1}/>
                        <ImageBackground
                            source={require('../img/bubbleTwo.png')}
                            resizeMode='stretch'
                            style={styles.bubbleSty1}>
                            <Text style={{marginLeft:width*0.06,fontSize:20}}>不麻烦</Text>
                        </ImageBackground>

                    </View>
                    {this.state.msg}
                </ScrollView>


                <View style={styles.total}>
                    <View style={styles.TextInputAndButtonSty}>
                        <TouchableOpacity onPress={()=>{alert('发送其他')}}>
                            {/*登录按钮*/}
                            <View style={{width:20,height:40,backgroundColor:'white',borderRadius:5,marginRight:width*0.01}}>
                                <Text>其他</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            style={{height:40, borderColor: '#505050',width:width*0.65,
                                borderWidth: 1,}}
                            placeholder=""
                            editable={true}
                            onChangeText={(newText)=>this.setState({chattext:newText})}//输入框改变触发的函数
                        />
                        <View>

                        </View>
                        <Button style={styles.textLoginViewStyle}
                                onPress={this.sendMsg} disabled={false} title="发送"
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabBarIcon:{
        width:25,
        height:25,
    },
    main:{
        flex:1,
        // backgroundColor:'yellow',
    },
    titleSty:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#45C018',
        height:height*0.05,
        alignItems:'center',
        //flex:1,
        //marginTop:height*0.01,
    },
    userOne:{
        flexDirection:'row',
        // backgroundColor:'yellow',
        //justifyContent:'flex-start',
        // alignItems:'flex-start',
        marginLeft:width*0.03,
        marginTop:height*0.01,
        // flex:2,
    },
    userTwo:{
        flexDirection:'row-reverse',
        //backgroundColor:'yellow',
        marginLeft:width*0.03,
        marginTop:height*0.01,
        //flex:2,
    },
    bronzeHeadSty:{
        //resizeMode:contain,
        width:width*0.12,
        height:height*0.08,
        borderRadius:65,
    },
    bronzeHeadSty1:{
        //resizeMode:contain,
        width:width*0.12,
        height:height*0.08,
        borderRadius:65,
    },
    bubbleSty:{
        height:height*0.08,
        width:width*0.25,
        // marginLeft:-width*0.03,
        //backgroundColor:'yellow',
        //flex:0.5,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    bubbleSty1:{
        height:height*0.08,
        width:width*0.28,
        // marginLeft:-width*0.03,
        //backgroundColor:'yellow',
        //flex:0.5,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    total:{
        //flex:1,

        //backgroundColor:'#505050',
        //justifyContent:'flex-end',
        //flex:1,
        borderRadius:20,
        marginLeft:width*0.01,
        marginRight:width*0.01,
        marginBottom:height*0.008,
    },
    TextInputAndButtonSty:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        //marginBottom:height*0.02,
        height:height*0.1,
        backgroundColor:'#45C018',
    },
    textLoginViewStyle: {
        width:80,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        // marginTop: 15,
        marginLeft:width*0.01,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});



