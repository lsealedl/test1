import { useState } from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import data001 from "../data/data-001.json"

import ImageSet from '../components/ImageSet';

const ItemScreen = ({route,navigation}) => {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <ImageSet
                        imgSource={{uri:item.photo_url}}
                        main_title={item.name}
                        sub_title={item.description}
                        img_width={150}
                        img_height={150}
            />
            {/* <Text>{Map.item.sample_foods}</Text> */}
            <Text>Sample Foods : </Text>
            <FlatList style={styles.imgSubTitle}
                data={item.sample_foods}
                renderItem={({item})=><Text>{item}</Text>}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2EBBF",
      },
    imgSubTitle: {
        color: "#666",
    },
});
export default ItemScreen;