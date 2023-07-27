import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from "react-native";
import { COLORS, SIZES, icons } from "../constants";

const ReadingPage = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <TouchableOpacity
                style={{ marginLeft: SIZES.base }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back_arrow_icon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            </TouchableOpacity>

            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>
                    <Text style={{ fontSize: SIZES.body1, textAlign: "center", color: COLORS.gray }}> To Do ... </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReadingPage;