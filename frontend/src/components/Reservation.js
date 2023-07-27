import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import LineDividerDetail from "./lines/LineDividerDetail";
const Reservation = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>Reservation Process</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ReservationProccess")}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>view all</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', }}>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 13,
                        margin: SIZES.padding,
                        marginTop: 10,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                >
                    {/* Unpaid */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                            <Image
                                source={icons.unpaid_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Unpaid</Text>
                    </View>

                    <LineDividerDetail />

                    {/* Proccessing */}
                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                            <Image
                                source={icons.proccessing_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Proccessing</Text>
                    </View>

                    <LineDividerDetail />

                    {/* Status */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                            <Image
                                source={icons.status_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Status</Text>
                    </View>

                    <LineDividerDetail />

                    {/* Returns */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                            <Image
                                source={icons.return_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Returns</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Reservation;