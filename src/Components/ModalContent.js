import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const ModalContent = ({
  avatarUrl,
  fullname,
  location,
  followers,
  following,
}) => {
  return (
    <View style={styles.mainCont}>
      <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
          <FastImage source={{uri: avatarUrl}} style={styles.avatarStyle} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.username}>{fullname}</Text>
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>

        <View style={styles.followersCont}>
          <Text style={styles.followers}>Followers: {followers}</Text>
          <Text style={styles.following}>Followings: {following}</Text>
        </View>
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 20,
    alignItems: 'center',
  },
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: 'contain',
    backgroundColor: 'lightgrey',
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp('3%'),
    width: '75%',
  },
  locationText: {fontSize: hp('2%'), color: 'grey', marginTop: 5},
  followersCont: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  followers: {
    color: 'black',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
  following: {
    color: 'black',
    marginLeft: 20,
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
});
