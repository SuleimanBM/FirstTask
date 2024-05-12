import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import Spartan from "../assets/Splassh.png"

export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <Image source={Spartan}  style={styles.image} />
        </View>
    )
}

const screenwidth = Dimensions.get('screen').width
const screenheight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e"
    },
    image:{
        flex: 1,
        height: screenheight,
        width : screenwidth,
        resizeMode: "cover",
        borderRadius: 20,
    }
})