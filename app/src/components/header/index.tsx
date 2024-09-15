import React from 'react';
import { Button, Container, Img, Input } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();

    return ( 
        <Container>
            <Img source={require('@/assets/images/logo.png')} />
            <Input placeholder='Digite o nome de um produto'/>
            <Button onPress={() => navigation.navigate('login')}>
                <MaterialCommunityIcons name='account' size={25} />
            </Button>
        </Container>
    );
}

export default Header;
