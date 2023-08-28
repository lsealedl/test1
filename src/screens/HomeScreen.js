import{View, Text, StyleSheet, TouchableOpacity} from "react-native"
import ImageSet from "../components/ImageSet";
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageSet
                imgSource={require("../img/Oranges.jpg")}
                main_title="Pongsakorn Netprachak"
                sub_title="6421600166"
            />
            <ImageSet
                imgSource={{uri:'https://img.freepik.com/premium-photo/ripe-juicy-orange-orange-slice-isolated-white-background_531456-766.jpg',}}
                main_title="Pongsakorn Netprachak"
                sub_title="6421600166"
            />
            <TouchableOpacity 
                style={styles.btnView}
                onPress={()=> navigation.navigate("List")}
            >
            <Text style={styles.btnTitle}>Let's get started</Text>
            </TouchableOpacity>
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
      btnView: {
        width: 200,
        backgroundColor: "#F3B562",
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 10,
        alignItems: "center",
      },
      btnTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#5C4B51",
      },
});

export default HomeScreen;