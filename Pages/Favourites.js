
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RemoveFromFav, Counter } from '../Store/Action';
import { Card, Title } from 'react-native-paper';
function Favourites() {

    const ApiImg = "https://image.tmdb.org/t/p/w500/";


    const add = useSelector((state) => state.cart)


    const dispatch = useDispatch();
    const deletemovie = (movie) => {
        console.log(movie.id)
        const movieindex = add.findIndex(ele => ele.id === movie.id)
        if (movieindex > -1) {

            dispatch(RemoveFromFav(add.splice(movieindex, 1)))
            dispatch(Counter(add.length - 1))
        }

    }

    return (
        <ScrollView>
            <View >
                {add.map((movie) => {
                    return (

                        <Card style={Styles.container} key={movie.id}>
                            <Card.Cover style={Styles.img} source={{ uri: ApiImg + movie.poster_path }} />
                            <Card.Content style={{ alignItems: 'center' }}>
                                <Title style={{color: 'burlywood', fontWeight: 'bold', textAlign: 'center', boxShadow: '5px 5px 5px  burlywood '}} >{movie.title}</Title>
                            </Card.Content>
                            <br/>
                            <TouchableOpacity onPress={() => deletemovie(movie)} style={Styles.btn} >
                                <Text style={{ color: 'black', fontWeight: 'bold'}} >Remove</Text>
                            </TouchableOpacity>


                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default Favourites;


const Styles = StyleSheet.create({
    container: {
                margin: 'auto',
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 50,
                width: 500,
                marginTop:'20px'
            },
            btn: {
                height: 35,
                borderRadius:'15px',
                alignSelf: "center",
                justifyContent: "center",
                textAlign:'center',
                color: 'black',
                backgroundColor: "burlywood",
                width: "25%",
                marginBottom:'55px'
            },
            img: {
                height: 400,
                width: 300,
                alignSelf: 'center',
            }
})


