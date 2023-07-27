
import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { reservationProccessDatas } from "../services/Books";

const ReservationProccess = ({ navigation }) => {
    const [reservationProccess, setReservationProccess] = React.useState(reservationProccessDatas);
    const [selectedReservation, setSelectedReservation] = React.useState(1);

    function renderCategoryHeader() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedReservation(item.id)}
                >
                    {
                        selectedReservation == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white, textDecorationLine: 'underline' }}>{item.name}</Text>
                    }
                    {
                        selectedReservation != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.name}</Text>
                    }
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={reservationProccess}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <Text
                    style={{
                        fontSize: SIZES.h3,
                        color: COLORS.lightRed,
                        marginTop: 20
                    }}
                >
                    It is empty here :-(
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 50, alignItems: 'flex-end', marginBottom: 20 }}>
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.base,
                        backgroundColor: COLORS.primary,
                        borderRadius: 50,
                        padding: 5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>Reservation Proccess</Text>
                </View>
            </View>
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>
                    {renderCategoryHeader()}
                </View>
                <View>
                    {renderCategoryData()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ReservationProccess;