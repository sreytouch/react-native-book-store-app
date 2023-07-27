import React, { useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { COLORS, SIZES } from "../constants";
import Header from "../components/Header";
import AllBooks from "../components/Books/AllBooks";
import SearchInput from "../components/SearchInput";

const Search = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 60 }}>
                <Header />
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <SearchInput/>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <AllBooks navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search;