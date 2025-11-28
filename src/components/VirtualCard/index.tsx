import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface VirtualCardProps {
    holderName: string;
    cardNumber: string;
    expiryDate: string;
    type: 'frente' | 'verso';
    balance?: string; // Opcional: saldo do cartão
}

const { width } = Dimensions.get('window');

export function VirtualCard({ holderName, cardNumber, expiryDate, type, balance }: VirtualCardProps) {

    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                style={styles.cardBg}
                imageStyle={{ borderRadius: 16 }}
                resizeMode="cover"
            >
                <View style={styles.overlay}>

                    {/* Lógica de Renderização: FRENTE vs VERSO */}
                    {type === 'frente' ? (
                        <>
                            {/* Topo: Chip e Logo (Simulado) */}
                            <View style={styles.headerRow}>
                                <View style={styles.chip} />
                                <Ionicons name="wifi" size={24} color="rgba(255,255,255,0.7)" style={{ transform: [{ rotate: '90deg' }] }} />
                            </View>

                            {/* Centro: Número do Cartão */}
                            <View style={styles.numberContainer}>
                                <Text style={styles.cardNumber}>
                                    {formatCardNumber(cardNumber)}
                                </Text>
                            </View>

                            {/* Rodapé: Nome, Validade e Saldo */}
                            <View style={styles.footerRow}>
                                <View>
                                    <Text style={styles.label}>Titular</Text>
                                    <Text style={styles.holderName} numberOfLines={1}>
                                        {holderName || "NOME DO USUÁRIO"}
                                    </Text>
                                </View>

                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.label}>Validade</Text>
                                    <Text style={styles.expiry}>{expiryDate || "MM/AA"}</Text>
                                </View>
                            </View>

                            {/* Exibe o saldo se existir */}
                            {balance && (
                                <View style={styles.balanceTag}>
                                    <Text style={styles.balanceText}>{balance}</Text>
                                </View>
                            )}
                        </>
                    ) : (
                        // --- VERSO DO CARTÃO ---
                        <View style={styles.versoContainer}>
                            <View style={styles.magneticStrip} />
                            <View style={styles.cvvContainer}>
                                <Text style={styles.cvvLabel}>CVC/Serial</Text>
                                <View style={styles.whiteStrip}>
                                    <Text style={styles.cvvText}>123</Text>
                                </View>
                            </View>
                            <Text style={styles.helpText}>Utilize este cartão apenas para fins de transporte.</Text>
                        </View>
                    )}

                </View>
            </ImageBackground>
        </View>
    );
}

// Função auxiliar para formatar o número (0000 0000 0000 0000)
function formatCardNumber(number: string) {
    if (!number) return "**** **** **** ****";
    return number.replace(/(\d{4})/g, '$1 ').trim();
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.85,
        height: 220,
        borderRadius: 16,
        elevation: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    cardBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 16,
    },
    // Estilos da FRENTE
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    chip: {
        width: 40,
        height: 30,
        backgroundColor: '#d4af37',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#b8860b',
    },
    numberContainer: {
        justifyContent: 'center',
        marginTop: 10,
    },
    cardNumber: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 22,
        color: '#fff',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    label: {
        color: '#ddd',
        fontSize: 10,
        fontFamily: 'Quicksand_400Regular',
        textTransform: 'uppercase',
    },
    holderName: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Quicksand_700Bold',
        textTransform: 'uppercase',
        maxWidth: 200,
    },
    expiry: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Quicksand_700Bold',
    },
    balanceTag: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    balanceText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    versoContainer: {
        flex: 1,
        paddingVertical: 20,
    },
    magneticStrip: {
        height: 40,
        backgroundColor: '#000',
        width: '120%',
        marginLeft: -20,
        marginTop: 10,
    },
    cvvContainer: {
        marginTop: 20,
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    cvvLabel: {
        color: '#fff',
        fontSize: 10,
        marginRight: 5,
    },
    whiteStrip: {
        width: 60,
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    cvvText: {
        color: '#000',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    helpText: {
        marginTop: 'auto',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 8,
        textAlign: 'center',
    }
});