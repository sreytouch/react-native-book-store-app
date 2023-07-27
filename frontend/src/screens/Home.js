import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { COLORS, SIZES } from "../constants";
import Header from "../components/Header";
import ListBooks from "../components/Books/ListBooks";
import Categories from "../components/Categories";
// import Account from "../components/Account";
import Reservation from "../components/Reservation";

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 60 }}>
                <Header navigation={navigation} />
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* <Account /> */}
                {/* Books Reservation Process */}
                <View>
                    <Reservation navigation={navigation} />
                </View>

                {/* Books Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <ListBooks navigation={navigation} />
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Categories navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;