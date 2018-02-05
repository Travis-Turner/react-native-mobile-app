import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';
import { referenceData } from '../assets/data';
const { width, height } = Dimensions.get('window');
const aspectRatio = height/width;

class Reference extends Component {
    handleButton() {
        Actions.mainMenu();
    }
    styleRender(key) {
        if (key % 2 == 0){
            return true;
        }
    }
    render() {
        return (
            <View>
                <View>
                    <CardSection style={styles.card}>
                        <TouchableOpacity onPress={this.handleButton} style={styles.button}>
                            <Text style={styles.text}>&lt; Back</Text>
                        </TouchableOpacity>
                    </CardSection>
                </View>
                <FlatList
                    style={styles.list}
                    data={referenceData}
                    renderItem={({item}) => 
                    <View key={item.romanization} style={
                        this.styleRender(item.key) ? styles.itemContainer : styles.itemContainerAlt
                    }>
                        <Image 
                            source={item.image}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.itemText}>{item.romanization}</Text>
                        </View>
                    </View>
                }
                />
            </View>
        )
    }  
};

const styles = StyleSheet.create({
    card: {
       marginTop: 25,
       padding: 20,
       backgroundColor: 'rgba(255,255,255,0.7)'
    },
    text: {
        color: 'black'
    },
    image: {
        width: '50%',
        height: 200
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemContainerAlt: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,1)'
    },
    textContainer: {
        width: '50%',
        alignItems: 'center'
    },
    itemText: {
        marginTop: aspectRatio < 1.6 ? 60 : 40,
        fontSize: aspectRatio < 1.6 ? 50 : 60,
        alignItems: 'center'
    },
    list: {
        marginBottom: 70
    }
});


export default Reference;