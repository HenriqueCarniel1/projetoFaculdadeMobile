import React from 'react';
import {
    ProfileButton,
    HeaderContainer,
    OfferSection,
    SearchInput,
    SearchContainer,
    HeaderView,
    HeaderMenu,
    HeaderTitle,
    View
} from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();

    return (
        <HeaderContainer>
            <HeaderMenu>
                <View>
                    <Entypo name='menu' size={40} />
                    <HeaderTitle>EconoBusca</HeaderTitle>
                </View>

                <View>
                    <ProfileButton onPress={() => navigation.navigate('login')}>
                        <MaterialCommunityIcons name='account' size={25} />
                    </ProfileButton>

                    <ProfileButton onPress={() => navigation.navigate('carrinho')}>
                        <FontAwesome5 name='shopping-cart' size={19} />
                    </ProfileButton>
                </View>

            </HeaderMenu>

            <HeaderView>
                <SearchContainer>
                    <AntDesign name='search1' size={15} />
                    <SearchInput placeholder='Digite o nome de um produto' />
                    <Feather name='x' size={15} />
                </SearchContainer>
            </HeaderView>

            <OfferSection>

            </OfferSection>
        </HeaderContainer>
    );
}

export default Header;
