import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";
import LineDividerDetail from "../../components/lines/LineDividerDetail";

const BookInfoSection = ({ navigation, book }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.reactnative}
                resizeMode="cover"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    opacity: 0.2
                }}
            />

            {/* Color Overlay */}
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: book.backgroundColor
                }}
            >
            </View>

            {/* Navigation header */}
            <View style={{
                marginTop: 9,
                flexDirection: 'row',
                paddingHorizontal: SIZES.radius,
                height: 80,
                alignItems: 'flex-end'
            }}>
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
                            height: 25,
                            tintColor: book.navTintColor,
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}> Book Detail </Text>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 35,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => navigation.navigate("EditBook")}
                >
                    <View style={{ 
                        flex: 1, 
                        flexDirection: 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        opacity:0.8 
                    }}>
                        <View style={{ 
                            width: 30, 
                            height: 30, 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            borderRadius: 25, 
                            backgroundColor: COLORS.white 
                        }}>
                            <Image
                                source={icons.edit_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    opacity:0.5
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>Edit Book</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Book Cover */}
            <View style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                <Image
                    // source={book.bookCover}
                    source={images.reactnative}
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        width: 150,
                        height: "auto"
                    }}
                />
            </View>

            {/* Book Name and Author */}
            <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>{book.title}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.white }}>{book.author}</Text>
            </View>

            {/* Book Info */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 20,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: "rgba(0,0,0,0.3)"
                }}
            >
                {/* Rating */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>5</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                </View>

                <LineDividerDetail />

                {/* Pages */}
                <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>15</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>Number of Page</Text>
                </View>

                <LineDividerDetail />

                {/* Language */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>English</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                </View>
            </View>
        </View>
    )
}

export default BookInfoSection;