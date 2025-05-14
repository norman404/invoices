import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const InfoScreen = () => {
  const [rfc, setRfc] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cerFile, setCerFile] = useState(null);
  const [keyFile, setKeyFile] = useState(null);

  const handleFilePick = async (type: 'cer' | 'key') => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (result.type === 'success') {
      type === 'cer' ? setCerFile(result) : setKeyFile(result);
    }
  };

  const handleSubmit = () => {
    if (!rfc || !name || !address || !cerFile || !keyFile) {
      Alert.alert('Campos incompletos', 'Completa toda la información y sube ambos archivos.');
      return;
    }

    // Aquí podrías hacer un POST a tu backend o guardarlo en Zustand
    console.log({ rfc, name, address, cerFile, keyFile });
    Alert.alert('Información guardada', 'Tu información fiscal se ha guardado correctamente.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Información Fiscal</Text>

      <TextInput
        style={styles.input}
        placeholder="RFC"
        value={rfc}
        onChangeText={setRfc}
        autoCapitalize="characters"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre o razón social"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Domicilio fiscal"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={() => handleFilePick('cer')}>
        <Text style={styles.uploadText}>
          {cerFile ? `Archivo .cer: ${cerFile.name}` : 'Subir archivo .cer'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={() => handleFilePick('key')}>
        <Text style={styles.uploadText}>
          {keyFile ? `Archivo .key: ${keyFile.name}` : 'Subir archivo .key'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveText}>Guardar Información</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#dbeafe',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  uploadText: {
    fontSize: 14,
    color: '#1d4ed8',
  },
  saveButton: {
    backgroundColor: '#0A66C2',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});