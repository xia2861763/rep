import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SplashScreen from 'react-native-splash-screen';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
    Image
} from 'react-native';
import App from '../App'
import { NavigationBar, ListRow, Button, Label, Theme } from 'teaset';
import SegmentedView from 'teaset/components/SegmentedView/SegmentedView';
import TabView from 'teaset/components/TabView/TabView';
export default class tsHelloWorld extends Component {
    // componentDidMount() {
    //     // SplashScreen.hide();     //隐藏启动屏
    //     setTimeout(() => {
    //         SplashScreen.hide();
    //       }, 2000
    //       );
    // }
    //默认属性
    static defaultProps={
        name:"小明",
        age:22
    }
    //类型检查
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number.isRequired,
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'skyblue' }}>
                <App
                name="张安"
                />
                
                <NavigationBar
                    style={{ backgroundColor: 'pink' }}
                    //type='android'
                    tintColor='#333'
                    title={
                        <View>
                            <Label style={{ color: '#000', fontSize: 20 }} text='Teaset' />
                        </View>
                    }
                    leftView={
                        <NavigationBar.BackButton title="返回" />}
                    rightView={
                        <View style={{ flexDirection: 'row' }}>
                            <NavigationBar.IconButton icon={require('../testFiles/search.png')} />
                        </View>
                    }
                ></NavigationBar>

                <SegmentedView style={{ marginTop: 68, flex: 1 }} type='projector'>
                    <SegmentedView.Sheet title='one'>
                    {/* 使用ScrollView标签，使主页面可以上下滑动 */}
                        <ScrollView>
                            {/* point:将Label标签包裹在View标签中，通过View标签设置Style属性，从而控制Label中text的位置 */}
                            <View style={{justifyContent:'center',alignItems:'center',height:50}}>
                            <Label type='detail' size='xl' text='第一个页面' ></Label>
                            </View>
                            <ListRow title='Size md'
                                style={{
                                    backgroundColor: 'blue',
                                    paddingLeft: 50
                                }}
                                detail={<Button
                                    style={{
                                        marginRight: 30
                                    }}
                                    title='Button' type='danger' size='md' onPress={() => { alert('这是个按钮事件！') }} />} />

                            <ListRow title='默认图标样式' accessory='indicator'>
                            </ListRow>
                            <ListRow title='自定义图标' accessory={<Image source={require('../testFiles/arrow_right.png')} style={{ width: 15, height: 20 }}></Image>}></ListRow>
                            <ListRow title='可点击行' onPress={() => { alert('这是可点击行！') }}></ListRow>
                            <ListRow title='可滑动行'
                                swipeActions={[
                                    <ListRow.SwipeActionButton title='取消关注' onPress={() => { alert('已经取消关注！') }}></ListRow.SwipeActionButton>,
                                    <ListRow.SwipeActionButton title='删除' type='danger' onPress={() => { alert('删除成功！') }}></ListRow.SwipeActionButton>
                                ]}
                            ></ListRow>
                           
                            <TextInput
                                style={{ height: 50, width: 200 }}
                                placeholder="Type here to translate!"
                                onChangeText={(text) => this.setState({ text })}
                            />

                             <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                            <Label size='xl' text='Hello World!' ></Label>
                        </ScrollView>
                    </SegmentedView.Sheet>
                    
                    <SegmentedView.Sheet title='twe'>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Label type='detail' size='xl' text='第二个页面'></Label>
                            {/* <Text>{this.props.name}:{this.props.age}</Text> */}
                        </View></SegmentedView.Sheet>
                    <SegmentedView.Sheet title='three'>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Label type='detail' size='xl' text='第三个页面'></Label>
                        </View>
                    </SegmentedView.Sheet>
                    <SegmentedView.Sheet title='four'>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Label type='detail' size='xl' text='第四个页面'></Label>
                        </View>
                    </SegmentedView.Sheet>
                </SegmentedView>

                <TabView type='projector'>   
                {/* 默认属性，不设置flex，底部导航栏固定   */}
                    <TabView.Sheet title='首页' icon={require('../testFiles/home.png')}>
                    </TabView.Sheet>
                    <TabView.Sheet title='联系人' icon={require('../testFiles/person.png')}></TabView.Sheet>
                    <TabView.Sheet title='通讯录' icon={require('../testFiles/phone.png')}></TabView.Sheet>

                </TabView>
            </View>
        );
    }
}
