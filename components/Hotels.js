import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import hotels from '../assets/hotels.png';
import rooms from '../assets/rooms.png';
import { Card } from 'react-native-paper';
export default class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
    }
    fetch('http://172.20.10.2:3000/api/hotels')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          hotel: responseJson.HOTELS,
        });
        return responseJson.HOTELS;
      })
      .catch(error => {
        console.error(error);
      });

  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.hotel}
          renderItem={({ item }) => <View>
            <TouchableOpacity
              style={styles.flex_box1}
              onPress={() => {
                this.props.navigation.navigate('Rooms', { idks: item._id, name: item.name });
                console.log(item._id);
              }}>
              <Card style={styles.flex_box1}>
                <Text style={{fontSize: 20,
    fontWeight: 'bold', marginLeft: 120 }}>Hotels</Text>
               
                <View style={styles.flex_view2}>
                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Hotels:</Text>
                    <Text style={styles.flex_text}>{item.name} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>City:</Text>
                    <Text style={styles.flex_text}>{item.city} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Address:</Text>
                    <Text style={styles.flex_text}>{item.address} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Ower:</Text>
                    <Text style={styles.flex_text}>{item.owner} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>License Number:</Text>
                    <Text style={styles.flex_text}>{item.license_number} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Total Floor:</Text>
                    <Text style={styles.flex_text}>{item.total_floor} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Image:</Text>
                     <View style={styles.flex_view1}>
                  <Image source={{ uri: 'http://172.20.10.2:3000/' + item.image }} style={styles.flex_box1_image} />
                </View>
                  </View>

                  

                </View>
              </Card>
            </TouchableOpacity>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  flex_box1: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFCC',
  },
  flex_box1_image: {
    width: 200,
    height: 120,
  },
  flex_view1: {
    flex: 1.7,


  },
  flex_view2: {
    flex: 1,
  },
  flex_view1_text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,

  },
  flex_text: {
    margin: 5,
    marginLeft: 50,

  },
  row: {
    flexDirection: 'row',
  }
});
