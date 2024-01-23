import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const MyPrivateButton = (props) => {
    const pressed = [props.style, { backgroundColor: 'blue' }];
    const released = props.style;
    const [state, setState] = useState(released);
    return (
        <Pressable
            style={state}
            onPress={props.onPress}
            onPressIn={() => { setState(pressed) }}
            onPressOut={() => { setState(released) }}
        >
            <Text style={styles.text}>{props.label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'normal',
        fontVariant: 'small-caps',
    },
})

export const MyButton = MyPrivateButton