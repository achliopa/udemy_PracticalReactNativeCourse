# Udemy Course: React Native - The Practical Guide

* [Course Link](https://www.udemy.com/react-native-the-practical-guide/)
* [Course Repo]()


## Section 1 - Getting Started

### Lecture 2 - What is React Native

* Ionic, Swift: Write once, run everywhere
* React Native: Learn once, write everywhere => Build real mobile apps using JS and React(Native)
* React Native Apps are NOT web apps running on Mobile
* React native Apps are NOT hybrid apps (WebApp hosted by webview) like Ionic or Cordoba
* React native Apps and JS code are compiled to Native Code
* We use React+ReactNative code and components that compile to native code

### Lecture 3 - A Closer Look

* ReactNative uses React syntax to implkement native feats using similar concepts like:
	* Web React: <div> => Native Component (Android): android.view => Native Component (iOS): UIView => React Native: <View>
	* Web React: <inout> => Native Component (Android): EditText => Native Component (iOS): UITextField => React Native: <TextInput>
* IN react Native we dont use DOM jsx components but Mobile Native Components wrapped as JSX components

### Lecture 4 - What Happens to Javascript?

* in React native our JS logic is not compiled to native code. it stays in a JS Thread hosted by the React native App nile node.js
* UI is compiled to native

### Lecture 5 - Creating Our First React Native App

* We need Node JS. we need it to install packages and a RN dev server (update code as it run on simulator or device)
* we need Node v8.9 and above for the course and install 'create-react-native-app' 
* we install it with `sudo npm install -g create-react-native-app`
* we go to our workspace and run `create-react-native-app my-first-app`
* it installs expo-cli
* we cd in our app folder /my-first-app and run `npm start`
* WE NEED THE WATCHMAN FIX
```
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches     && \
  echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events  && \
  echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && \
  watchman shutdown-server 
```
* once app starts we download expo app on our mobile and scan the qr code with the app
* it launches on EXPO and a web server at 19002 is used for development
* expo is good for developing and testing aps but not good for publishing apps
* create-react-native-app (expo) runs a dev server as long as its running
* we open up app.js and mod <Text> content. it refreshes on device

### Lecture 6 - Dealing with Limitations of React Native

* React Native apps are hard to work.
* They allow us to write native apps with out knowing swift or java code
* Ionic provides ready made prestyled components that are platform dependent
* React Native does NOT do that. it gives a DOM like canvas and we have to style all manually
* In RN we get only basic set of prebuilt components
* RN has plenty of 3rd party libs
* So RN is not as easy as IONIC but is offers better perfor4mance (native)
* Problems with RN and how to solve them:
	* No or very Little Cross-Platform Styling of Components: => Style COmponents on our own or use 3rd party libs
	* Only a Basic Set of Pre-Built Components: => Build Components on our own or use Third-Party-Libraries
	* Tools to Create Responsive Design but no Responsiveness Out-of-the-Box: => Create REsponsive Designs on our own (check for Device-Size and OS)
* React Native gets a new Version each month
* Breaking Chaneges do happen
* High dependency on 3rd party libs that also change
* Bugs (evolving but used in production)
* Alternatives to RN:
	* Build Real Native APps. Downside? (Learn Java/Android for Android and Swift/ObjectiveC for iOS)
	* Build a Progressive Web App (Webapps using Native Feats). Downside? Users might not use a browser/OS supporting it
	* Use Ionic or similar cordova based solition (Native App running a webpage) Downside? Worst performance because of Webview
* There are TOols to overcome RN challenges

### Lecture 7 - What a Good React Native Course Offers

* introduction to Core Concepts
* teach the Basics
* dive into common 3rd party libs
* explain how to use important Tools
* show practical Examples
* focus on allowing us to move on on our own (how to find the solution)

### Lecture 8 - Course Requirements

* JS and React knowledge (got it) and Redux
* No android, java, switf, objectiveC knowledge required
* HW / Software
	* iOS on Win/linux NOT POSSIBLE (we can run and test it on an iPHONE)
	* android possible for all OS

### Lecture 9 - Course Outline

* Getting Started => Basics => Redux => Debugging => Link / use 3rd party libs => using app navigation => style and animate app => handling user input => camera and maps => using http (use backend) => authenticate users => polish & publish the app

### Lecture 10 - How to Get The MOst Out of this Course

* code along
* debug on our own (compare code with course repo)

### Lecture 11 - Useful Resources & LInks

* [Getting Started Quickly](https://facebook.github.io/react-native/docs/getting-started.html)
* [Official React Native Docs](https://facebook.github.io/react-native/docs/tutorial.html)
* [React Native github repo](https://github.com/react-community/create-react-native-app)

## Section 2 - Diving into the Basics

### Lecture 12 - Module Introduction

* Topics covered: 
	* Use of Base Components & Custom Component Creation
	* Styling of Components
	* Running the APp on SImulator or Device

### Lecture 13 - Creating a New Project

* we install 'create-react-native-app' and run it

Possible errors and solutions:
	* npm v5 related error: If you got any error that seems to be related to the version of npm you’re using (the error message should tell you if that’s the case), make sure to downgrade to npm version 4.x. You can easily do that by visiting nodejs.org and downloading Node 8.x from there. After installing it, you’ll also have npm version 4.x In case this doesn’t work, you can manually install npm v4.x by running npm install -g npm@^4
	*  systrace error: You might also encounter an error saying something about “systrace” when running npm start. Simply execute the two blue commands the error prints out. After running them, everything should work fine.
	* Watchman FIX:
```
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches     && \
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events  && \
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && \
watchman shutdown-server 
```
* we use `create-react-native-app rn-course` to create a new app project (no yarn dependencies)
* we use our prefered Code Editor
* in our project root folder we see pretty much standard nodejs struct
* app.js hosts the app root component
* App componet is loaded following create-react-native-app style
* all our code is wrapped by App or (expo App) amd 'app.json' config. to build a purely native app (no expo) we will have to eject it but we will see this later

### Lecture 14 - JSX Elements we Can and Can't Use

* App component in app.js is a React component using the known syntax
* also we see React Native component imports
* in package.json we see a expo build of react-native is used
* in RN docs we can see the available components
* we dont use plain React components as mobiles cannot understand them (html)
* we will try the app on simulator and device by ejecting it from expo. if we run it in expo it can run on device but thjrough expo

### Lecture 15 - Switching Away from create-react-native-app

* we will follow the app creation approach shown in [react native](https://facebook.github.io/react-native/docs/getting-started) following the 'Building Projects with Native Code' guide
* we select our OS and target OS.
* we follow the instructions
```
npm install -g react-native-cli
```
* we have java
* we install android sdk and follow the instructions on react-native get started guide
* we run the react native cli to create a project in our workspace `react-native init rncourse`
* using the cli instead of the `create-react-native-app` is a more powerful way
* tools change fast. so the toolcahin setup might change after time
* we want to lauch simulator with `npm run android` and `npm run ios` or `react-native run-android` and `react-native run-ios` 
* we can use npm but adding scripts in pacakge.json that run the react-native cli

### Lecture 17 - Running the App on an Android Simulator (+Setup)

* we install android-studio + android virtual device and sdk
* after installation we run the studio. => select existing project => browse to a create-react-native-app project => go to 'android' folder and open this foldr as an existing android studio project and build it.
* if we run in error we install the required sdk versions
* we open the AVD manager we select a device to emulate 
* we run the app on the emulator
* alternatively in the create-react-native-app generated project we run 'npm run anddroid' which uses to the react-native cli to build and run the app on the android emulator
* the command builds a nd compiles our code for android.js code is laucnshed as a thread spaewned by other android code (react native)
* we also get a dev server to reload the app to reflect code changes
* we have to make sure adb is set (add platform tools to the PATH)
* IMPORTANT TROUBLESHOOTING
```
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches     && \
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events  && \
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && \
watchman shutdown-server 
```
* AND `adb reverse tcp:8081 tcp:8081`

### Lecture 18 -  Running our App on a Real Android Device

* we need an android device and to tturn on developer mode
* we connect the phone to the dev machine
* we close emulator and run `npm run android`

### Lecture 19 - Preparing XCode (for iOS)

* download XCode from Mac Appstore and install it
* we should add our apple developer account
* dev account and team is required

### Lecture 20 - Running our App on an iOS Simulator

* install xcode
* launch it at least once
* run react-native run-ios


### Lecture 21 - Running our App on an iOS Device

* connect iphone to mac
* start xcode
* find xcode project in /ios and lauch it
* select our attached device from the list
* click the play button (it will recompile)
* we need to sign our app
* click add account and use our apple id (dev account) and team
* restart xcode
* we run again the command and it starts

### Lecture 22 - A Good Development Setup

* in android emulatr 'ctrl+m' opens debug menu (or shake real device)
* we can enable hot reloading or live reloading
* in ios cmnd+d for debug menu to enable live reloading

### Lecture 23 - Working on the App: Adding a TextInput

* in get started guide menu we have a list of components
* so9 far we have seen <View> and <Text>
* to capture Text input we use <TextInput />. we import it from react-native
* props and events can be OS specific
* we will use OnChangeText
* we need React component state to capture text
```
  state = {
    placeName: ''
  }
```
* we add a handler and styling and bind the textinput to state
```
        <TextInput 
          style = {{width: 300, borderColor: "black", borderWidth: 1}}
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler}
        />
```
* we implement the handler to alter state
```
  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  }
```
* it works but we need to add more functionality like clearing up text

### Lecture 24 - Syling: Understanding the Basics

* textinput gets placeholder as prop `placeholder= 'An awesome place'`
* we need to fix styling a bit
	* we remove border
	* we float the imput to the top with flexbox like CSS flexbox
* Flexbox uses 2 axis: Main Axis (Vertical or Column) and Cross Axis (Horizontal or Row) e.g
```
{
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
}
```
* React Native emulates CSS properties using same name but camelcase (no dash)
* `justifyContent: 'flex-start',0` means start laying out elements starting from start of axis (top or left)
* `flex: 1,` tells element to expand to occupy available space, relative to each other
* `alignItems: 'flex-start'` is the alignment line of elemetns along the opposite axis of that of distribution
* we needto add flexbox to the container containing the textview (box element)
* default flexDirection is 'column'
* we remove `flex: 1` and input is not resized and goes to top
* our container sytling is now (place on top evently place w/margin pure white background)
```
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
```
* Stylesheet component is a way in ReactNative to organize and write stylesheets (no .css files here)

### Lecture 25 - More on Flexbox

* React native supports only a subset of CSS properties and feats
* [CCS props supported by React Native](https://github.com/vhpoet/react-native-styling-cheat-sheet)
* [Flexbox tutorial](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Lecture 26 - Positioning Elements with Flexbox

*  we need to add a button to submit text
* we will use <Button>. button is a purely convenience component. button is one of th few elements  that changes its style along different platforms
* we import it from react-native
* we add it in View. but we need a nested View for in row styling
```
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
```
* flex: 1 makes the row element to occupy full height (stretch)
* we remove it and add stylesheet objects for input and button to give them 70% and 30% width align them to center and give their container a witdth of 100%
```
          <Button
            style = {styles.placeButton}
            title="Add" 
          />
```

### Lecture 27 - Adding a Button and Managing State

* we write a handler for button 'placeSubmitHandler' and bind it to the 'onPress' event prop
* we will use it to add the text from input to a state array and display the list
* the handler appends to the placesa array the placeName using the prevState
```
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState=>{
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    });
  }
```
* we also add a new view elelemtn to add the list of places
```
 const placesOutput = this.state.places.map((place,i) => (
      <Text key={i}>{place}</Text>
    ));
```
* we add jsx in View

### Lecture 28 - Creating a Custom Component

* we will create a new custom component to encapsulate the Text creating a list item
* we create a new /src folder ans in it a /components folder
* we name the file 'ListItem.js' for our functional component
* i use a View as component to extent as Text allows minimum styling
we pass the text as props names placeName and style it using Stylesheet
```
import React from 'react';
import { Text, View, Stylesheet } from 'react-native';

const ListItem = (props) => (
	<View style={styles.listItem}>
		<Text>{props.placeName}</Text>
	</View>
);

const styles = Stylesheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		backgroundColor: "#eee"
	}
});

export default ListItem;
```
* i use my component in App (import it and use it instead of Text) `<ListItem key={i} placeName={place} />`
* it does not take full width as the wrapping View has no styling
* we will declutter Ap component adding 2 custom components PlaceList and PlaceInput
* PlaceInput will be class based and handle use input in its state
* we put Jsx in its render() method
* xp stylesheet
* xp placeName state and NameChangeHandler
* we pass in the method to mod the places list as prop to the input to be called on the onpress handler

### Lecture 29 - Listening to Touch Events

* we want to be able to delete an item when we press on in (touch event)
* in ListItem View components we add as prop `onPress={props.onItemPressed}`
* we add the prop in the parent componet where we will implement it (is where the list is reciding)
* Views dont listen to onPress (like buttons). we need a wrapper TouchableWithoutFeedback component to be able to listen to touch events and put the onPress handler there
* there are many Touchable components for different use (TouchableOpacity, TOuchableHighlight) Android supports TouchableNegativeFeedback for ripple effect
* Button component is a Text wrapped in View wrapped in Touchable

### Lecture 30 - Reacting to Press Events

* we will remove the item instead of showing an alert `<ListItem key={i} placeName={place} onItemPressed={()=> props.onItemDeleted(i)} />`
* we implement on root compoent App where list recides
* to remove the item from list i use prev state and filter based on index
```
  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place, i => {
          return (i !== index);
        });
      };
    });
  }
```
* if our list is very long we need scrolling

### Lecture 31 - Using a ScrollView

* mobiles dont automatically dd scroll bars like web. we need a specialized component 'ScrollView' and replace View in PlaceList with ScrollView
* we test a scrollbar is added
* for old devices scrollin a very large list with ScrollView lags. we need progressive rednering

### Lecture 32 - Rendering Lists Correctly

* we need progressive rendering. rendering what is needed
* we need FlatList for this instead of ScrollView. its the og to for dynamic lists
* Flatlist nedds data as array and the renderItem as JSX. we refactor the render method to accomodate it
```
const PlaceList = (props) => {
  return (
    <FlatList 
      style = {styles.listContainer}
      data = {props.places}
      renderItem={(info)=>(
        <ListItem 
          place={info.item.value} 
          onItemPressed={()=> props.onItemDeleted(i)} 
        />
      )}
    />
  );
};
```
* the items in the data source need to have a key for FlatList. so need to be objects with key property. and ListItem no longer needs the key prop
* we need to mod the places list of strings to list of objects
```
    this.setState(prevState=>{
        return {
          places: prevState.places.concat({
            key: Math.random(),
            value: placeName})
        }
    });
```
* index is managed by FlatList
* in rendetItem the argument is the actual list and its item is the iterative leem,ent (object)
* we get an error on delete as it cannot find the index. we use 'info.item.key' and filter ont he key
```
  this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      };
    });
  }
```

### Lecture 33 - Adding Static images

* we will add static images in our ListItem and also when we click we will get a modal to confirm deletion
* we will now hardcode an image. later we will see how to attach an image from the phone image gallery
* we create a new folder /assets in /src for images
* we dl and save a sample image
* we import it in App.js `import placeImage from './src/assets/rio.jpg'`
* in the place object we add an image attr `image: placeImage`
* in ListItem we use it (we pass it in PlaceList as a ListItem prop `placeImage={info.item.image}`)
* importing the image in JS makes it an object and allows the app to optimize
* in ListItem we import and use Image component for the image passing in the source `<Image source={props.placeImage} />`
* we style the listitem to arrange them in a row
```
    flexDirection: "row",
    alignItems: "center"
```
* we need to give % to image as by default rn shows the image in its narural WxH
* if we set fixed width and height is goes on cover CSS mode subsampling the image
* we use the Image resizeMode prop to fix it `resizeMode="contain"`

### Lecture 34 - Using network Images

* if we dont have the image available locally we might want to import it from web (with URL)
* for the example we cp the image URL
* we emove static import
* we make the image attribute a nested obj literal with url attr
```
 image: {
              uri: "http://mangotreehostel.com/wp-content/uploads/2017/05/tours-rio-de-janeiro-mango-tree-hostel-1.jpg"
            }
```
* it works with some delay as fetching is async
* when fetching images from web we MUST set WIDTH and HEIGHT as RN cannot calculate it.
* we can dive in Image component docs to see other image settings like naming images with @2x or @3x to mod according to device screen size

### Lecture 35 - Adding a Modal

* we need a new component to wrap the Modal 'PlaceDetail.js'
* it ll be a functional component whitch returns react-native Modal comp
```
const PlaceDetail = props => (
  <Modal>
    <View>
      <Image source={props.placeImage} />
      <Text>{props.placeName}</Text>
      <View>
        <Button />
        <Button />
      </View>
    </View>
  </Modal>
);
```
* we import it in App.js `import PlaceDetail from './src/components/PlaceDetail';`
* we add it in container View but how to pass name and image of place. we have only yhe list. we need to know which is currently selected
* we will to it in the former placeDeletedHandler which we rename 'placeSelectedHandler'
* we also add in state placeSelected attr. 
```
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place=> {
          return place.key === key;
        })
      }
    });
  }
```
* we pass the place from state to the Modal `<PlaceDetail selectedPlace={this.state.selectedPlace}/>`
* we get an issue as selectedPlace is null and PlaceDetail uses it.
* we do conditional rendering
* we add title to Buttons and test. modal is shown occupying screen
* we style it with a sytlesheet obj
* we can control the modal visibility using the 'visible' prop ad setting it to true or false. we choose to bind it to the placeSelection `visible={props.selectedPlace !== null}`
* we can set an animation when modal shows `animationType="slide"`
* we need to style text and image
* we add button onPeress handlers which we pass as props from App
* closing the modal is simple simple null the selenction to alter visible prop
```
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }
```
* to delete the item we reuse previous code
```
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }
```
* we test and it works
* for Android we need to pass an onRequestClose prop `onRequestClose={props.onModalClosed}`

### Lecture 36 - React vs React Native

* 