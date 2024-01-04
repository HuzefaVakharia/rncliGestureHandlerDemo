/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AllUITogether from './components/AllUITogether';




//Ref for React native Gesture Handler with Reanimated demo: https://www.youtube.com/watch?v=MZVFd-mTSUg&t=11s



//Ref for React Native all Animation videos : https://www.youtube.com/playlist?list=PLlydFsFRbxJ014OZDMcn_kdjH6rglaWfB


// create a component
const App = () => {


const animation=useSharedValue(0);


  //For scalling pass initial value of 1 inside useSharedValue() as shown below:
  //const animation=useSharedValue(1);
  
  
  
  const bellIconPressedInHomeScreenDoThis = () => {
    alert('Bell icon button pressed From Home Screen...');
    
  };
  
  
  const removingNowGrayColor = () => {
    //setthreeLineButtonClicked(false);
    
    alert("Removing Gray Color");
  };
  
  
  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  
  const [clicked,setClicked]=useState(false);
  const animatedStyle=useAnimatedStyle(()=>{
    //return {transform:[{translateX:animation.value}] };
    return {transform:[{rotate:`${animation.value}deg`}] };
    //return {transform:[{scale:animation.value}] };
  })
  return (
    <View style={styles.container}>
      {/* This below View tag is our box which is not having anything inside it, but we will use this box to animate it */}
      <Animated.View style={[{width:100,height:100,backgroundColor:'orange'},animatedStyle]}></Animated.View>



                  <Animated.View>
                  {/*View to hold our created Drawer Navigation Three line image button */}

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(-45),        
                    }}>
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      //onPress={() =>
                        //ChildRef.current.openSideNavigationMethod() ||
                        //setthreeLineButtonClicked(
                          //</View>ChildRef.current.bringGrayColor
                        //)
                      //}
                      
                      >
                      <AllUITogether show={'SideDrawerThreeLineImage'} />
                    </TouchableOpacity>

                    {/*View to hold Side Drawer Opening Icon ends here at below View  */}
                  </View>

                  
                  
                  {/* Another Module for JEWEL CART text starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopLabelForPagesListedInBottomNavigation'}
                      topLabelForPagesListedInBottomNavProps={'JEWEL CART'}
                      marginLeftPropsForTopLabelForPagesInBottomNav={31}
                    />
                  </View>
                  {/* Another Module for JEWEL CART text Ends here: */}

                  {/* Another Module for Bell icon starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopSmallIcon'}
                      dothisWhenTopSmallIconPressedProps={
                        bellIconPressedInHomeScreenDoThis
                      }
                      bellNotificationNumberProps={bellNotificationNumber}
                      iconToDisplayPathProps={require('./images/bell.png')}
                      showBadgeAlsoprops={true}
                      widthOfTopSmallIconprops={25}
                      heightOfTopSmallIconprops={30}
                      marginTopOfTopSmallIconprops={-4}
                      marginLeftOfTopSmallIconprops={85}
                    />
                  </View>
                  {/* Another Module for Bell icon Ends here: */}
                </Animated.View>




      <TouchableOpacity 
      style={{borderWidth: 1,width:200,height:50,justifyContent: 'center',alignItems:'center',marginTop:30}}
      onPress={()=>{
        if(clicked){



          //animation.value=200;


          animation.value=withSpring(360);

          /*To make the animation faster we can reduce the duration from 500 to 50, this will make animation faster without smoothness */
          //animation.value=withTiming(100, {duration:500});


          //animation.value=withSpring(1);
          
        
        
        
        
        }else{
          
          //animation.value=-200;

          animation.value=withSpring(0);
          //animation.value=withSpring(-100);
          //animation.value=withTiming(-100, {duration:500});


          //animation.value=withSpring(0.5);
                  }
        setClicked(!clicked);
        
        
        }}
      >
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});

//make this component available to the app
export default App;