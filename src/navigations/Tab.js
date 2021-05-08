import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Mail, Meet, Settings} from "../screens/TabScreens";
import {MaterialCommunityIcons} from "@expo/vector-icons";

/*
* 탭 내비게이션에도 스택 내비게이션과 동일하게 Navigator 컴포넌트, Screen 컴포넌트가 있다
* 직접 만든 컴포넌트들을 Screen 컴포넌트의 component 로 지정해 화면으로 사용하고 Navigator 컴포넌트로 감싸준다.
*
* 탭 버튼에 아이콘을 렌더링하는 방법은 tabBarIcon 을 이용하는 것이다.
* 스택 내비게이션에서 타이틀 컴포넌트를 변경하거나 헤더의 버튼 컴포넌트를 변경했던 것처럼 tabBarIcon 에 컴포넌트를 반환하는 함수를 지정하면 버튼의 아이콘이 들어갈 자리에 해당 컴포넌트를 렌더링한다.
* tabBarIcon 에 설정된 함수에는 color, size, focused 값을 포함한 객체가 파라미터로 전달된다는 특징이 있다.
*
* 버튼 아이콘 아래에 랜더링되는 라벨은 Screen 컴포넌트의 name 값을 기본값으로 사용한다.
* 탭 버튼의 라벨은 tabBarLabel 을 이용해서 변경할 수 있다.
*
* 라벨을 버튼 아이콘의 아래가 아닌 아이콘 옆에 렌더링되도록 변경하고 싶으면 labelPosition 의 값을 변경해서 조정이 가능하다.
* labelPosition 은 below-icons 과 beside-icon 두 값만 설정할 수 있다.
*
* showLabel: false 를 적용하면 라벨이 렌더링되지 않는다.
*
* tabBarOptions 속성에 style 의 값으로 스타일 객체를 설정하여 변경할 수 있다.
* 탭 버튼의 아이콘은 선택되어 활성화된 상태의 색과 선택되지 않아 비활성화된 상태의 색을 각각 activeTintColor 와 inactiveTintColor 를 이용해 설정할 수 있다.
*
*/

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />
}

const Tab = createBottomTabNavigator(); // 탭 내비게이션 생성

const TabNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={{labelPosition: 'beside-icon', showLabel:false, style:{ backgroundColor:'#54b7f9', borderTopColor:'#fff', borderTopWidth:2 }, activeTintColor:'#fff', inactiveTintColor:'#cfcfcf'}}>
            <Tab.Screen name="Main" component={Mail} options={{ tabBarLabel:'Index', tabBarIcon: props => TabIcon({...props, name:props.focused ?  'email' : 'email-outline'}) }} />
            <Tab.Screen name="Meet" component={Meet} options={{tabBarIcon: props => TabIcon({...props, name: props.focused ?  'video' : 'video-outline'})}} />
            <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon: props => TabIcon({...props, name: props.focused ? 'account-settings' : 'account-settings-outline'})}} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
