import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {globalStyles} from '../styles/global';
import PlusIcon from '../assets/icons/plus.svg';
import TrashIcon from '../assets/icons/trash.svg';
import {useState} from 'react';

export default function TrackerScreen() {
  const [tracker, setTracker] = useState<string>('');
  const [trackers, setTrackers] = useState<Array<{id: string; value: string}>>(
    [],
  );

  const changeTextHandle = (tracker: any) => {
    setTracker(tracker);
  };

  const onAddTrackers = () => {
    setTrackers(prevTrackers => {
      return [...prevTrackers, {id: Math.random().toString(), value: tracker}];
    });
  };

  const onDeleteTrackers = (id: any) => {
    setTrackers(prevTrackers => {
      return prevTrackers.filter(tracker => tracker.id != id);
    });
  };

  return (
    <View style={container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tambah Tracker"
          placeholderTextColor={'rgba(187, 224, 250, 0.25)'}
          onChangeText={changeTextHandle}
        />

        <TouchableNativeFeedback onPress={onAddTrackers}>
          <View style={styles.inputIcon}>
            <PlusIcon width={18} height={18} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.trackerContainer}>
        <FlatList
          data={trackers}
          style={styles.trackerContainer}
          renderItem={({item}) => (
            <View style={styles.trackerItem}>
              <Text style={styles.trackerText}>{item.value}</Text>
              <TouchableNativeFeedback
                onPress={() => onDeleteTrackers(item.id)}>
                <View style={styles.trackerIcon}>
                  <TrashIcon width={18} height={18} />
                </View>
              </TouchableNativeFeedback>
            </View>
          )}
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
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#26353D',
    padding: 15,
    margin: 0,
    fontSize: 16,
    color: '#BBE0FA',
    borderRadius: 10,
    flex: 1,
  },
  inputIcon: {
    // padding: 0,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBE0FA',
  },
  trackerContainer: {
    gap: 15,
  },
  trackerItem: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 15,
  },
  trackerText: {
    backgroundColor: '#26353D',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#BBE0FA',
    flex: 1,
  },
  trackerIcon: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC2626',
    borderRadius: 10,
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
