import React, { Component } from 'react'
import { Image , StyleSheet , View, Text} from 'react-native'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center',
   backgroundColor: '#000000',
   width: 320
 },
 backdrop: {
   paddingTop: 60,
   width: 320,
   height: 120
 },
 backdropView: {
   height: 120,
   width: 320,
   backgroundColor: 'rgba(0,0,0,0)',
 },
 headline: {
   fontSize: 20,
   textAlign: 'center',
   backgroundColor: 'rgba(0,0,0,0)',
   color: 'white'
 }
})
class BackgroundImage extends Component {
  render() {
    const {source, children, style, ...props} = this.props
    return (
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}
        style={ {

        } }
      >
        <Image source={require("../../../../assets/bg.png") }
               style={ {flex: 1, width: null, height: null, backgroundColor: 'transparent', ...style } }
               {...props}>
          { children }
        </Image>
       </AnimatedLinearGradient>
    )
  }
}
BackgroundImage.propTypes = {
  source: React.PropTypes.object,
  children: React.PropTypes.object,
  style: React.PropTypes.object
}
export default BackgroundImage

// <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}
//   style={ {
//     backgroundColor: 'transparent'
//   } }
// >
//   <Image source={require("../../../../assets/bg.jpg") }
//          style={ { flex: 1, width: null,  backgroundColor: 'rgba(0,0,0,.6)', height: null, ...style } }
//          {...props}>
//     { children }
//   </Image>
//  </AnimatedLinearGradient>
