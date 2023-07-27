import React, { useState, useEffect } from "react";
import { SafeAreaView, 
    View, 
    ScrollView, 
    TouchableOpacity,
    ActivityIndicator,
    FlatList, 
    Image,
    Text 
} from "react-native";
import { FONTS, COLORS, SIZES, icons, images } from "../../constants";
import axios from "axios";

const Books = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        const url = 'http://192.168.1.12:3000/books';
        try {
            await axios.get(url)
            .then(response => {
                setData(response.data);
            })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleSubmit = (values) => {
        alert(values)
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
                        borderRadius:20,
                        padding: 5,
                        marginBottom:10,
                        opacity:0.7
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
                    onPress={() => handleSubmit(item.id)}
                >
                    <View style={{
                        backgroundColor: COLORS.primary,
                        borderRadius:20,
                        padding: 5,
                        marginBottom:10,
                        opacity:0.7
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
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}> List All Books </Text>
                </View>
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View style={{ flex: 1, marginTop: 0, paddingLeft: SIZES.padding }}>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                        // showsVerticalScrollIndicator={false}
                        // horizontal
                        // showsHorizontalScrollIndicator={false}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Books;