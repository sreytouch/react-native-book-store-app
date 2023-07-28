import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    RefreshControl
} from "react-native";
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import axios from "axios";
import { FONTS, COLORS, SIZES, icons, images } from "../../constants";
import { baseUrl } from "../../services/BaseApi";

const Books = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            await axios.get(`${baseUrl}books`)
                .then(response => {
                    setRefreshing(true);
                    setData(response.data);
                    setTimeout(() => {
                        setRefreshing(false);
                    }, 500);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error(error);
        } finally {
            setRefreshing(false);
        }
    };

    const handleSubmitDelete = async (values) => {
        try {
            const response = await axios.delete(`${baseUrl}book/${values}`);
            if (response.status === 200) {
                setRefreshing(true);
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    setRefreshing(false);
                    navigation.navigate('Home');
                }, 500);
            } else {
                throw new Error("Failed to delete resource");
            }
        } catch (error) {
            alert("Failed to delete resource!!");
            setRefreshing(false);
        }
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginVertical: SIZES.base }}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row' }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={images.reactnative}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />

                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                        {/* Book name and author */}
                        <View>
                            <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.title}</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                        </View>

                        {/* Book Info */}
                        <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>200</Text>

                            <Image
                                source={icons.read_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>10</Text>
                        </View>

                        {/* Genre */}
                        <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Bookmark Button */}
                <TouchableOpacity
                    style={{ position: 'absolute', top: 5, right: 15 }}
                    onPress={() => navigation.navigate("EditBook", item.id)}
                >
                    <View style={{
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                        padding: 5,
                        marginBottom: 10,
                        opacity: 0.7
                    }}>
                        <Image
                            source={icons.edit_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 50, right: 15 }}
                    onPress={() => handleSubmitDelete(item.id)}
                >
                    <View style={{
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                        padding: 5,
                        marginBottom: 10,
                        opacity: 0.7
                    }}>
                        <Image
                            source={icons.delete_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 50, alignItems: 'flex-end', marginBottom: 20 }}>
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.base,
                        backgroundColor: COLORS.primary,
                        borderRadius: 50,
                        padding: 5
                    }}
                    onPress={() => navigation.navigate("Home")}
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
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}> List All Books </Text>
                </View>
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={getMovies} />
            }>
                {data.length == 0 ?
                    <View>
                        <Text style={{ fontSize: SIZES.body2, textAlign: "center", color: COLORS.lightRed }}> No Data ... </Text>
                    </View>
                    :
                    <View style={{ flex: 1, marginTop: 0, paddingLeft: SIZES.padding }}>
                        <FancyAlert
                            visible={visible}
                            icon={<View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.primary,
                                borderRadius: 50,
                                width: '100%',
                            }}><Text>🤓</Text></View>}
                            style={{ backgroundColor: 'white' }}
                        >
                            <Text style={{ marginTop: -16, marginBottom: 32 }}>successfully deleted!!</Text>
                        </FancyAlert>
                        {refreshing
                            ? <ActivityIndicator /> :
                            <FlatList
                                data={data}
                                keyExtractor={item => `${item.id}`}
                                enableEmptySections={true}
                                renderItem={renderItem}
                            />
                        }
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Books;