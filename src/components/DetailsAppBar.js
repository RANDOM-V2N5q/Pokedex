import React from 'react';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useTheme, Surface, Button } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

export default function DetailsAppBar({ color, sprite }) {
  const colors = useTheme().colors;

  // For now it is the same color as whole component, but later it will be a little bit darker:
  setStatusBarBackgroundColor(colors.pokemon.background[color]);

  return (
    <Surface style={[styles.container, { backgroundColor: colors.pokemon.background[color] }]}>
      <View style={styles.leftCorner}>
        <Button
          icon='arrow-left'
          color={colors.arrowAndTitle}
          labelStyle={styles.buttonContent}
          onPress={() => {}}
        >
          Pokedex
        </Button>
      </View>
      <Image style={styles.image} source={{ uri: sprite }} />
    </Surface>
  );
}

const styles = StyleSheet.create({
  leftCorner: {
    top: 30,
    flexDirection: 'row',
  },
  buttonContent: {
    fontSize: 20,
  },
  container: {
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});