import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchComp from '../Components/SearchComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {fetchGithubUsers, fetchUserByName} from '../Api/GithubServicesApi';
import ListItem from '../Components/ListItem';
import ModalContent from '../Components/ModalContent';

const Home = () => {
  const [githubUsers, setGithubUsers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [profileLoading, setProfileLoading] = useState(false);

  const showModal = async username => {
    setTimeout(() => {
      setModalVisible(true);
    }, 1000);
    setProfileLoading(true);
    const resp = await fetchUserByName(username);
    setUserDetails(resp);
    setProfileLoading(false);
  };

  useEffect(() => {
    const updatingUsers = async () => {
      setGithubUsers(await fetchGithubUsers());
    };
    updatingUsers();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.mainHeading}>GITHUB USERS</Text>
      <View style={{width: wp('90%'), alignSelf: 'center'}}>
        <SearchComp setGithubUsers={setGithubUsers} />
      </View>

      {!profileLoading ? (
        githubUsers.length > 0 ? (
          <FlatList
            data={githubUsers}
            keyExtractor={item => item?.node_id}
            renderItem={({item}) => {
              return (
                <ListItem
                  avatarUrl={item?.avatar_url}
                  loginName={item?.login}
                  showModal={showModal}
                  profileUrl={item?.html_url}
                />
              );
            }}
          />
        ) : (
          <Text style={styles.generalText}>No users found 😥</Text>
        )
      ) : (
        <ActivityIndicator
          size={50}
          color={'black'}
          style={{marginTop: hp('30%')}}
        />
      )}

      <Modal
        isVisible={isModalVisible}
        animationIn={'bounceIn'}
        animationOut={'bounceOut'}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}>
        <ModalContent
          avatarUrl={userDetails?.avatar_url}
          fullname={userDetails?.name}
          following={userDetails?.following}
          followers={userDetails?.followers}
          location={userDetails?.location}
        />
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainHeading: {
    alignSelf: 'center',
    fontSize: hp('4%'),
    color: 'black',
    fontWeight: 'bold',
    marginVertical: hp('5%'),
  },
  generalText: {
    color: 'black',
    fontSize: hp('2%'),
    alignSelf: 'center',
    marginTop: 20,
  },
});
