import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// 페이지 import
import TodoListScreen from './screens/TodoListScreen';
import TodoWriteScreen from './screens/TodoWriteScreen';
import MyPageScreen from './screens/MyPageScreen';
import HomeScreen from './screens/HomeScreen';
import ButlerScreen from './screens/ButlerScreen';
import GameScreen from './screens/GameScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import BoardScreen from './writescreens/BoardScreen';
import WriteScreen from './writescreens/WriteScreen';
import PostDetailScreen from './writescreens/PostDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [posts, setPosts] = useState([]);
  const [todoItems, setTodoItems] = useState([]); // 새로운 상태 추가

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="활동일지"
          options={{
            title: '활동일지',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <Entypo name="open-book" size={24} color="black" />
            ),
          }}
        >
          {() => <TodoStackScreen todoItems={todoItems} setTodoItems={setTodoItems} />}
        </Tab.Screen>

        <Tab.Screen
          name="게시판"
          options={{
            title: '게시판',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="clipboard-list" size={24} color="black" />
            ),
          }}
        >
          {props => <BoardStackScreen {...props} posts={posts} setPosts={setPosts} />}
        </Tab.Screen>

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '메인 홈',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        
        <Tab.Screen
          name="게임"
          component={GameScreen}
          options={{
            title: "게임",
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="gamepad" size={24} color="black" />
            ),
          }}
        />
        
        <Tab.Screen
          name="내정보"
          component={MyPageScreen}
          options={{
            title: '마이 페이지',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="circle-user" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// 활동일지 네비게이션
function TodoStackScreen({ todoItems, setTodoItems }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="활동일지"
        options={{ headerShown: false }}
      >
        {() => <TodoListScreen todoItems={todoItems} setTodoItems={setTodoItems} />}
      </Stack.Screen>
      <Stack.Screen
        name="활동일지쓰기"
        component={TodoWriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="집사정보"
        component={ButlerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// 게시판 네비게이션
function BoardStackScreen({ posts, setPosts }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="게시판">
        {props => <BoardScreen {...props} posts={posts} setPosts={setPosts} />}
      </Stack.Screen>
      <Stack.Screen name="게시글 작성">
        {props => <WriteScreen {...props} posts={posts} setPosts={setPosts} />}
      </Stack.Screen>
      <Stack.Screen name="게시글 상세">
        {props => <PostDetailScreen {...props} posts={posts} setPosts={setPosts} />}
      </Stack.Screen>

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// 마이페이지 네비게이션
function MyPageStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="집사정보"
        component={ButlerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default App;
