import PropTypes from 'prop-types';
import TextField from 'react-native-md-textinput';
import Button from 'apsl-react-native-button'
/* @flow */

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import md5 from 'blueimp-md5'
import * as colors from './utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'flex-start',
    backgroundColor: colors.lavenderGray,
  },
  infoContainer: {
    flexGrow: 0,
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 2,
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
    height: 80,
    width: 80,
    borderRadius: 40,
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
  nestedTextStyle: {
    color: colors.white,
  }
})

const Account = ({ user }) => (
  user ? (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/88-writing-pad.png')}
            style={styles.avatar}
          />
        </View>
        <View>
          <TextField labelColor={colors.darkBlue} highlightColor={colors.darkBlue} label={'Name'}  />
          <TextField labelColor={colors.darkBlue} highlightColor={colors.darkBlue} label={'Phone'} />
          <TextField labelColor={colors.darkBlue} highlightColor={colors.darkBlue} label={'# of Guest'} />
          <TextField labelColor={colors.darkBlue} highlightColor={colors.darkBlue} label={'Date'} />
          <TextField labelColor={colors.darkBlue} highlightColor={colors.darkBlue} label={'Time'} />
          <Button style={{backgroundColor: colors.darkBlue}}>
            <View style={styles.nestedViewStyle}>
              <Text style={styles.nestedTextStyle}>Add to wait list</Text>
            </View>
          </Button>
        </View>
      </View>
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

// <View style={styles.propertiesContainer}>
//   <View style={styles.property}>
//   <Text style={styles.nameContainer}>
//     {`${user.firstName} ${user.lastName}`}
//   </Text>
//     <Text style={styles.propertyLabel}>{'Email'}</Text>
//     <Text style={styles.propertyValue}>{user.email}</Text>
//   </View>
//   <View style={styles.property}>
//     <Text style={styles.propertyLabel}>{'Language'}</Text>
//     <Text style={styles.propertyValue}>{user.language}</Text>
//   </View>
//   <View style={styles.property}>
//     <Text style={styles.propertyLabel}>{'Number format'}</Text>
//     <Text style={styles.propertyValue}>{user.numberFormat}</Text>
//   </View>
//   <View style={styles.property}>
//     <Text style={styles.propertyLabel}>{'Time zone'}</Text>
//     <Text style={styles.propertyValue}>{user.timeZone || '-'}</Text>
//   </View>
// </View>
