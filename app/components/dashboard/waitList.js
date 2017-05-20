import PropTypes from 'prop-types';
/* @flow */

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native'
import md5 from 'blueimp-md5'
import * as colors from './utils/colors'

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../assets/fonts/himalayan/config.json';
const Icon2 = createIconSetFromFontello(fontelloConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.lavenderGray,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  itemContainer: {
    margin: 8,
    padding: 8,
    backgroundColor: colors.white,
    alignItems: 'stretch',
    borderRadius: 2,
    flexDirection: 'row',
    flex: 1,
  },
  itemContainer2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end'
  },
  itemContent: {
    padding: 10,
  },
  itemContentaa: {
    padding: 10,
  },
  itemContent1: {
    padding: 10,
    width: 80,
  },
  infoContainer: {
    flexGrow: 0,
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  propertiesContainer: {
    flexGrow: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameContainer: {
    marginTop: 24,
    fontSize: 20,
    textAlign: 'center',
    color: colors.darkBlue,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  property: {
    paddingBottom: 8,
  },
  propertyLabel: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  propertyValue: {
    color: colors.darkBlue,
  },
})

const Account = ({ user }) => (
  user ? (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardAvoidingViewContainer}
      >
        <FlatList
          data={[
            {title: 'Tony', party: 2, key: 'A1'},
            {title: 'Frank', party: 3, key: 'A2'},
            {title: 'Jennifer', party: 5, key: 'A3'},
            {title: 'Michelle', party: 2, key: 'A4'},
          ]}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemContentaa}>
                  <Text style={{
                  fontSize: 20,
                  fontWeight: '600'}}>{item.key}</Text>
              </View>
              <View style={styles.itemContent1}>
                  <Text>{item.title}</Text>
              </View>
              <View style={styles.itemContent}>
                  <Text>Party of: {item.party}</Text>
              </View>
              <View style={styles.itemContainer2}>
                <View style={styles.itemContent}>
                    <Icon2 name="check" size={20} color="#20AD92" />
                </View>
                <View style={styles.itemContent}>
                    <Icon2 name="trash-can" size={20} color="#20AD92" />
                </View>
                <View style={styles.itemContent}>
                    <Icon2 name="chat-transfer" size={20} color="#20AD92" />
                </View>
              </View>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </View>
  ) : (<Text />)
)
Account.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    numberFormat: PropTypes.string.isRequired,
  }),
}

export default Account

function getGravatarUrl (email, size) {
  return `https://www.gravatar.com/avatar/${md5(email)}?s=${size}&d=mm`
}
