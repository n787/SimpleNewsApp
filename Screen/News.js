import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewsCard from '../Components/NewsCard';
import newsAPI from '../apis/News';
import { FlatList } from 'react-native-gesture-handler';

const News = ({navigation}) =>{

    const [news, setNews] = useState([]);

useEffect(() => {
    getNewsfromAPI()
}, []);

//const newResponse = async() =>{
   // const response = await newsAPI.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b10c40934f9949df8907e7af89e3e7eb')
    //    console.log(response.data);
   // }

    function getNewsfromAPI(){
        newsAPI.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b10c40934f9949df8907e7af89e3e7eb')
        .then(function(response){
            setNews(response.data);
           // console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })

    }
    if(!news){
        return null
    }
    return(
        <View>
            <FlatList 
            data = {news.articles}
            keyExtractor ={(item, index) => 'key' + index}
            renderItem = {({item}) => {
                return <NewsCard item = {item}/>
            }} />
        </View>
    )
}

export default News