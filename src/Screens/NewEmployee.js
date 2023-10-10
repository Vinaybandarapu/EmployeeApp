import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const NewEmployee = () => {
    const navigation = useNavigation();

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("");
    const [jobtitle, setJobitle] = useState("");
    const [salary, setSalary] = useState("");
    const [data, setData] = useState([]);

    const saveData = () => {
        let obj = {
            firstname: firstname,
            lastname: lastname,
            jobtitle: jobtitle,
            salary: salary,
        };
        if (firstname == '') {
            Alert.alert('Please enter first name')
        } else if (lastname == '') {
            Alert.alert('Please enter Last name')
        } else if (jobtitle == '') {
            Alert.alert('Please enter job title')
        } else if (salary == '') {
            Alert.alert('Please enter salary amount per annum')
        } else {
            AsyncStorage.setItem('obj', JSON.stringify(obj));
            navigation.navigate('EmployeeListScreen');
            // Alert.alert(JSON.stringify(obj))
        }
    }

    // const getData = async () => {
    //     try {
    //         let user = await AsyncStorage.getItem('obj');
    //         let parsed = JSON.parse(user)
    //         Alert.alert(parsed.firstname);
    //     } catch (error) {
    //         Alert.alert('Error:', error.message)
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Employee Details</Text>

            <TextInput style={styles.text}
                label="First Name"
                value={firstname}
                onChangeText={(value) => {
                    setFirstname(value);
                }}
            />
            <TextInput style={styles.text}
                label="Last Name"
                value={lastname}
                onChangeText={(value) => {
                    setLastname(value);
                }}
            />
            <TextInput style={styles.text}
                label="Job Title"
                value={jobtitle}
                onChangeText={(value) => {
                    setJobitle(value);
                }}
            />
            <TextInput style={styles.text}
                label="Salary"
                value={salary}
                maxLength={30}
                autoCapitalize="none"
                // autoCorrect={false}
                onChangeText={(value) => {
                    setSalary(value);
                }}
                keyboardType='numeric'
            />

            <TouchableOpacity onPress={saveData}>
                <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={getData}>
                <Text style={styles.saveButton}>Getdata</Text>
            </TouchableOpacity> */}
        </View>
    )
};

export default NewEmployee;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#76bf08",
        height: '100%'
    },
    title: {
        width: "100%",
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        color: "#477306",
        fontWeight: 'bold',
        textAlign: "center",
        // textTransform: "uppercase",
        margin: 50,
    },

    buttonview: {
        // backgroundColor: "#477306",
        marginTop: '70%',
        width: "100%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        color: "black",
        padding: 18,
        borderRadius: 10,
        // borderWidth:0.5,
        padding: 10,
        textAlign: "center",
        textTransform: "uppercase",
        margin: 10
        // backgroundColor: '#477306'
    },
    saveButton: {
        color: "#fff",
        fontWeight: 'bold',
        padding: 18,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        textTransform: "uppercase",
        margin: 50,
        // width:'50%',
        // alignSelf:'center',
        backgroundColor: '#477306',
        // fontSize:15
    }
});
