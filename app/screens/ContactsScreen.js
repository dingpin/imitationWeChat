import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const {width} = Dimensions.get('window');


//模拟数据
var ListData={
    data:[
        //组一
        {
            cars:[
                {
                    "icon":"https://pub-static.haozhaopian.net/static/web/site/features/cn/crop/images/crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg",
                    "name":"AI公开课"
                },
                {
                    "icon":"http://seopic.699pic.com/photo/50035/0520.jpg_wh1200.jpg",
                    "name":"amy"
                },
                {
                    "icon":"http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg",
                    "name":"ao大师"
                },
                {
                    "icon":"http://shuopic.qwangming.com/shuoshuo_imgs/20170817/9f/1877d0d3c5f5ad63615ff8cb44a3d89f",
                    "name":"ALPIMA"
                },
                {
                    "icon":"http://img.1ppt.com/uploads/allimg/1605/4_160504095943_1.jpg",
                    "name":"阿容"
                },
                {
                    "icon":"https://www.penghu-nsa.gov.tw/FileDownload/Album/Big/20161012162551758864338.jpg",
                    "name":"amina"
                }

            ],
            title:"A"
        },
        //    组二
        {
            cars:[
                {
                    "icon":"http://t2.hddhhn.com/uploads/tu/201612/357/7.png",
                    "name":"B半夏"
                },
                {
                    "icon":"https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
                    "name":"奔奔不息"
                },
                {
                    "icon":"https://pic.qqtn.com/up/2018-5/15258307613400205.jpg",
                    "name":"better"
                },
                {
                    "icon":"http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg",
                    "name":"besieged"
                },
                {
                    "icon":"https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg",
                    "name":"become"
                },
                {
                    "icon":"http://seopic.699pic.com/photo/00044/9957.jpg_wh1200.jpg",
                    "name":"begonia"
                },
                {
                    "icon":"http://www.sinaimg.cn/dy/slidenews/1_img/2017_27/63957_1285861_470607.jpg",
                    "name":"benage"
                },
                {
                    "icon":"http://img02file.tooopen.com/images/20160408/tooopen_sy_158723161481.jpg",
                    "name":"beogo"
                },
                {
                    "icon":"http://5b0988e595225.cdn.sohucs.com/images/20170919/397817fa369d4d9e8be5507aed9ccb05.jpeg",
                    "name":"bagested"
                },
                {
                    "icon":"https://tinypng.com/images/social/website.jpg",
                    "name":"backage"
                },
                {
                    "icon":"http://sinastorage.com/storage.miaosha.sina.com.cn/products/201709/83fff81d19bca2016509e396928b1132.jpeg",
                    "name":"backache"
                },
                {
                    "icon":"http://seopic.699pic.com/photo/40007/4482.jpg_wh1200.jpg",
                    "name":"benavigate"
                },
                {
                    "icon":"http://pic1.win4000.com/wallpaper/6/57bd626e9cd08.jpg",
                    "name":"beneath"
                },
                {
                    "icon":"http://img.pptjia.com/image/20180306/28e825114c9eaefba98a4d492627c051.jpg",
                    "name":"benathe"
                },
                {
                    "icon":"http://img.wxcha.com/file/201603/07/7ec4c7c1f7.jpg",
                    "name":"both"
                },
                {
                    "icon":"https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450__340.jpg",
                    "name":"brother"
                },
                {
                    "icon":"http://pic.sc.chinaz.com/files/pic/pic9/201304/xpic10582.jpg",
                    "name":"bothing"
                },
                {
                    "icon":"http://img.1ppt.com/uploads/allimg/1604/4_160406101236_1.jpg",
                    "name":"bother"
                },
                {
                    "icon":"http://www.fengup.com/uploads/allimg/20180404/pbdb5gaqgtc498.jpg",
                    "name":"beyond"
                },
                {
                    "icon":"http://t2.hddhhn.com/uploads/tu/201612/98/st94.png",
                    "name":"bobo"
                },
                {
                    "icon":"https://i7.wenshen520.com/c/42.jpg",
                    "name":"bigister"
                }
            ],
            title:"B"
        },
        //   组三
        {
            cars:[
                {
                    "icon":"https://img.pc841.com/2018/0326/20180326051740414.jpg",
                    "name":"com"
                },
                {
                    "icon":"http://img.h1365.cn/uploads3/sc/jpgs/1809/hpic14_sc115.com.jpg",
                    "name":"camera"
                },
                {
                    "icon":"https://www.vitao.com/wp-content/uploads/2016/12/qpmZnp2VmJ_WrKQ.jpg",
                    "name":"canene"
                },
                {
                    "icon":"https://p.upyun.com/docs/cloud/demo.jpg",
                    "name":"cone"
                },
                {
                    "icon":"http://www.ideamsg.com/wp-content/uploads/2018/06/Your_Post_As_A_Movie-1.jpg",
                    "name":"Conan"
                },
                {
                    "icon":"http://pic.sc.chinaz.com/files/pic/pic9/201403/apic314.jpg",
                    "name":"coenzyme"
                },
                {
                    "icon":"http://www.missyuan.com/siyuan/day_061227/1_sEUCJyZzTR4h.jpg",
                    "name":"Cotonou"
                }
            ],
            title:"C"
        }


    ]
}

export default class ContactsScreen extends Component {
    static navigationOptions = {
        title: '联系人',
        //tabBarLabel: ,
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../images/ic_contacts_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../images/ic_contacts_normal.png')}/>
            );
        },
    };

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            getSectionData: (dataBlob, sectionID) => {
                return dataBlob[sectionID];
            },//获取组中的数据
            getRowData: (dataBlob, sectionID, rowID) => {
                return dataBlob[sectionID + ":" + rowID]
            },//获取行中的数据
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
    }

    //每一行中的数据
    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image style={styles.rowImg} source={{uri: rowData.icon}}/>
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //每一组中的数据
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeader}>
                <Text style={{marginLeft: 10, marginTop: 5, color: "red"}}>{sectionData}</Text>
            </View>
        )

    }

    render() {
        return (
            <View style={styles.outerView}>
                {/*头部*/}

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        )
    }

    componentWillMount() {
        //调用JSON数据
        this.loadDataFromJson();
    }

    loadDataFromJson() {
        //拿到JSON数据
        var jsonData = ListData.data;
        //定义一些变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];
        //遍历
        for (var i = 0; i < jsonData.length; i++) {
            //1、把组号放入sectionIDs数组中
            sectionIDs.push(i);
            //2、把组中的内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            //3、取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            //4、遍历所有的车数组
            for (var g = 0; g < cars.length; g++) {
                //把行号放入rowID
                rowIDs[i].push(g);
                //把每一行的内容放入dataBlob对象中
                dataBlob[i + ":" + g] = cars[g];
            }

        }
        //更新状态
        this.setState({
            dataSource: this.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }

}
const styles = StyleSheet.create({
    tabBarIcon:{
        width:25,
        height:25,
    },
    outerView: {
        flex: 1
    },
    headerView: {
        height: 64,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 0.5
    },
    rowImg: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    sectionHeader: {
        backgroundColor: "#e8e8e8",
        height: 30,
        justifyContent: "center"
    }

});
