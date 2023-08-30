import{Text, StyleSheet,Image,View} from "react-native"

const ImageSet = ({imgSource, main_title, sub_title ,img_width, img_height}) =>{
    return(
        <View style={styles.imageContainer}>
            <Image style={[styles.image ,{width:img_width,height:img_height}]}source={imgSource}/>
            <Text style={styles.imgTitle}>{main_title}</Text>
            <Text style={styles.imgSubTitle}>{sub_title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
        marginVertical: 10,
      },
      image: {
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "#000",
      },
      imgTitle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      imgSubTitle: {
        color: "#666",
      },
});

export default ImageSet;