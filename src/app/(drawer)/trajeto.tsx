import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Função mascarar hora (HH:MM)
const formatarHorario = (value: string) => {
  let digits = value.replace(/\D/g, '');

  if (digits.length > 4) digits = digits.substring(0, 4);

  if (digits.length >= 3) {
    return `${digits.substring(0, 2)}:${digits.substring(2)}`;
  }
  return digits;
};

export default function Trajeto() {
  const [busLines] = useState([
    '001 - Centro / Leonor Mendes', '002 - Centro / Cidade nova', '003 - Centro / Facciolo',
    '004 - Leonor Mendes / Cidade nova', '005 - Leonor Mendes / Facciolo', '006 - Leonor Mendes / Centro',
    '007 - Cidade nova / Leonor Mendes', '008 - Cidade nova / Facciolo', '009 - Cidade nova / Centro',
    '010 - Facciolo / Leonor Mendes', '011 - Facciolo / Cidade nova', '012 - Facciolo / Centro',
  ]);

  const [busTimes] = useState([
    '05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30',
    '10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
    '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30',
    '20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','00:00',
  ]);

  const [searchLine, setSearchLine] = useState('');
  const [selectedLine] = useState('');
  const [searchTime, setSearchTime] = useState('');
  const [selectedTime] = useState('');

  const [isLineDropdownOpen, setIsLineDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  const filteredLines = busLines.filter(line =>
    line.toLowerCase().includes(searchLine.toLowerCase())
  );

  const filteredTimes = busTimes.filter(t =>
    t.toLowerCase().includes(searchTime.toLowerCase())
  );

  const getBairroFromLine = (line: string) => {
    const parts = line.split('/');
    return parts[1]?.trim() ?? '';
  };

  const handleContinue = () => {
    if (searchLine && searchTime) {
      const bairroDestino = getBairroFromLine(searchLine);

      router.push({
        pathname: '/(drawer)/visualizacaoOnibus',
        params: { 
          linhaEscolhida: searchLine,
          horario: searchTime,
          bairroDestino,
        },
      });
    } else {
      Alert.alert('Atenção', 'Selecione uma linha e um horário antes de continuar.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: -110 }}>
        <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />
      </View>

      <Text style={styles.title}>Trajeto</Text>

      <View style={styles.section}>

        {/* Localização */}
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
          <TextInput style={styles.textInput} placeholder="Insira sua localização atual:" />
        </View>

        {/* LINHA */}
        <View style={{ position: 'relative', width: '100%' }}>
          <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name='directions-bus' size={16} />
            <TextInput
              style={styles.textInput}
              placeholder="Selecione a linha de ônibus:"
              value={searchLine}
              onChangeText={(text) => {
                setSearchLine(text);
                setIsLineDropdownOpen(true);
              }}
              onFocus={() => setIsLineDropdownOpen(true)}
            />
          </View>

          {isLineDropdownOpen && filteredLines.length > 0 && (
            <View style={styles.dropdownContainer}>
              <FlatList
                data={filteredLines}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setSearchLine(item);   // Preenche
                      setTimeout(() => setIsLineDropdownOpen(false), 50); // Fecha
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>

        {/* HORÁRIO */}
        <View style={{ position: 'relative', width: '100%' }}>
          <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name='schedule' size={16} />
            <TextInput
              style={styles.textInput}
              placeholder="Selecione o horário (HH:MM):"
              value={searchTime}
              onChangeText={(text) => {
                setSearchTime(formatarHorario(text));
                setIsTimeDropdownOpen(true);
              }}
              keyboardType="numeric"
              maxLength={5}
              onFocus={() => setIsTimeDropdownOpen(true)}
            />
          </View>

          {isTimeDropdownOpen && filteredTimes.length > 0 && (
            <View style={styles.dropdownContainer}>
              <FlatList
                data={filteredTimes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setSearchTime(item);
                      setTimeout(() => setIsTimeDropdownOpen(false), 50);
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>

      {/* BOTÃO */}
      <View>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.textButton}>Procurar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#033b85",
    alignItems: 'center',
    justifyContent: 'center',
  },
  tela: {
    width: 220,
    height: 280,
    marginTop: -4,
  },
  title: {
    fontSize: 27,
    color: "#fff",
    fontFamily: 'Quicksand_700Bold',
    marginBottom: 30, 
    marginTop: -50,
  },
  icon: { margin: 10 },
  section: {
    height: 340,
    width: 365,
    backgroundColor: '#ffff',
    borderRadius: 15,
    padding: 20,
  },
  inputContainer: {
    backgroundColor: "rgba(118, 110, 110, 0.1)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "rgba(134, 121, 121, 0.52)",
    height: 69,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 20,
    elevation: 10,
    maxHeight: 200,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: { fontSize: 16, color: '#333' },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    height: 50,
    width: 369,
  },
  textButton: {
    color: "#033b85",
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
});
