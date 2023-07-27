import React from "react";
import { View } from "react-native";
import { COLORS } from "../../constants";
import ReadButton from "../../components/Books/ReadButton";
import BookDescription from "../../components/Books/BookDescription";
import BookInfoSection from "../../components/Books/BookInfoSection";

const BookDetail = ({ route, navigation }) => {

    const [book, setBook] = React.useState(null);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])

    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>
                    <BookInfoSection route={route} navigation={navigation} book={book} />
                </View>

                {/* Description */}
                <View style={{ flex: 2 }}>
                    <BookDescription book={book} />
                </View>

                {/* Buttons */}
                <View style={{ height: 70, marginBottom: 30 }}>
                    <ReadButton navigation={navigation} />
                </View>
            </View>
        )
    } else {
        return (<></>)
    }

}

export default BookDetail;