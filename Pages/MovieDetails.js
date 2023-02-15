import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

function MovieDetails({navigation, route }) {
    const ApiImg = "https://image.tmdb.org/t/p/w500/";
    const id = route.params.id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
            .then((res) => setMovie(res.data))
            .catch((err) => alert(err))
    }, [id])

    return (
        <Card style={Styles.container}>
            <Card.Cover style={Styles.img} source={{ uri: ApiImg + movie.poster_path }} />
            <Card.Content>
                <Title style={{ color: 'burlywood', fontWeight: 'bold', textAlign: 'center',boxShadow:'5px 5px 5px  burlywood ' }}  >{movie.title} </Title>
            </Card.Content>
            <Card.Content>
                <Paragraph style={{ color: 'whitesmoke', fontSize: '18', fontFamily: "Georgia, Times, Times New Roman, serif", textAlign: 'center' }} >{movie.overview}</Paragraph>
            </Card.Content>
            <Card.Actions>
            </Card.Actions>
        </Card>
    )
}

export default MovieDetails;
const Styles = StyleSheet.create({
    container: {
        margin: 'auto',
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 50,
        width: 500,


    },
    img: {
        height: 400,
        width: 300,
        alignSelf:'center',
    }
})