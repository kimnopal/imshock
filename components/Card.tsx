import {StyleSheet, Text, View} from 'react-native';

export default function Card({data}: any) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardSubtitle}>{data.keterangan}</Text>
        <Text style={styles.cardTitle}>{data.jam}</Text>
      </View>
      <data.icon width={50} height={50} stroke={'#BBE0FA'} />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#26353D',
    flex: 1,
    margin: 6,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleContainer: {},
  cardSubtitle: {
    color: '#BBE0FA',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
