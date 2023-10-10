import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

const AddEmployee = () => {

  const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonview} onPress={()=>{
                navigation.navigate('NewEmployee')
                }}>
                <Text style={styles.text}>Add Employee</Text>
            </TouchableOpacity>
        </View>
    )
};

export default AddEmployee;

const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: "#76bf08",
        height: '100%'
    },

    buttonview: {
        backgroundColor: "#477306",
        marginTop: '70%',
        width: "100%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: "#fff",
        padding: 18,
        borderRadius: 20,
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: '#477306'
    }
});
