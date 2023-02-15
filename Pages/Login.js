import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
export default function Login({ navigation }) {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", name: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('This field is required'),
                    email: Yup.string().email('Invalid Email Address').required('This field is required'),
                })}
                onSubmit={(values) => {
                    navigation.navigate("Home")
                }}
            >
                {props => (

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>Email</Text>
                        <TextInput onChangeText={props.handleChange("email")} placeholder="Enter your e-mail" style={styles.input} />
                        {props.touched.email && props.errors.email ? (<Text style={styles.error}>{props.errors.email} </Text>) : null}
                        <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>Name</Text>
                        <TextInput onChangeText={props.handleChange("name")} placeholder="Enter your name" style={styles.input} />
                        {props.touched.name && props.errors.name ? (<Text style={styles.error} >{props.errors.name} </Text>) : null}
                        <TouchableOpacity onPress={props.handleSubmit} style={styles.btn} >
                            <Text style={{ textAlign: 'center', color: 'burlywood' }}>Login</Text>
                        </TouchableOpacity>

                    </View>


                )}


            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "burlywood",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "black",
        color: 'burlywood',
        width: "100%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    error: {
        color: 'red',
        alignItems: 'center',
    },
    btn: {
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        marginLeft: '72px',
        margin: 'auto'
    },
});