import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import { FontFamily, images } from '../themes';
// import images from '../themes';

export const Header = ({ props, Title, color ,right}) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{ width: '100%', height: headerHeight != 0 ? headerHeight : 100, backgroundColor: color ? color : 'white', justifyContent: 'flex-end', padding: 10 ,position:'absolute' }}>
            <Text style={{ position: 'absolute', alignSelf: 'center', bottom: 15, fontFamily: FontFamily.Montserrat_Medium }}>{Title && Title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 0.5 }}>
                    <TouchableOpacity onPress={() => props?.navigation?.goBack()} style={{ width: 50, alignItems: 'center' }}>
                        <Image
                            style={{ height: 18, width: 18, marginBottom: 5 }}
                            source={images.close} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5 , alignItems:'flex-end' }}>
                      {right}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})