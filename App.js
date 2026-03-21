import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>TapLogic X</Text>
        <Text style={styles.subtitle}>AI Dashboard - Version 1.0</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardText}>System Status: Online</Text>
        </View>
        <Text style={styles.info}>Bhai, aapka app working condition mein hai!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { padding: 40, alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#38bdf8' },
  subtitle: { color: '#94a3b8', marginTop: 5 },
  content: { flex: 1, padding: 20 },
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#38bdf8' },
  cardText: { color: 'white', fontSize: 18 },
  info: { color: '#64748b', marginTop: 20, textAlign: 'center' }
});
