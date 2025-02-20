import React, { useState } from 'react';
import { TextInput, Pressable, Alert, StyleSheet, View, Text } from 'react-native';

export default function TodoWriteScreen({ navigation }) {
  const [todo, setTodo] = useState('');

  const getCurrentDateTime = () => {
    const now = new Date();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${dayOfWeek}요일 ${time}`;
  };

  const handleAddTodo = () => {
    if (!todo.trim()) {
      Alert.alert("할 일을 입력해주세요.");
      return;
    }

    const currentDateTime = getCurrentDateTime(); // 현재 날짜와 시간

    navigation.navigate('활동일지', { newTodo: todo, time: currentDateTime });

    setTodo('');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <TextInput
        multiline
        onChangeText={setTodo}
        value={todo}
        placeholder="활동내용을 기록해주세요 :)"
        style={styles.textInput}
      />
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={handleAddTodo}>
          <Text style={styles.onPress}>작 성</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.onPress}>취 소</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 0.3,
    padding: 10,
    backgroundColor: "#fff",
    width:384,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  onPress: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    width: 184,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  }
});
