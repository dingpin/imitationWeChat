import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    ScrollView,

    Image,
    Text,
    View
} from "react-native";

let Dimensions = require("Dimensions");
let ScreenWidth = Dimensions.get("window").width;
let Screenheight = Dimensions.get("window").height;

import ImageData from "./BadgeData.json"; //加载json文件


export default class FindScreen extends Component {

    static navigationOptions = {
        title: '发现',
       // tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../images/ic_find_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../images/ic_find_normal.png')}/>
            );
        },
    };

    constructor(props) {
        super(props);
        this.state = {currentPage: 0}; //当前显示页数
    }

    static defaultProps = {
        duration: 2000 //自动论播间隔
    };

    componentDidMount() {
        //渲染页面后调用
        this._startTimer();
    }

    componentWillUnmount() {
        //页面销毁时调用
        // 如果存在this.timer，则使用clearTimeout清空。
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.continer}>
                <View style={styles.loopImage}>
                    <ScrollView
                        ref="scrollView"
                        //水平方向
                        horizontal={true}
                        //当值为true时显示滚动条
                        showsHorizontalScrollIndicator={false}
                        //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上
                        pagingEnabled={true}
                        onMomentumScrollEnd={e => {
                            this._onAnimationEnd(e);
                        }}
                        onScrollBeginDrag={() => {
                            this._onScrollBeginDrag();
                        }}
                        onScrollEndDrag={() => {
                            this._onScrollEndDrag();
                        }}
                    >
                        {this._renderAllImage()}
                    </ScrollView>
                    <View style={styles.pageViewStyle}>
                        {this._renderAllIndicator()}
                        <Text
                            style={{
                                fontSize: 20,
                                color: "white",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            sunny@==@丁平
                        </Text>
                    </View>
                </View>
                <View style={styles.newMessageSty}>
                    <ScrollView>
                        <View style={styles.userOne}>
                            <Image
                                source={require("../img/1.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        皇上
                                    </Text>
                                </View>
                                <View style={{flexWrap: "wrap"}}>
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        哎哟喂，这有一条文字哟，快来关注哟
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne1}>
                            <Image
                                source={require("../img/2.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        傅恒
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: ScreenWidth * 0.015,
                                        flexDirection: "column",
                                        height: Screenheight * 0.25
                                    }}
                                >
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        何时才能你等我哟~
                                    </Text>
                                    <Image
                                        source={require("../img/3.jpg")}
                                        resizeMode="stretch"
                                        style={{
                                            width: ScreenWidth * 0.4,
                                            height: ScreenWidth * 0.4,
                                            marginLeft: ScreenWidth * 0.02
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne2}>
                            <Image
                                source={require("../img/3.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        魏璎珞
                                    </Text>
                                </View>
                                <View style={{flexWrap: "wrap"}}>
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        楼上的别瞎说，皇上在呢！！！！！
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne3}>
                            <Image
                                source={require("../img/4.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        弘昼
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: ScreenWidth * 0.015,
                                        flexDirection: "column",
                                        height: Screenheight * 0.25
                                    }}
                                >
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        好基友，别做傻事呀！
                                    </Text>
                                    <Image
                                        source={require("../img/2.jpg")}
                                        resizeMode="stretch"
                                        style={{
                                            width: ScreenWidth * 0.4,
                                            height: ScreenWidth * 0.4,
                                            marginLeft: ScreenWidth * 0.02
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne4}>
                            <Image
                                source={require("../img/5.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        现实中的魏璎珞
                                    </Text>
                                </View>
                                <View style={{flexWrap: "wrap"}}>
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        楼下的丑人哟，快看楼上要打起来啦~
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne5}>
                            <Image
                                source={require("../img/6.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        现实中的风中凌乱
                                    </Text>
                                </View>
                                <View style={{flexWrap: "wrap"}}>
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        呀呀呀，楼上的才丑呀，看见啦~看见啦~
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne6}>
                            <Image
                                source={require("../img/1.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        皇上
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: ScreenWidth * 0.015,
                                        flexDirection: "column",
                                        height: Screenheight * 0.25
                                    }}
                                >
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        我和我的好侍卫~
                                    </Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Image
                                            source={require("../img/1.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.3,
                                                height: ScreenWidth * 0.3,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/2.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.3,
                                                height: ScreenWidth * 0.3,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne7}>
                            <Image
                                source={require("../img/2.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        傅恒
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: ScreenWidth * 0.015,
                                        flexDirection: "column",
                                        height: Screenheight * 0.25
                                    }}
                                >
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        我们是一家人~~~
                                    </Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Image
                                            source={require("../img/1.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.23,
                                                height: ScreenWidth * 0.23,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/2.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.23,
                                                height: ScreenWidth * 0.23,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: ScreenWidth * 0.01
                                        }}
                                    >
                                        <Image
                                            source={require("../img/3.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.23,
                                                height: ScreenWidth * 0.23,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/4.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.23,
                                                height: ScreenWidth * 0.23,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userOne8}>
                            <Image
                                source={require("../img/3.jpg")}
                                resizeMode="stretch"
                                style={styles.bronzeHeadSty}
                            />
                            <View style={styles.NameAndShowSty}>
                                <View style={styles.NameSty}>
                                    <Text
                                        style={{
                                            marginLeft: ScreenWidth * 0.02,
                                            fontSize: 15,
                                            color: "#08F"
                                        }}
                                    >
                                        魏璎珞
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: ScreenWidth * 0.015,
                                        flexDirection: "column",
                                        height: Screenheight * 0.25
                                    }}
                                >
                                    <Text
                                        style={{marginLeft: ScreenWidth * 0.02, fontSize: 20}}
                                    >
                                        剧组合照~~~
                                    </Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Image
                                            source={require("../img/1.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/2.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/3.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: ScreenWidth * 0.01
                                        }}
                                    >
                                        <Image
                                            source={require("../img/4.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/5.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/6.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: ScreenWidth * 0.01
                                        }}
                                    >
                                        <Image
                                            source={require("../img/3.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/2.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                        <Image
                                            source={require("../img/4.jpg")}
                                            resizeMode="stretch"
                                            style={{
                                                width: ScreenWidth * 0.2,
                                                height: ScreenWidth * 0.2,
                                                marginLeft: ScreenWidth * 0.02
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    /**开始拖拽 */
    _onScrollBeginDrag() {
        console.log("开始拖拽");
        //清空计时器
        this.timer && clearTimeout(this.timer);
    }

    /**停止拖拽 */
    _onScrollEndDrag() {
        console.log("停止拖拽");
        //开始计时
        this.timer && this._startTimer();
    }

    /*轮播图片展示 */
    _renderAllImage() {
        let allImage = [];
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            let imgsItem = imgsArr[i];
            allImage.push(
                <Image
                    key={i}
                    source={{uri: imgsItem.icon}}
                    style={styles.imageStyle}
                    resizeMode={"contain"}
                />
            );
        }
        return allImage;
    }

    /*手动滑动分页实现 */
    _onAnimationEnd(e) {
        //求出偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前页数
        let pageIndex = Math.floor(offsetX / ScreenWidth);
        //更改状态机
        this.setState({currentPage: pageIndex});
    }

    /*页面指针实现 */
    _renderAllIndicator() {
        let indicatorArr = [];
        let style;
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            style =
                i == this.state.currentPage ? {color: "orange"} : {color: "white"};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 30}, style]}>
                    &bull;
                </Text>
            );
        }
        return indicatorArr;
    }

    /*通过定时器修改当前界面 */
    _startTimer() {
        let scrollView = this.refs.scrollView; //获取ScrollView的实例
        this.timer = setInterval(() => {
            console.log("开启定时器");
            let imageCount = ImageData.data.length; //6
            let activePage = 0; //下一页面初始为0
            if (this.state.currentPage >= imageCount + 1) {
                activePage = 0; //当前页面超出页面总数时，回到第一页面
            } else {
                activePage = this.state.currentPage + 1; //下一页面
            }
            this.setState({currentPage: activePage}); //setState刷新页面
            let offsetX = activePage * ScreenWidth; //设置图片的偏移
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
        }, this.props.duration);
    }
}

const styles = StyleSheet.create({
    tabBarIcon:{
        width:25,
        height:25,
    },
    continer: {
        backgroundColor: "#F0F1",
        flex: 1
    },
    loopImage: {
        flex: 1
        //backgroundColor:'yellow'
    },
    newMessageSty: {
        flex: 2
        //backgroundColor: "yellow"
    },
    userOne: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        // alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05
        // flex:2,
    },
    userOne1: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        //   alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05,
        height: Screenheight * 0.3
        // flex:2,
    },
    userOne2: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        // alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05
        // height: Screenheight * 0.25
        // flex:2,
    },
    userOne3: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        //  alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05,
        height: Screenheight * 0.3
        // flex:2,
    },
    userOne4: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        // alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05
        // height: Screenheight * 0.25
        // flex:2,
    },
    userOne5: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        // alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05
        //height: Screenheight * 0.25
        // flex:2,
    },
    userOne6: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        //  alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05,
        height: Screenheight * 0.25
        // flex:2,
    },
    userOne7: {
        flexDirection: "row",
        //backgroundColor:'yellow',
        //justifyContent:'center',
        //alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05,
        height: Screenheight * 0.35
        // flex:2,
    },
    userOne8: {
        flexDirection: "row",
        // backgroundColor:'yellow',
        //justifyContent:'center',
        //alignItems: "center",
        marginLeft: ScreenWidth * 0.08,
        marginTop: ScreenWidth * 0.05,
        height: Screenheight * 0.45
        // flex:2,
    },
    bronzeHeadSty: {
        //resizeMode:contain,
        width: ScreenWidth * 0.2,
        height: Screenheight * 0.11
        //borderRadius: 100
        // backgroundColor:'yellow'
    },
    NameAndShowSty: {
        //backgroundColor:'yellow',
        height: Screenheight * 0.12,
        marginRight: ScreenWidth * 0.2
    },
    NameSty: {
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    imageStyle: {
        width: ScreenWidth
        //height: Screenheight
    },
    pageViewStyle: {
        //height:25,
        width: ScreenWidth,
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    }
});

