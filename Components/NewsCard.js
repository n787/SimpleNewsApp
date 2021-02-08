import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const NewsCard = ({item}) =>{
    return(
        <View style={styles.cardView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source ={{uri: item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
           
    </View>
    )
}
const styles = StyleSheet.create({
    cardView:{
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: width* 0.05,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset:{ width:0.5, height:0.5 },
    },
     title:{
        marginHorizontal: width * 0.05, 
        marginVertical: width*0.03,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
  description:{
        marginVertical: width * 0.02, 
        marginHorizontal: width* 0.03,
        color: '#a9a9a9',
        fontSize: 18,
    },
    image:{
        height: height/5,
        marginLeft: width* 0.05,
        marginRight : width*0.05,
        marginVertical: width *0.01,
    },
    author:{
        marginVertical: height* 0.0025,
        marginHorizontal : width * 0.05,
        fontSize: 16,
        color : '#d3d3d3',
    }, 
})
export default NewsCard