import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const EmployeeListScreen = (props) => {

    const [data, setData] = useState('');
    const [isStarFilled, setIsStarFilled] = useState(false);
    const toggleStar = () => {
        setIsStarFilled(!isStarFilled);
    };

    console.log('EmployeeListScreen', data)

    const EmployeeData = async() => {
        try {
            let user = await AsyncStorage.getItem('obj');
            let parsed = JSON.parse(user)
            setData(parsed)
            console.log(parsed.firstname)

        } catch (error) {
            Alert.alert('Error:', error.message)
        }
    }


    useEffect(async () => {
        EmployeeData()
    }, []);

    let str = data.firstname + ' ' + data.lastname
    let firstLetters = str.split(' ').map((e) => e[0]).join('')
    // console.log('firstLetters',firstLetters)



    return (
        <View style={styles.container}>

            <View style={styles.left}>
                <View style={styles.avatar}><Text style={{ alignSelf: 'center', top: 15 }}>{firstLetters}</Text></View>
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>{data.firstname} {data.lastname}</Text>
                <Text style={styles.subtitle}>{data.jobtitle}</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={toggleStar}>
                    <Icon name={isStarFilled ? 'star' : 'star-o'} size={30} color={isStarFilled ? 'gold' : 'grey'} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd', // Add a border to separate rows
    },
    left: {
        flex: 1,
        // alignItems: 'flex-start',
        justifyContent: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25, // Make it a circle
        backgroundColor: "#76bf08",
        alignSelf: 'center',

    },
    center: {
        flex: 3,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
    },
    right: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },
});
