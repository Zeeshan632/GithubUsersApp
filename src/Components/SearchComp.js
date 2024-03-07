import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fetchGithubUsers, fetchUserByName} from '../Api/GithubServicesApi';

const SearchComp = ({setGithubUsers}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (inputValue.length > 0) {
        const resp = await fetchUserByName(inputValue);
        if(resp){
          setGithubUsers([resp]);
        }else {
          setGithubUsers([])
        }
      } else {
        const resp = await fetchGithubUsers();
        setGithubUsers(resp);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const handleInputChange = changedText => {
    setInputValue(changedText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search with a username"
        value={inputValue}
        onChangeText={handleInputChange}
        style={styles.inputStyling}
      />
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  inputContainer: {width: wp('90%'), alignSelf: 'center'},
  inputStyling: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
});
