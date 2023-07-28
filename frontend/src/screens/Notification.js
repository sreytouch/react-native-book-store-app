import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  RefreshControl,
} from 'react-native';

const Notification = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  onRefresh = () => {
    setRefreshing(true);
    this.wait(500).then(() => {
      setRefreshing(false);
    });
  }

  return (
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            <View>
                <Text style={{ textAlign: "center" }}> TO DO ... </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
  )
}
export default Notification;

