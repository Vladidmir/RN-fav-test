import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Colors} from '../../../styles/colors';
import {w} from '../../../styles/scale';

interface ButtonProps {
  onPress: () => void;
  title: string;
  mode: 'transparent' | 'default';
}

const Button: FC<ButtonProps> = ({onPress, title, mode}) => {
  const buttonStyles =
    mode === 'transparent' ? styles.transparentButton : styles.defaultButton;
  const textStyles =
    mode === 'transparent'
      ? styles.transparentButtonText
      : styles.defaultButtonText;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  defaultButton: {
    padding: w(16),
    borderColor: Colors.RED,
    borderWidth: w(1),
    borderRadius: w(5),
    backgroundColor: Colors.RED,
  },
  transparentButton: {
    padding: w(16),
    borderColor: Colors.RED,
    borderWidth: w(1),
    borderRadius: w(5),
    backgroundColor: 'transparent',
  },
  defaultButtonText: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
  transparentButtonText: {
    color: Colors.RED,
    textAlign: 'center',
  },
});
