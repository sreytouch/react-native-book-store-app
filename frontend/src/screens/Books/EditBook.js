import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useNavigation } from "@react-navigation/native";
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Pressable,
    ActivityIndicator
} from 'react-native';
import axios from "axios";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import validationSchema from "./validationSchema";
import Input from "../../components/Form/Input";
import { baseUrl } from "../../services/BaseApi";


const EditBook = ({ route }) => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = useState([]);
    const id = route.params;
    const onSubmit = async (values) => {
        setIsLoading(true);
        try {
            const response = await axios.put(`${baseUrl}book/${id}`, values);
            if (response.status === 200) {
                setIsLoading(false);
                setVisible(true);
                setTimeout(() => {
                  navigation.navigate('Books');
                  setVisible(false);
                }, 3000);
            } else {
                throw new Error("An error has ");
            }
        } catch (error) {
            alert("An error has occurred");
            setIsLoading(false);
        }
    };

    const getMovies = async () => {
        try {
            await axios.get(`${baseUrl}book/${id}`)
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

    const formik = useFormik({
        initialValues: data,
        enableReinitialize: true,
        validationSchema,
        onSubmit,
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        isValid,
        handleSubmit,
    } = formik;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary, marginTop: 0 }}>
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
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}> Edit Book </Text>
                </View>
            </View>
            <View style={{ flex: 1, padding: 24 }}>
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
                    <Text style={{ marginTop: -16, marginBottom: 32 }}>successfully save!!</Text>
                </FancyAlert>
                {!isLoading ?  (
                    <ActivityIndicator />
                ) : (

                    <View style={styles.container}>
                        <View style={styles.formFieldWrapper}>
                            <Text style={styles.labelText}>Title:</Text>
                            <Input
                                placeholder="Enter your title"
                                onChangeText={handleChange('title')}
                                value={values.title}
                                errorMessage={touched.title && errors.title}
                                name="title"
                                underlineColorAndroid="transparent"
                                onBlur={handleBlur('title')}
                                style={[styles.formFieldText]}
                                multiline={true}
                                autoCapitalize={'none'}
                            />
                        </View>
                        <View style={styles.formFieldWrapper}>
                            <Text style={styles.labelText}>Author:</Text>
                            <Input
                                placeholder="Enter author"
                                onChangeText={handleChange('author')}
                                value={values.author}
                                errorMessage={touched.author && errors.author}
                                name="author"
                                underlineColorAndroid="transparent"
                                onBlur={handleBlur('author')}
                                style={[styles.formFieldText]}
                                multiline={true}
                                autoCapitalize={'none'}
                            />
                        </View>
                        <View style={styles.formFieldWrapper}>
                            <Text style={styles.labelText}>Publication Year:</Text>
                            <Input
                                placeholder="Enter Publication Year"
                                onChangeText={handleChange('publicationYear')}
                                value={values.publicationYear}
                                errorMessage={touched.publicationYear && errors.publicationYear}
                                name="publicationYear"
                                type={"number"}
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                onBlur={handleBlur('publicationYear')}
                                style={[styles.formFieldText]}
                                multiline={true}
                                pattern="[0-9]*"
                            />
                        </View>
                        <View style={styles.formFieldWrapper}>
                            <Text style={styles.labelText}>Content:</Text>
                            <Input
                                placeholder="Enter content"
                                onChangeText={handleChange('content')}
                                value={values.content}
                                errorMessage={touched.content && errors.content}
                                name="content"
                                underlineColorAndroid="transparent"
                                onBlur={handleBlur('content')}
                                style={[styles.formFieldText, styles.textArea]}
                                multiline={true}
                                numberOfLines={10}
                                autoCapitalize={'none'}
                            />
                            <Input
                                value="1"
                                name="viewCount"
                                style={{ display: "none" }}
                            />
                            <Input
                                value="true"
                                name="published"
                                style={{ display: "none" }}
                            />
                        </View>

                        <Pressable
                            style={styles.button}
                            onPress={handleSubmit}
                            isDisabled={!isValid || isSubmitting}
                            isLoading={isSubmitting}
                        >
                            <Text style={styles.save}>Save</Text>
                        </Pressable>
                    </View>
                )}
            </View>

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: COLORS.lightGray4,
        padding: SIZES.padding3,
        borderRadius: 20
    },
    textAreaContainer: {
        borderColor: COLORS.grey20,
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        textAlignVertical: 'top',
        height: 150,
        justifyContent: "flex-start",
    },
    header: {
        fontSize: 20,
        paddingTop: 30
    },
    formFieldWrapper: {
        marginBottom: 0,
        marginTop: 0
    },
    formFieldText: {
        justifyContent: "flex-start",
        fontSize: 14,
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
    },
    labelText: {
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 5,
        paddingTop: 0
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: COLORS.primary,
        marginBottom: 10
    },
    save: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: COLORS.secondary,
    },
})

export default EditBook;