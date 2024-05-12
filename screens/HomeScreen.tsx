import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {globalStyles} from '../styles/global';

import MapPinIcon from '../assets/icons/map-pin.svg';
import CalendarIcon from '../assets/icons/calendar-days.svg';
import ListIcon from '../assets/icons/list.svg';
import PenIcon from '../assets/icons/pen.svg';
import ClockIcon from '../assets/icons/clock.svg';
import SubuhIcon from '../assets/icons/subuh.svg';

const datas = [
  {
    keterangan: 'Subuh',
    jam: '05:18',
    icon: SubuhIcon,
  },
  {
    keterangan: 'Syuruq',
    jam: '05:18',
    icon: SubuhIcon,
  },
  {
    keterangan: 'Zuhur',
    jam: '05:18',
    icon: SubuhIcon,
  },
  {
    keterangan: 'Asar',
    jam: '05:18',
    icon: SubuhIcon,
  },
  {
    keterangan: 'Magrib',
    jam: '05:18',
    icon: SubuhIcon,
  },
  {
    keterangan: 'Isya',
    jam: '05:18',
    icon: SubuhIcon,
  },
];

export default function HomeScreen({navigation}: any) {
  return (
    <View style={container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>
            1 Ramadhan {'\n'}
            <Text style={{color: '#BBE0FA'}}>1945</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoField}>
            <MapPinIcon width={18} height={18} stroke={'#BBE0FA'} />
            <Text style={styles.location}>Purbalingga, Jawa Tengah</Text>
          </View>
          <View style={styles.infoField}>
            <CalendarIcon width={18} height={18} stroke={'#BBE0FA'} />
            <Text style={styles.date}>11 Maret 2024</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardFluid}>
          <Text style={styles.cardFluidSubtitle}>Imsak</Text>
          <View style={styles.cardFluidTitleContainer}>
            <ClockIcon width={18} height={18} stroke={'#BBE0FA'} />
            <Text style={styles.cardFluidTitle}>05:18</Text>
          </View>
        </View>
        <View style={styles.cardGrid}>
          {/* <FlatList
            data={datas}
            numColumns={2}
            renderItem={() => {
              return ( */}
          <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardSubtitle}>Subuh</Text>
              <Text style={styles.cardTitle}>05:18</Text>
            </View>
            <SubuhIcon width={18} height={18} stroke={'#BBE0FA'} />
          </View>
          <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardSubtitle}>Subuh</Text>
              <Text style={styles.cardTitle}>05:18</Text>
            </View>
            <SubuhIcon width={18} height={18} stroke={'#BBE0FA'} />
          </View>
          <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardSubtitle}>Subuh</Text>
              <Text style={styles.cardTitle}>05:18</Text>
            </View>
            <SubuhIcon width={18} height={18} stroke={'#BBE0FA'} />
          </View>
          {/* ); */}
          {/* }} */}
          {/* /> */}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Tracker')}>
          <View style={buttonPrimary}>
            <ListIcon width={18} height={18} stroke={'#BBE0FA'} />
            <Text style={buttonTextPrimary}>Tracker</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Province')}>
          <View style={buttonSecondary}>
            <PenIcon width={18} height={18} stroke={'#1B262C'} />
            <Text style={buttonTextSecondary}>Ubah Lokasi</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  container: {
    backgroundColor: '#1B262C',
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  mainTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  infoContainer: {
    gap: 5,
  },
  infoField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  location: {
    color: '#BBE0FA',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#BBE0FA',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  cardContainer: {
    marginBottom: 20,
    gap: 15,
  },
  cardFluid: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#26353D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardFluidTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardFluidSubtitle: {
    fontSize: 24,
    color: '#BBE0FA',
    fontWeight: 'semibold',
  },
  cardFluidTitle: {
    fontSize: 20,
    color: '#BBE0FA',
    fontWeight: 'semibold',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#26353D',
    // width: '50%',
    margin: 3,
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
  buttonContainer: {
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
const buttonPrimary = StyleSheet.compose(styles.button, {
  backgroundColor: '#26353D',
});
const buttonTextPrimary = StyleSheet.compose(styles.buttonText, {
  color: '#BBE0FA',
});
const buttonSecondary = StyleSheet.compose(styles.button, {
  backgroundColor: '#BBE0FA',
});
const buttonTextSecondary = StyleSheet.compose(styles.buttonText, {
  color: '#1B262C',
});
