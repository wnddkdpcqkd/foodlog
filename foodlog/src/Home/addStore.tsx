import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

interface addStoreProps {

}

export function addStore(props : addStoreProps) {
        return (
            <View style={{flex : 1, backgroundColor : 'white', alignItems : 'center'}}>
                <View style={{flexDirection : 'row'}}>
                    <View style={[{flex : 1},styles.center]}>
                        <Text>가게 이름</Text>
                    </View>
                    
                    <View style={[{flex : 2, },styles.center,styles.textInput]}>
                        <TextInput></TextInput>
                    </View>

                    <View style={{flex : 1}} />
                </View>

                <View style={{flexDirection : 'row'}}>
                    <View style={[{flex : 1,},styles.center]}>
                        <Text>가게 위치</Text>
                    </View>
                    
                    <View style={[{flex : 2, },styles.center,styles.textInput]}>
                        <TextInput></TextInput>
                    </View>
                    <View style={{flex : 1}} />

                </View>

                <View>
                    <Text>가격</Text>
                    <Text>맛</Text>
                    <Text>분위기</Text>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    center : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    textInput: {
        borderBottomWidth : 1, borderBottomColor : 'black'
    }
})