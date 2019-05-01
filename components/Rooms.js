import * as React from 'react';
import { Text, View, StyleSheet, Image,FlatList } from 'react-native';
import hotels from '../assets/hotels.png';
import rooms from '../assets/rooms.png';
import { Card } from 'react-native-paper';
export default class Rooms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idks: this.props.navigation.state.params.idks,
      nameHotels: this.props.navigation.state.params.name,
      room: [],
    }
    fetch('http://172.20.10.2:3000/api/rooms/'+ this.state.idks)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          room: responseJson.ROOMS,
        });
        return responseJson.ROOMS;
      })
      .catch(error => {
        console.error(error);
      }
      );
  }
  render() {
    return (
      <View style={styles.container}>
       <FlatList
          data={this.state.room}
          renderItem={({ item }) => 
            <View>
          <Card style={styles.flex_box1}>
          <Text style={{fontSize: 20,
    fontWeight: 'bold', marginLeft: 120 }}>Rooms</Text>
            
            <View style={styles.flex_view2}>
            <View style={styles.row}>
                    <Text style={styles.flex_text}>Rooms Number:</Text>
                   <Text style={styles.flex_text}>{item.room_number} </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Floor:</Text>
                <Text style={styles.flex_text}>{item.floor}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Single Rooms:</Text>
               <Text style={styles.flex_text}>{item.single_room}</Text> 
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Hotels:</Text>
               <Text style={styles.flex_text}>{this.state.nameHotels}</Text> 
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Price:</Text>
                <Text style={styles.flex_text}>{item.price}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Status: </Text>
           <Text style={styles.flex_text}>{item.status}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Detail:</Text>
           <Text style={styles.flex_text}>Detail: {item.detail}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.flex_text}>Image:</Text>
          <View style={styles.flex_view1}>
              <Image source={{uri:'http://172.20.10.2:3000/' +item.image}} style={styles.flex_box1_image} />
            </View>
                  </View>
              
              
              
              
              
              
              
            </View>
          </Card>
          </View>
          }
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
  },
  flex_box1_image: {
    width: 300,
    height: 130,
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
