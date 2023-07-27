import React from "react";
import { View } from "react-native";
import { COLORS } from "../../constants";

const LineDividerDetail = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

export default LineDividerDetail;