import React from 'react';
import styled from "styled-components/native";
import {Button} from "react-native";

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size:30px;
  margin-bottom: 10px;
`;

const items = [
    {_id:1, name: "React Native"},
    {_id:2, name: "React Navigation"},
    {_id:3, name: "Hanbit"},
];

const List = ({navigation}) => {
    /*
    * 이동하는 화면이 이전 화면의 상세 화면이라면, 상세 화면은 어떤 내용을 렌더링해야 하는지 전달 받아야한다.
    * navigate 함수를 이용할 때 두번째 파라미터에 객체를 전달해서 이동하는 화면에 필요한 정보를 함께 전달하는 기능이 있다.
    *
    * navigation.navigate('Item', {id:item._id, name: item.name})
    * Item 화면으로 이동하면서 항목의 id 와 name 을 함께 전달하도록 만듬.
    * 전달된 내용은 컴포넌트의 props 로 전달되는 route 의 params 를 통해 확인할 수 있다.
    * */
    const _onPress = item =>{
        navigation.navigate('Detail', {id:item._id, name: item.name})
    };

    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map(item => (
                <Button key={item._id} title={item.name} onPress={()=>_onPress(item)} />
            ))}
        </Container>
    );
};

export default List;
