import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListItem = ({showModal, avatarUrl, loginName, profileUrl}) => {
  return (
    <TouchableOpacity
      onPress={() => showModal(loginName)}
      activeOpacity={0.5}
      style={styles.mainCont}>
      <FastImage source={{uri: avatarUrl}} style={styles.avatarStyle} />
      <View style={{marginLeft: 15}}>
        <Text style={styles.username}>{loginName}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(profileUrl)}
          style={{alignSelf: 'flex-start'}}>
          <Text style={styles.linkText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  mainCont: {
    width: wp('90%'),
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.09)',
    borderRadius: 10,
    marginVertical: 10,
  },
  avatarStyle: {
    backgroundColor: 'lightgrey',
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  username: {
    color: 'black',
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  linkText: {
    color: 'blue',
    fontSize: hp('1.8%'),
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginTop: 10,
  },
});
