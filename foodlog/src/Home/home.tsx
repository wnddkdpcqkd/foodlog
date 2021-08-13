import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface test {
    title : string, 
    subtitle : string , 
    illustration : string
}
export function home() {

    const ENTRIES1 = [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth, Germany',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }
    ];

    const carouselRef = React.useRef<any>()

    
    function _renderItem ({item,index} : { item : test, index : number}) {
        return (
          <View style={{
              backgroundColor:'white',
              borderRadius: 25,
              flex : 1
              
            //   padding: 50,
            //   marginLeft: 25,
            //   marginRight: 25, 
            }}>
            <View style = {{height : 120, borderRadius : 15 }}>
            <Image  source={{uri : item.illustration}}
					resizeMode='cover'
					style={{flex : 5, borderRadius : 20 }} />
            
            </View>
            
            <View style={{ flex : 2,}} >
                <Text style={{  fontSize: 20, fontWeight : 'bold'}}>{item.title}</Text>
                <Text>에베베베베ㅔ</Text>
            </View>
            
          </View>

        )
    }

    return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor : 'white' }}>
                <View style = {{flex : 3,}} >
                    <Image 
                        source={require('../../asset/logo.png')} 
                        resizeMode='contain'
                        style={{ height : 100, width : '100%', }}   
                    />
                </View>
                    
                <View style={{flex :10}}> 
                    <Carousel
                        autoplay={true}
                        style={{flex : 1}}
                        layout={"default"}
                        ref={carouselRef}
                        data={ENTRIES1}
                        sliderWidth={400}
                        itemWidth={200}
                        renderItem={_renderItem}
                        loop={true}
                        // onSnapToItem = { index => this.setState({activeIndex:index}) }
                    />
                </View>
                <View style={{flex :5 , backgroundColor :'blue', alignItems : 'center'}} > 
                    <View style={{ width : '80%' }}>
                        <TouchableOpacity style={{ borderWidth : 2, flexDirection : 'row', borderColor : '#BDECB6'}}>
                            <Text>Add Item</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                
                <View style={{flex :15 , backgroundColor :'green'}} /> 
            </View>
        );
}
const styles = StyleSheet.create({})