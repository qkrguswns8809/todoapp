import React, { useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TodoListScreen({ todoItems, setTodoItems }) {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.newTodo) {
      const newTodoItem = {
        todo: route.params.newTodo,
        time: route.params.time
      };
      setTodoItems((prevItems) => [...prevItems, newTodoItem]);
    }
  }, [route.params?.newTodo]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' ,margin:20 }}>
      <FlatList
        data={todoItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.todo}</Text>
            <Text style={{ color: 'gray', borderBottomWidth: 1, borderBottomColor: 'gray'}}>{item.time}</Text>
          </View>
        )}
      />
      <Button onPress={() => navigation.navigate('활동일지쓰기')} title="활동일지쓰기" />
    </View>
  );
}
