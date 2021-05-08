import React, {useLayoutEffect} from 'react';
import styled from "styled-components/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const Item = ({route, navigation}) => {
    /*
    * useLayoutEffect Hook 은 useEffect Hook 과 사용법이 동일하며 거의 같은 방시긍로 동작한다.
    * 주요 차이점은 컴포넌트가 업데이트된 직후 화면이 렌더링되기 전에 실행된다는 것이다.
    * 이 특징 때문에 화면을 렌더링하기 전에 변경할 부분이 있거나 수치 등을 측정해야 하는 상황에서 많이 사용된다.
    *
    *
    * */
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerBackTitleVisible:false,
            headerTintColor:'#ffffff',
            headerLeft: ({onPress, tintColor}) => {
                return(
                    <MaterialCommunityIcons name="keyboard-backspace" size={30} style={{marginLeft:11}} color={tintColor} onPress={onPress} />
                )
            },
            headerRight:({tintColor}) => {
                // popToTop 함수는 현재 쌓여 있는 모든 화면을 내보내고 첫 화면으로 돌아가는 기능
                return(
                    <MaterialCommunityIcons name="home-variant" size={30} style={{marginRight:11}} color={tintColor} onPress={()=>navigation.popToTop()} />
                )
            }
        })
    },[])
    return (
        <Container>
            <StyledText>Item</StyledText>
            <StyledText>ID: {route.params.id}</StyledText>
            <StyledText>Item: {route.params.name}</StyledText>
        </Container>
    );
};

export default Item;
