import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

interface test {
  title: string;
  subtitle: string;
  illustration: string;
}
export function home() {
  const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ];
  const actions = [
    {
      text: 'Accessibility',
      icon: require('../../asset/logo.png'),
      name: 'bt_accessibility',
      position: 2,
    },
    {
      text: 'Language',
      icon: require('../../asset/logo.png'),
      name: 'bt_language',
      position: 1,
    },
    {
      text: 'Location',
      icon: require('../../asset/logo.png'),
      name: 'bt_room',
      position: 3,
    },
    {
      text: 'Video',
      icon: require('../../asset/logo.png'),
      name: 'bt_videocam',
      position: 4,
    },
  ];

  const carouselRef = React.useRef<any>();

  function _renderItem({item, index}: {item: test; index: number}) {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 25,
          flex: 1,
        }}>
        <View style={{height: 120, borderRadius: 15}}>
          <Image
            source={{uri: item.illustration}}
            resizeMode="cover"
            style={{flex: 5, borderRadius: 20}}
          />
        </View>

        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
          <Text>에베베베베ㅔ</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{flex: 3}}>
        <Image
          source={require('../../asset/logo.png')}
          resizeMode="contain"
          style={{height: 100, width: '100%'}}
        />
      </View>

      <View style={{flex: 10, marginTop: 20}}>
        <Carousel
          autoplay={true}
          style={{flex: 1}}
          layout={'default'}
          ref={carouselRef}
          data={ENTRIES1}
          sliderWidth={400}
          itemWidth={200}
          renderItem={_renderItem}
          loop={true}
          // onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
      </View>

      <View style={{flex: 2, backgroundColor: 'yellow'}}>
        <View style={{flexDirection : 'row', justifyContent : 'space-between', marginLeft : 30, marginRight: 30 }}>
          <Text style={{fontSize : 25}}> XXX 개의 음식점  </Text>
          <View style={{flexDirection : 'row'}}>
            <FontAwesomeIcon name="bars" style={{fontSize : 30, color : 'rgb(30, 158, 66)', marginRight : 20}} />
            <FontAwesomeIcon name="th-large" style={{fontSize : 30, color : 'rgb(30, 158, 66)'}} />
          </View>
        </View>
      </View>

      {/* <View style={{flex :3 , backgroundColor :'white', alignItems : 'center', marginTop : 10}} > 
                    <View style={{ width : '80%' }}>
                        <TouchableOpacity style={{ justifyContent : 'center' ,alignItems : 'center', borderWidth : 2, flexDirection : 'row', borderColor : '#BDECB6' , borderRadius : 15}}>
                            <Icon name="add-outline" style={{ flex : 1, fontSize : 30, color: '#BDECB6'}}/>
                            <Text style={{flex : 2, justifyContent : 'center' ,color : '#BDECB6' , fontSize : 30}}>Add Item</Text>

                        </TouchableOpacity>
                    </View>

                    
                </View>  */}

    <View style={{flex: 15, backgroundColor: 'green'}} />

    
    <ActionButton buttonColor='#FA8072'>
        <ActionButton.Item buttonColor='#FA8072' title="게시글 작성" onPress={() =>
            Alert.alert('로그인이 필요합니다')
        }>
            <FontAwesomeIcon name="pencil" style={{fontSize : 15}} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#FA8072' title="컨텐츠 작성" onPress={() => 	
            Alert.alert('로그인이 필요합니다')
        }>
            <FontAwesomeIcon name="film" style={{fontSize : 15}} />
        </ActionButton.Item>
    </ActionButton>

    </View>
  );
}
const styles = StyleSheet.create({});
