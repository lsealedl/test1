import { useState } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import data001 from "../data/data-001.json"

import ImageSet from '../components/ImageSet';

const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>{item.id}:{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text> */}
            <FlatList
                data={data001}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                  <ImageSet
                    imgSource={{uri:item.photo_url}}
                    main_title={item.name}
                  />
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