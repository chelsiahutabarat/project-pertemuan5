import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  // Mengambil nama yang dikirim dari halaman Register/Login jika ada
  const { name } = route.params || { name: 'User' };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang, {name}!</Text>
      <Text>Anda berhasil masuk ke aplikasi.</Text>
      
      <View style={{ marginTop: 15 }}>
        <Button 
          title="Logout" 
          onPress={() => navigation.replace('Login')} 
          color="red"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

