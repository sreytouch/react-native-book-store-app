import React from "react"; 
import {
    View,
    Text,
    ScrollView,
    SafeAreaView
} from "react-native";
import { COLORS, SIZES } from "../constants";

const Notification = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>
                    <Text style={{ textAlign: "center", fontSize: SIZES.h3, color: COLORS.gray }}> It is empty here :-( </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;