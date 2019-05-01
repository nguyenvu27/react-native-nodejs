import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import hotels from '../assets/hotels.png';
import rooms from '../assets/rooms.png';
import { Card } from 'react-native-paper';

export default class ScreenMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.flex_box1}
          onPress={() => {
            this.props.navigation.navigate('Hotels');
          }}>
          <Card style={styles.flex_box1}>
            <View style={styles.flex_view1}>
              <Image source={hotels} style={styles.flex_box1_image} />
            </View>
            <View style={styles.flex_view2}>
              <Text style={styles.flex_view1_text}>Hotels</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flex_box1}
          onPress={() => {
            this.props.navigation.navigate('Rooms');
          }}>
          <Card style={styles.flex_box1}>
            <View style={styles.flex_view1}>
              <Image source={rooms} style={styles.flex_box1_image} />
            </View>
            <View style={styles.flex_view2}>
              <Text style={styles.flex_view1_text}>Rooms</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
  },
  flex_box1: {
    flex: 1,
    padding: 5,
    margin: 10,
  },
  flex_box1_image: {
    width: 300,
    height: 130,
  },
  flex_view1: {
    flex: 2,
  },
  flex_view2: {
    flex: 1,
  },
  flex_view1_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
