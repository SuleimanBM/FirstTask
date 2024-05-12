import { Text, StyleSheet, View, Dimensions, Pressable, Image, ScrollView } from "react-native";
import SportyImg from "../assets/SportyImg.png"
import Barcode from "../assets/Barcode.png"
import Spartan from "../assets/Spartan+.png"
import frame from "../assets/frame.jpg"

export default function HomeScreen(){
    return(
        
        <View style={styles.container}>
            <View style={styles.notification}>
                <View style={{flexDirection: 'row',left: 20, top: 10, alignItems: 'flex-end'}}>
                    <Image source={Spartan} style={{height: 50, width: 50 , resizeMode: 'cover'}}/>
                    <View style={{left: 10}}>
                        <Text style={{color: "white", fontSize: 20}}>Spartan</Text>
                        <Text style={{color: "white", fontSize: 12}}>Booking tickets</Text>
                    </View>
                </View>
                <Image source={frame} style={{right: 10, top: 20,height: 30, width: 100 , resizeMode: 'cover'}} />
            </View>
            <View style={styles.spartan}>
                <Image source={SportyImg} style={styles.image}/>
                <View style={{alignSelf: "center", }}>
                    <Text style={{fontSize: 22}}>Make Your Life</Text>
                    <Text style={{fontSize: 22}}>Easier with</Text>
                    <Pressable style={styles.pressable}><Text style={{color: "white", alignSelf: "center", fontSize: 17,}}>Spartan+</Text></Pressable>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10}}>
            <Text style={{color: "#E7F161"}}>Day 215 of 365</Text>
            <Text style={{color: "#E7F161"}}>See all</Text>
            </View>
            
            <View style={styles.ticket}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 20, marginTop: 20}}>
                    <View style={{ justifyContent: 'space-between'}}>
                        <Text style={{color: '#737373'}}> Ticket</Text>
                        <Text style={{fontSize: 25, fontWeight: "condensedBold",}}>$ 2</Text>
                    </View>
                    <Text style={{}}>Hot</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 20, marginTop: 20}}>
                    
                    <View style={{ justifyContent: 'space-between'}}><Text style={{color: '#737373'}}>Date</Text><Text>Sun, jul 2024</Text></View>
                    <View style={{ justifyContent: 'space-between',alignItems: 'center'}}><Text style={{color: '#737373'}}>Outcome</Text><Text>3</Text></View>
                    <View style={{ justifyContent: 'space-between',alignItems: "flex-end"}}><Text style={{color: '#737373'}}>Total Odds</Text><Text>2.20</Text></View>
                </View>
                <View style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between',marginHorizontal: 20, marginTop: 20}}>
                    <Text>Sporty bet</Text>
                    <Image source={Barcode} style={{resizeMode: 'cover', height: 120, width: 250, top: 15}}/>
                </View>
                <View></View>
            </View>
            <View></View>
        </View>
        
    )
}

const screenwidth = Dimensions.get('screen').width
const screenheight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        width: screenwidth,
        
        backgroundColor: "black",
        top: 25,
        borderRadius: 10,
    },
    image:{
        alignSelf: "center"
    },
    ticket:{
        position: "relative",
        width: 0.95 * screenwidth,
        alignSelf: "center",
        flex: 0.4,
        borderRadius: 40,
        backgroundColor: "white",
        
    },
    spartan:{
        position: "relative",
        width: 0.95 * screenwidth,
        left: 10,
        right: 10,
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#E7F161",
        borderRadius: 20,
    },
    notification:{
        flex:0.07,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 10,
    },
    pressable:{
        backgroundColor: "black",
        borderRadius: 50,
        height:40, 
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
    }
    

})
/* Ticket */



/* Spartan Booking Tickets */
/* notificationArea */

/* Auto layout */
/*display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 48px;

position: absolute;
width: 398px;
height: 66.06px;
left: 26px;
top: 65px;*/



