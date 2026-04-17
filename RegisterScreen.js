import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Alert 
} from "react-native";

export default function RegisterScreen({ navigation }) {
  // 1. State untuk menampung data input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Fungsi Validasi & Register (Security Guard Logic)
  const handleRegister = () => {
    const emailRegex = /\S+@\S+\.\S+/; // Cek format email
    const phoneRegex = /^[0-9]+$/;      // Cek hanya angka

    // Validasi Field Kosong
    if (!name || !email || !phone || !password || !confirmPassword) {
      return Alert.alert("Security Alert", "Semua kolom wajib diisi!");
    }

    // Validasi Format Email
    if (!emailRegex.test(email)) {
      return Alert.alert("Security Alert", "Format email tidak valid!");
    }

    // Validasi Nomor Telepon (Min 10 Digit & Angka)
    if (!phoneRegex.test(phone) || phone.length < 10) {
      return Alert.alert("Security Alert", "Nomor HP harus angka & minimal 10 digit!");
    }

    // Validasi Panjang Password
    if (password.length < 6) {
      return Alert.alert("Security Alert", "Password minimal 6 karakter!");
    }

    // Validasi Kecocokan Password (Match Check)
    if (password !== confirmPassword) {
      return Alert.alert("Security Alert", "Password dan Konfirmasi tidak cocok!");
    }

    // Jika Lolos Semua Security Check
    Alert.alert("Success", "Registrasi Berhasil!");
    navigation.replace("Home", { name: name }); // Kirim nama ke Screen Home
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.title}>Buat Akun Baru</Text>

        {/* Input Nama */}
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Masukkan nama lengkap" 
          onChangeText={setName} 
        />

        {/* Input Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="contoh@mail.com" 
          keyboardType="email-address" 
          autoCapitalize="none"
          onChangeText={setEmail} 
        />

        {/* Input Phone (Requirement Mission 5) */}
        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput 
          style={styles.input} 
          placeholder="0812XXXXXXXX" 
          keyboardType="numeric" 
          onChangeText={setPhone} 
        />

        {/* Input Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Minimal 6 karakter" 
          secureTextEntry={true} 
          onChangeText={setPassword} 
        />

        {/* Input Confirm Password (Requirement Mission 5) */}
        <Text style={styles.label}>Konfirmasi Password</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ulangi password" 
          secureTextEntry={true} 
          onChangeText={setConfirmPassword} 
        />

        {/* Tombol Daftar */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>DAFTAR SEKARANG</Text>
        </TouchableOpacity>

        {/* Link Kembali ke Login */}
        <TouchableOpacity 
          style={{ marginTop: 20 }} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>
            Sudah punya akun? <Text style={styles.linkTextBold}>Login</Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// 3. Styling agar tampilan profesional (Requirement: Ramah Jempol)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  title: {
    fontSize: 28,
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
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 35,
    backgroundColor: '#2196F3',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  linkText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  linkTextBold: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});