import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductsView = (props) => {
    return(
        <View>
            <Button title='Add product'
                    onPress={() => props.navigation.navigate('./Views/products_add.js')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductsView;