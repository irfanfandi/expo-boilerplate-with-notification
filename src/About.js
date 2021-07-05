import React, { useState, useEffect }  from 'react'
import { View, Text, Button } from 'react-native'
import * as Notifications from 'expo-notifications';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

export default function About() {
    const [loading, setLoading] = useState(true);
    const [initialRoute, setInitialRoute] = useState('About');
    const navigation = useNavigation();
  
    useEffect(() => {
        this.listener = Notifications.addNotificationResponseReceivedListener(response => {
          const url = response.notification.request.content.data.url;
          if(url !== null){
          setInitialRoute(url);
          setLoading(false);
          navigation.navigate(url)
          }
        });
      }, []);
    
    return (
        <View>
            <Button title="Tes" onPress={()=> navigation.navigate(initialRoute)}></Button>
        </View>
    )
}
