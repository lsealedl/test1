import { useState } from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import data001 from "../data/data-001.json"

import ImageSet from '../components/ImageSet';

const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data001}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                  <TouchableOpacity 
                    onPress={()=> navigation.navigate("Item",{item})}
                  >
                    <ImageSet
                      imgSource={{uri:item.photo_url}}
                      main_title={item.name}
                      img_width={150}
                      img_height={150}
                    />

                  </TouchableOpacity>
                  )
                }
              
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
});
export default ListScreen;