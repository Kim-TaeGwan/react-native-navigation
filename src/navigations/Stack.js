import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';


const Stack = createStackNavigator(); // 스택 내비게이션 생성
// 생성된 스택 내비게이션에는 화면을 구성하는 Screen 컴포넌트와 Screen 컴포넌트를 관리하는 Navigator 컴포넌트가 있다.

//  <Stack.Screen name="Home" component={Home} /> name 에는 화면의 이름을 작성, Screen 컴포넌트의 name 은 반드시 서로 다른 값을 가져야한다.
const StackNavigation = () => {
    /*
     * initialRouteName 속성을 이용해 첫 번쨰 화면을 지정할 수 있음.
     *
     * Screen 컴포넌트의 component 로 지정된 컴포넌트는 화면으로 이용되고 navigation 이 prop 로 전달된다.
     *
     * cardStyle 을 이용하면 스택 내비게이션의 화면 배경색을 수정할 수 있다.
     * 화면의 배경색은 일반적으로 동일하게 사용하므로, 화면마다 설정하기보다 Navigator 컴포넌트의 screenOptions 에 설정해서 화면 전체에 적용되도록 하는 것이 편함.
     * 만약 특정 화면만 배경색을 다르게 하고 싶다면 Screen 컴포넌트에서 설정하거나 화면으로 사용되는 컴포넌트에서 직접 배경색을 지정하면된다.
     *
     * 헤더의 타이틀은 Screen 컴포넌트의 name 속성을 기본값으로 사용한다. 헤더의 타이틀을 변경하는 가장 쉬운 방법은 name 을 원하는 값으로 수정하는 것이다.
     * name 속성을 변경하는 것은 간편하지만, name 속성을 이용하는 곳을 찾아다니며 모두 수종해야 한다는 단점이 있다.
     * name 속성을 변경했을 때 의 단점을 피하면서 화면 타이틀을 변경하는 방법은 headerTitle 속성을 이용하는 것이다.
     *
     * 안드로이드에서는 ios 와 달리 타이틀이 중앙으로 정렬되지 않는다.
     * headerTitleStyle 을 이용하여 정렬
     *
     * 헤더 왼쪽에 뒤로 가기 버튼이 생성되는 것은 동일하지만 ,ios와 안드로이드의 모습에는 차이가 있다. 안드로이드는 버튼의 타이틀을 보여주지 않고, ios 는 이전 화면의 타이틀을 버튼의 타이틀로 보여주는 것이 가장 눈에 띄는 차이점이다.
     * headerBackTitleVisible 을 이용하면 두 플랫폼의 버튼 타이틀 랜더링 여부를 동일하게 설정할 수 있다.
     * 버튼의 타이틀은 나타나게 하지만, 이전 화면의 이름이 아닌 다른 값을 이용하고 싶은 경우 headerBackTitle 을 이용한다.
     * 만약 headerBackTitle 에 빈문자열을 입력하면 Back 이라는 문자열이 나타난다.
     * 버튼의 타이틀에 빈 값을 주고 싶은 경우 headerBackTitle 이 아니라 headerBackTitleVisible 을 false 로 설정하여 타이틀이 보지이 않도록 해야한다.
     *
     * headerBackTitleStyle 을 이용하면 글자의 색뿐만 아니라 글자크기 등 다양한 스타일을 지정 수 있지만 버튼의 타이틀에만 적용된다.
     * 버튼의 타이틀과 이미지 색을 동일하게 변경하려면 headerTintColor 를 이용해야 한다.
     * headerTintColor 에 지정된 색은 버튼뿐만 아니라 헤더의 타이틀에도 적용되지만, headerTitleStyle 혹은 headerBackTitleStyle 이 우선순위가 높으므로 headerTintColor 에 설정한 색으로 나타나게 하고 싶다면 다른 스타일과 겹치지 않도록 작성하는 것이 중요하다.
     *
     * 두 플랫폼의 뒤로 가기 버튼 아이콘에 동일한 아이콘이 렌더링되로록 변경하려면 headerBackImage 에 컴포넌트를 반환하는 함수를 전달해서 두 플랫폼이 동일한 이미지를 렌더링하도록 변경할 수 있다.
     *
     * 뒤로 가기 버튼의 이미지가 아니라 헤더의 왼쪽 버튼 전체를 변경하고 싶다면 headerLeft 에 컴포넌트를 반환하는 함수를 지정한다.
     * 이와 동일한 방법으로 headerRight 에 컴포넌트를 반환하는 함수를 지정하면 헤더의 오른쪽에 원하는 컴포넌트를 렌더링할 수 있다.
     *
     *
     * 화면 종류나 프로젝트 기확에 따라 헤더를 감춰야 하는 상황이 있다.
     * 이런 상황에서 이용 할 수 있는 설정은 headerMode 나 headerShown 이다.
     * headerMode 는 Navigator 컴포넌트의 속성으로 헤더를 렌더링 하는 방법을 설정하는 속성이다.
     * float : 헤더가 상단에 유지되며 하나의 헤더를 사용한다, ios 에서 볼 수 있는 동작 방식이고, screen 은 안드로이드에서 일반적으로 볼 수 있는 동작 방식이다.
     * screen : 각 화면마다 헤더를 가지며 화면 변경과 함께나타나거나 사라진다.
     * none : 헤더가 렌더링되지 않는다.
     *
     * headerShown 은 화면 옵션으로, Navigator 컴포넌트의 screenOptions 에 설정하면 전체 화면의 헤더가 보이지 않도록 설정할 수 있다.
     *
     *
     */
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{cardStyle: {backgroundColor:"#ffffff"}, headerStyle:{height:110, backgroundColor: '#95a5a6', borderBottomWidth:5, borderBottomColor:'#34495e'}, headerTitleStyle:{color:"#ffffff", fontSize:24}, headerTitleAlign:'center'}} >
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="List" component={List} options={{headerTitle: 'List Screen',  headerBackTitleVisible: Platform.OS === 'ios', headerBackTitle:'Prev', headerTitleStyle: {fontSize:24}, headerTintColor:'#e74c3c',
                headerBackImage:({tintColor})=> {
                    const style = {
                        marginRight:5,
                        marginLeft:Platform.OS === 'ios' ? 11:0,
                    };
                    return(
                        <MaterialCommunityIcons name="keyboard-backspace" size={30} color={tintColor} style={style} />
                    )
                }}}
            />
            <Stack.Screen name="Detail" component={Item} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
