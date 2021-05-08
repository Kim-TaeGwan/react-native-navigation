import React from 'react';
import styled from "styled-components/native";
import {Button, StatusBar} from "react-native";

const Container = styled.SafeAreaView`
  background-color: #ffffff;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const Home = ({navigation}) => {
    // navigation 에는 다양한 기능이 있는데 그 중 navigate 함수는 원하는 화면으로 이동하는데 사용되는 함수.
    // navigation 에 있는 navigate 함수를 이용해서 원하는 화면의 이름을 전달하면 해당 화면으로 이동.
    // 전달되는 화면의 이름은 Screen 컴포넌트의 name 값 중 하나를 입력해야 한다.
    return (
        <Container>
            <StyledText>Home</StyledText>
            <Button title="go to the list screen" onPress={()=> navigation.navigate('List')} />
        </Container>
    );
};

export default Home;
