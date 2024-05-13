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
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

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
          <FlatList
            data={datas}
            numColumns={2}
            renderItem={({item}) => {
              return <Card data={item} />;
            }}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          navigation={navigation}
          Icon={ListIcon}
          onPress={() => navigation.navigate('Tracker')}
          text="Tambah Tracker"
          style={{gap: 10}}
        />
        <Button
          navigation={navigation}
          Icon={PenIcon}
          variant="secondary"
          onPress={() => navigation.navigate('Province')}
          text="Ubah Lokasi"
          style={{gap: 10}}
        />
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
  buttonContainer: {
    gap: 15,
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
