import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Image,
  alert
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validasi sederhana
    if (email === "" || password === "") {
      return alert("Silakan masukkan email dan password.");
    }

    // Ganti dengan logika login kamu yang sebenarnya
    if (email === "user@mail.com" && password === "123456") {
      navigation.replace("Home", { name: email }); 
    } else {
      alert("Email atau password salah.");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Tampilan Logo atau Gambar (Opsional) */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png' }} // Ganti dengan logo kamu
        style={styles.logo}
      />

      <Text style={styles.title}>Masuk ke Akun</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="user@mail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Masukkan password..."
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Tombol Login yang Rapi */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Navigasi ke Register */}
      <TouchableOpacity 
        style={{ marginTop: 20 }} 
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>
          Belum punya akun? <Text style={styles.registerTextBold}>Daftar Disini</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#fff', // Latar belakang putih
    justifyContent: 'center',
    alignItems: 'center', // Biar semua di tengah secara horizontal
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: -50, // Geser sedikit ke atas
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: '#555',
    alignSelf: 'flex-start', // Biar label di kiri
    width: '100%', // Biar sejajar sama input
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd', // Warna border lebih halus
    borderRadius: 10, // Kotak melengkung
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9', // Warna latar input yang berbeda
    width: '100%',
    marginBottom: 5,
  },
  loginButton: {
    marginTop: 35,
    backgroundColor: '#2196F3', // Warna biru primer
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Bayangan (di Android)
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1, // Jarak antar huruf
  },
  registerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  registerTextBold: {
    color: '#2196F3', // Warna biru konsisten
    fontWeight: 'bold',
  },
});