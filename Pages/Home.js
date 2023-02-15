import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity, Text,StyleSheet } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@rneui/themed";
import { AddToFav, Counter } from '../Store/Action';


function Home({ navigation }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87')
            .then((res) => setMovies(res.data.results))
            .catch((err) => alert(err))
    }, []);


    const fav = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const addFav = (movie) => {
        const find = fav.includes(movie)
        if (!find) {

            console.log(fav)

            dispatch(AddToFav(fav.push(movie)))
            dispatch(Counter(fav.length))

        }
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: 'black' }}>
                <View style={{ margin: 'auto', backgroundColor: 'burlywood', boxShadow: '5px 5px 10px black' }}>
                    {movies.map((movie) => {
                        return (
                            <Card style={{ backgroundColor: 'black' }}>
                                <Card.Image style={{ width: 450, height: 650, borderRadius: '25px' }}
                                    source={{
                                        uri:
                                            `https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`
                                    }}
                                    onPress={() => { navigation.navigate("MovieDetails", { id: movie.id }) }}
                                /><br />
                                <Card.Title style={{ color: 'burlywood', fontFamily: 'Georgia, Times, Times New Roman, serif', fontSize: '20px', boxShadow: '5px 5px 10px burlywood ' }}>
                                    {movie.title}
                                </Card.Title>
                                <TouchableOpacity onPress={() => addFav(movie)} >
                                    <Text style={Styles.fav}>Add To Fav</Text>
                                </TouchableOpacity>
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>

        </>
    );
}

export default Home;

const Styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#1b1b1e',
        padding: 50,
        margin: 50,
    },
    img: {
        height: 500,
        width: 400,
        alignSelf: 'center',
        marginRight: 80
    },
    fav:{
        fontWeight:"bold",
        width: "30%",
        height: 35,
        borderRadius:'15px',
        alignItems: "center",
        textAlign:'center',
        justifyContent: "center",
        backgroundColor: "burlywood",
        margin: 'auto'
    }
})


