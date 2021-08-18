import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

interface addStoreProps {

}

export function addStore(props : addStoreProps) {
        return (
            <View style={{flex : 1, backgroundColor : 'white', alignItems : 'center'}}>
                <View style={{flexDirection : 'row'}}>
                    <View style={{flex : 1, alignItems: 'center'}}>
                        <Text>가게 이름</Text>
                    </View>
                    
                    <View style={{flex : 2, borderBottomWidth : 1, borderBottomColor : 'black'}}>
                        <TextInput></TextInput>
                    </View>
                    
                    
                </View>
            </View>
        );
}
const styles = StyleSheet.create({})