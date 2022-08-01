import React, {
    useState,
} from "react";
import {
    View,
    Text
} from "react-native";
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import {
    NavigationContainer
} from '@react-navigation/native';
import Feed from "./Screens/Feed.js";
import Notifications from "./Screens/Noti.js";
import Chat from "./Screens/Chat.js";
import Play from "./Screens/Play.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    MotiView
} from 'moti';
const Tab = createMaterialTopTabNavigator();
const App = ()=> {
    const [feedColor,setFeedColor] = useState("#fff");
    const [notiColor,setNotiColor] = useState("#fff");
    const [chatColor,setChatColor] = useState("#fff");
    const [playColor,setPlayColor] = useState("#fff");
    return (
        <NavigationContainer>
   <Tab.Navigator
            initialRouteName="Feed"
            tabBarPosition="bottom"

            screenOptions={ {
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#1c2733",

                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#C25B5B",
                    borderRadius: 15,
                    paddingBottom: 6,

                },
                tabBarPressOpacity: 0.8,
                tabBarLabelStyle: {
                    color: "#fff",
                    fontSize: 10
                },
                tabBarPressColor: "#f7f7f7"

            }}
            >
      <Tab.Screen name="Feed" component={Feed}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="wifi"
       color={focused?"tomato": "#fff"}
                            size={18}
                            />
      </View>
                    ),
                    tabBarBadge: ()=>(
                        <MotiView
                            animate={ {
                 scale:[0.6, 1.2, 1]
                            }}
                            transition={ {
                                type: 'timing',
                                duration: 100,
                                repeat: 2,
                            }}
                            style={ {
                                backgroundColor: "tomato",
                                borderRadius: 10,
                                height: 20,
                                width: 20,
                                borderBottomLeftRadius:0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 3,
                                marginRight: 13,
                            }}>
      <Text style={ {
                                    color: "#fff"
                                }}>10</Text>

      </MotiView>
                    ),


                }}
                />
      <Tab.Screen name="Notifications" component={Notifications}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="bell"
                        color={focused?"tomato": "#fff"}
                            size={18}

                            />
      </View>
                    ),
                    tabBarBadge: ()=>(
                        <MotiView
                            animate={ {
                           scale:[0.6, 1.2, 1] }}
                            transition={ {
                                type: 'timing',
                                duration: 100,
                                repeat: 2,
                            }}
                            style={ {
                                backgroundColor: "tomato",
                                borderRadius: 10,
                                height: 20,borderBottomLeftRadius:0,
                                width: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 3,
                                marginRight: 13,
                            }}>
      <Text style={ {
                                    color: "#fff"
                                }}>10</Text>

      </MotiView>
                    ),


                }}

                />
       <Tab.Screen
                name="Chat" component={Chat}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="message"
                            size={18}
                            color={focused?"tomato": "#fff"}
                            />
      </View>
                    ), tabBarBadge: ()=>(
                        <MotiView
                            animate={ {
                                scale:[0.6, 1.2, 1]
                            }}
                            transition={ {
                                type: 'timing',
                                duration: 100,
                                repeat: 2,
                            }}
                            style={ {
                                backgroundColor: "tomato",
                                borderRadius: 10,
                                height: 20,
                                width: 20,borderBottomLeftRadius:0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 3,
                                marginRight: 13,
                            }}>
      <Text style={ {
                                    color: "#fff"
                                }}>10</Text>

      </MotiView>
                    ),


                }}
                />
              <Tab.Screen name="Play" component={Play}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="book"
                            color={focused?"tomato": "#fff"}
                            size={18}

                            />

      </View>
                    ), tabBarBadge: ()=>(
                        <MotiView
                            animate={ {
                                scale:[0.6, 1.2, 1]
                            }}
                            transition={ {
                                type: 'timing',
                                duration: 100,
                                repeat: 2,
                            }}
                            style={ {
                                backgroundColor: "tomato",
                                borderRadius: 10,
                                height: 20,
                                width: 20,
                                justifyContent: 'center',
                                alignItems: 'center',borderBottomLeftRadius:0,
                                marginTop: 3,
                                marginRight: 13,
                            }}>
      <Text style={ {
                                    color: "#fff"
                                }}>10</Text>

      </MotiView>
                    ),


                }}
                />
    </Tab.Navigator>
    </NavigationContainer>
    );
}

export default App;