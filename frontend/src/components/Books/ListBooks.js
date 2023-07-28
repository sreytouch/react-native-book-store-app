import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from "react-native";
import axios from "axios";
import { FONTS, COLORS, SIZES, icons, images } from "../../constants";
import { baseUrl } from "../../services/BaseApi";

const ListBooks = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
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

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index === 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    marginTop: 0
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
            >
                {/* Book Cover */}
                <Image
                    source={images.reactnative}
                    resizeMode="cover"
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />
                <View>
                    <Text style={{ color: COLORS.primary, fontSize: SIZES.font, fontWeight: 600, marginTop: 5 }}> {item.title} </Text>
                </View>

                {/* Book Info */}
                <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icons.clock_icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>10%</Text>

                    <Image
                        source={icons.page_icon}
                        style={{
                            marginLeft: SIZES.radius,
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>200</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Books")}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>view all</Text>
                </TouchableOpacity>
            </View>

            {/* Books */}
            {data.length == 0 ?
                <View>
                    <Text style={{ fontSize: SIZES.body2, textAlign: "center", color: COLORS.lightRed }}> No Data ... </Text>
                </View>
                :
                <View style={{ flex: 1, marginTop: 10 }}>
                    {refreshing
                        ? <ActivityIndicator /> :
                        <FlatList
                            data={data}
                            keyExtractor={item => `${item.id}`}
                            enableEmptySections={true}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={getMovies} />
                            }
                        />
                    }
                </View>
            }
        </View>
    )
}

export default ListBooks;