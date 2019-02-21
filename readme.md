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

* vanilla React lifecycle events are there
* most React feats are there

### Lecture 37 - Javascript - Supported Features

* In RN docs in Guides we can learn about JS environments
* we can learn about the JS runtimes that execute our JS code on the devices
* but what JS feats (eg ES7 ES6 or ES5) we can use???
* this depends on the RN version we use
* we can use Polyfills, axios XML parsing and so on
* JS is running on a standalone thread
* if its not listed we cant use it

### Lecture 39 - Useful Resources & Links

* [Understand the Basics](https://github.com/react-community/create-react-native-app)
* [Understand Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [More about images](https://facebook.github.io/react-native/docs/images.html)

## Section 3 - Using Redux with React Native

### Lecture 41 - A Brief Redux Refresher

* Redux is about using a central Store that manages application State
* one app State for all app
* React Components manipulate the State through dspatching Actions (like predefined messages to the store with type and payload for the data)
* Actions reach the Reducers. one per State attribute. The Reducers updtate the State
* Store updates trigger React Component updtates as State is bound to Component Props with the react-reduct library and the Connect HOC

### Lecture 42 - Installing Redux and Creating a Basic Setup

* we will move the App.js component state to Redux as this will declutter the app from passing state through props deep down the hierarchy
* we install redux `npm i --save redux react-redux` NOTICE: use `yarn install` instead
* in /src we add a folder named /store for redux related code
* in store we add a /reducers /actions
* in /reducers we add a places.js for app reducer. we implement a boilerplate reducer adding init state
```
const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state =initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer
```

### Lecture 43 - Setting Up Actions

* we add 'actionTypes.js' file in /actions folder to add types names
* we need an action for adding a place, one for deleting a place, one for selecting a place and one for unselecting a place
```
export const ADD_PLACE = "ADD_PLACE";
export const DELETE_PLACE = "DELETE_PLACE";
export const SELECT_PLACE = "SELECT_PLACE";
export const DESELECT_PLACE = "DESELECT_PLACE";
```
* we add a 'places.js' file for writing our action creators
* our function mimic the functions working on the places list in the app (handlers and all)
```
export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName
  };
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
}

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
}

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
}
```
* we add an 'index.js' file to export our export creator for easy import  in components `export { addPlace, deletePlace, selectPlace, deselectPlace } from './places';`

### Lecture 44 - Setting Up the Reducer

* we import the action types 
* we implement the switch case logic
* in reducer we alwys return a new state. we dont manipulate old state (immutability)
* we borrow code from the app so far
```
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
                key: Math.random().toString(),
                name: action.placeName,
                image: {
                  uri: "http://mangotreehostel.com/wp-content/uploads/2017/05/tours-rio-de-janeiro-mango-tree-hostel-1.jpg"
                }
              })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
                return place.key !== state.selectedPlace.key;
            }),
            selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
            selectedPlace: state.places.find(place=> {
              return place.key === action.placeKey;
            })
      };
    case DESELECT_PLACE:
      return  {
        ...state,
        selectedPlace: null
      };
```

### Lecture 45 - Creating the Store

* we need to connect react with redux
* in app root we need to wrap our root component with PRovider from react-redux
* provider binds the redux store with react
* we need the store in /store we add 'configureStore.js' and put a factory  function to return a store
* we `import { createStore, combineReducers } from 'redux';`
* we create a rootReducer
```
const rootReducer = combineReducers({
  places: placesReducer
});
```
* we configure and export the store
```
const configureStore() => {
  return createStore(rootReducer);
};

export default configureStore;`
``
* in index.js we import `import configureStore from './src/store/configureStore';
`
* in index.js  i create the store and pass it in the wrapper JSX wrapping App com
```
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
```
* AppRegistry expects a functional React component not just JSX blob
* we are done

### Lecture 46 - Connecting React Native to Redux

* we now connect redux state to react components props
* we use connect and mapStateToProps and mapDispatchToProps for actions
* mapping state attrs to props
```
const mapStateToProps = state => {
  return {
    places:state.places.places,
    selectedPlace: state.places.selectedPlaces
  };
};
```
* mapping action creators to props
```
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions'
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
};
```
* we do the bind `export default connect(mapStateToProps,mapDispatchToProps)(App);`
* we gut out App comp removing state and handlers
```
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
    });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }
```
* also in JSX i have to replace this.state to this.props
* We Test. It works and its FAST

### Lecture 48 - Useful Resources and Links

* [What's Redux](https://redux.js.org/introduction/core-concepts)
* [React Redux](https://github.com/reduxjs/react-redux)

## Section 4 - Debugging React Native Apps

### Lecture 50 - Using the Remote Javascript Debugging console.log

* in emulators we can press ctrl+M (android) or ctrl+d (ios) for dev menu
* to reload r+r (android) ctrl+r (ios)
* we can toggle inspector. by clicking an element we see info for it
* we can see performance monitor on to right corner
* debug js remotely allows remote debugging. clicking debug js remotely lauches :8081/debugger-ui on dev machines browser
* if we open chrome dev tools console we can see our console.log() printouts
* FIX: IF we have issues we change in browser from 10.0.2.2:8081 to localhost:8081 also we set in dev settings the debug server to localhost:80881 . restart the app
* we see it in action and it works

### Lecture 51 - Debugging with Breakpoints

* we Debug JS remotely activated we can add breakpoints in code with `debuger;` in our code when we reload the app we can do debuggin in our chrome dev tools. 
* in debug mode we can navigate in sources

### Lecture 52 - Debugging+++ with React native Debugger

* to inspect our elements inspector of dev menu is very limited
* 'react-native-debugger' is a great tools for the job.
* we go to [github repo](https://github.com/jhen0409/react-native-debugger) and download latest release for our os
* in the installation folder we run `./React\ Native\ Debugger` and then select debug JS remotely from dev tools. inthe debugger we have access to the view
* we can see the props, edit styles and so on

### Lecture 53 - Debugging Redux

* in the reac-native-debugger github page we see how to add [Redux DevTools Integration](https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md)
* in 'configureStore.js' we add an enhancer
```
let composeEnhancers = compose;

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};
```
* we restart dev tools and see the redux state in debugger where we can replay the actions

### Lecture 55 - Useful Resources & Links

* [More about RN Debugging](https://facebook.github.io/react-native/docs/debugging.html)

## Section 5 - Linking and Using Third Party Libraries

### Lecture 57 - Installing Libraries

* we will add an icons library names [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) 
* there are various icon families to choose from
* we install it `yarn add react-native-vector-icons`
* rn libraries have quirks depending on os so read the iinstallation instructions
* there is an automatic way to add them and a manual

### Lecture 58 - Automatic Linking

* a lot of libraries take some extra steps during the linking process which can't be automated.
* For libraries that don't require such extra steps, there is an automated way of linking available
* we need to install an extra package: `react-native-cli` we already have it
* to run commands with it, you need to install it globally. `npm install -g react-native-cli`
* eafter, in your project folder, you can run `react-native link`  to automatically link all libraries that require linking ONLY IF NO ADDITIONAL STEPS REQUIRED

### Lecture 59 - Linking Libraries on iOS

* in xCode for every 3rd party lib with native feats we need to take the following steps:
  * right click on libraries folder => add files to "project"
  * click on node_modules => pick the lib we just installed
  * in the lib folder there is an ios folder and android folder and an xcode project. we click add
  * we click on project itself => Build Phases => Link binary with libraries => click + icon
  * search for some words occuring in library name (search box) => find the lib => add the project file
  * do any aditional steps speced by the lib

### Lecture 60 - Linking Libraries in Android

* we follow manual installation instructions
* in the /android folder we open the 'settings.gradle' file we add 
```
include ':react-native-vector-icons'
+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```
* in the /android/app folder we open 'build.gradle' file we add in dependencies `compile project(':react-native-vector-icons')`
* in /android/app/src/main/java/com/rncourse/ we edit 'MainApplication.java' adding an import `import com.oblador.vectoricons.VectorIconsPackage;` and in protected List getpackages() return statement `, new VectorIconsPackage()`
* The AUTO linking way is:
*  in `/android/app/build.gradle` we add
```
project.ext.vectoricons = [
    iconFontNames: [ 'IonIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```
* we run `react-native run-android`

### Lecture 61 - Using Library Features: Adding Icons

* icons have to be added in textfields
* in PlaceDetail.js we will create our own custom button using an icon
* we import TouchableOpacity to replace Button
* we `import Icon from 'react-native-vector-icons/Ionicons';`
* we add an ICon comp size it and use name for the proper icon
* rerun react-native
* it shows . we wrap it with View for styling
* we add the handler and delete the delete button
```
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon 
              size={30}
              name="ios-trash"
              color="red"
            />
          </View>
        </TouchableOpacity>
```

## Section 6 - Navigation in React Native Apps

### Lecture 63 - Module Introduction

* Topics Covered
  * Whats different in Mobile navigation
  * Available Solutions
  * How-to: Stack Based Navi, Tab-based Navi, Side Drawers
  * How to: Pass data around
  * Add Redux in the mix

### Lecture 64 - Navigation in Web Apps vs Native Apps

* In Web we have URLs: React Router looks into the browsers search box and calls up the relevant React COmponent
* IN Native Apps we have: Tabs, Stacks, we still want to load React COmps though

### Lecture 65 - Exploring Native Navigation Solutions

* go to RN Docs => Guides => Navigating between screens
  * NavigatorIOS: works only on iOS
  * native-navigation: buggy unfinished
  * [react-native-navigation](https://github.com/wix/react-native-navigation): only good all around solution currently. there is v1 and v2
* Here we will use [ract-native-navigation v1](https://github.com/wix/react-native-navigation/tree/v1)
* we check and will follow /docs/installation-ios.md and -android.md

### Lecture 66 - Adding React Native Navigation to iOS

* cping the docs:
  * Make sure you are using react-native version >= 0.51. We also recommend using npm version >= 3
  * Install react-native-navigation latest stable version NOTE use @1.
```
yarn add react-native-navigation@1.x.x
```
  * In Xcode, in Project Navigator (left pane), right-click on the Libraries > Add files to [project name]. Add ./node_modules/react-native-navigation/ios/ReactNativeNavigation.xcodeproj (screenshots)
  * In Xcode, in Project Navigator (left pane), click on your project (top), then click on your target row (on the "project and targets list", which is on the left column of the right pane) and select the Build Phases tab (right pane). In the Link Binary With Libraries section add libReactNativeNavigation.a (screenshots)
  * In Xcode, in Project Navigator (left pane), click on your project (top), then click on your project row (on the "project and targets list") and select the Build Settings tab (right pane). In the Header Search Paths section add $(SRCROOT)/../node_modules/react-native-navigation/ios. Make sure on the right to mark this new path recursive (screenshots)
  * In Xcode, you will need to edit this file: AppDelegate.m.
  * Replace all of its code with this reference
  * Replace @"index.ios" with @"index" if you are using index.js as your entry point instead of index.ios.js and index.android.js (it is the default since React Native 0.49).

  ### Lecture 67 - Adding React Native Navigation to iOS

  * Install react-native-navigation latest stable version. `yarn add react-native-navigation@1.x.x`
  * Add the following in 'android/settings.gradle'.
  ```
  include ':react-native-navigation'
project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/android/app/')
```
  * Update SDK version in 'android/app/build.gradle' ONLY IF SDK uses is older
  ```
  android {
  compileSdkVersion 25
  buildToolsVersion "25.0.1"
  ...
}
* update dependencies in same file
dependencies {
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation 'com.android.support:design:27.1.0'
    implementation "com.facebook.react:react-native:+" // From node_modules
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile project(':react-native-navigation')
}
```
  * it needs v25 of SDK so we replace what we had so far
  * we replace all in dependencies
* In MainActivity.java it should extend com.reactnativenavigation.controllers.SplashActivity instead of ReactActivity. This file can be located in android/app/src/main/java/com/yourproject/.
```
import com.reactnativenavigation.controllers.SplashActivity;
public class MainActivity extends SplashActivity {

}
```
* In MainApplication.java, add the following (Make sure that isDebug and createAdditionalReactPackages methods are implemented.)
```
import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      // eg. new VectorIconsPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
```
* Also, add the following if you are using index.js as your entry point instead of index.ios.js and index.android.js (it is the default since React Native 0.49).
```
@Override
public String getJSMainModuleName() {
  return "index";
}
```
* Update /android/app/src/main/AndroidManifest.xml and set android:name value to .MainApplication
```
<application
  android:name=".MainApplication"
  ...
/>
```
* rerun the app IT WORKS BUT WE GET A BLANK SCREEN

### Lecture 68 - Finishing the Library Setup

* IF WE GET AN ERROR when usin both OS for simulation: in order to use ios and android with react-native-navigation we need 2 index.js files per OS then we create an 'index.android.js' and 'index.ios.js' and cp the code in both

### Lecture 69 - Registering and Rendering a Screen

* to show Screens in app with navigator we need to rtegister them 
* then we have to start the navigatorapp. tell navigator what to show (programatic load)
* we remove redux related code from index.js. basically we brinindex.js to its original form fefor adding redux
* in /src we add anew folder named /screens
* in screens we add /Auth folder and Auth.js for auth screen
* screens are stateful react components. we add AutScreen boilerplate code as stateful class componment
* we import an render some simple react-native components
* our simple screen is ready to integrate in Navigation
* we remove all code from App.js
* in App.js we dont render anything just register screens and start the app for react-native-navigation
* we `import { Navigation } from 'react-native-navigation';`
* now we ll register the screen to Navigation . we register screens by their ID before they are rendered. 
* first we import it `import AuthScreen from './src/screens/Auth/AuthScreen';`
* we register it giving it an id (convension is appname.screenname) and using a callback returning the component (much like the AppRegistry.registerCOmponent())
```
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
```
* we start an app (2 types of apps  available'tapbased' and 'singlescreen') passing in an object with screens
```
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
```
* in index.js we dont use AppRegistry and leave only `import App from './App';`
* we restart the app and IT WORKS (style is addaptive to the OS)

### Lecture 70 - Adding a Tabs Screen (Tabs Navigation)

* we add a button to our auth screen triggering a loginHandler wher we want to navigate to a tab based screen
* we add a new screens folder /MainTabs in there we add a file 'startMainTabs.js' and `import { Navigation } from 'react-native-navigation';`
* we add two new screen files in the folder SharePlace and FindPlace both in their respecive folders /FindPlace and /SharePlace
* we add boilerplace class Component code for both FindPlaceScreen and SharePlaceScreen adding boilerplate native JSX
* in App.js we import and register the new screens
```
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);
```
* in startMainTab.js we first register the components and start a TabBasedApp setting a tabds prop passing in the screens with labels as objects
* we implement the config oibj passin in the new screens (once registered screens can be used by id anywhere in the app code based)
* we now have to use the starMainTabs like we used the App before
* now we want to export a function that we can call to render these tabs
```
const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "awesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "awesome-places.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place",
      }
    ]
  });
}
```
* we import it in Auth.js and use it in the handler
* in iOS it works . in android it breaks as it needs icons

### Lecture 71 - Adding Icons to Tabs

* using icons on tabs is tricky
* we need to pass it in the icon: property as a file location. react-native-vector-icons provides a helper method for us
* in startMainTab.js we import Icon `import Icon from 'react-native-vector-icons/Ionicons';`
* in the code we use a Icon class method `Icon.getImageSource()` passin g in name, size color
* the method is async and it will create issues as it returns promise...
* we use Promis.all() to collect all promise results before moving on passing in an array of promises
```
Promise.all([
    Icon.getImageSource("md-map",30),
    Icon.getImageSource("ios-share-alt",30)
  ]).then((sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[1]
        }
      ]
    });
  }));
```
* NOTICE: we need to manualy link the react-native-vector-icons to work (getImageSource does not work otherwise)

### Lecture 72 - Connecting Screens to Redux

* to add redux we go to the file where we register our components (App.js)
* we import the Provider `import { Provider } from 'react-redux';`
* we cp our commented code from index.js  to create a store
```
import configureStore from './src/store/configureStore';
const store = configureStore();
```
* then we have to pass them in for every screen we want to connect to redux e.g `Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);`

### Lecture 73 - Updating Redux

* we refactor the redux side of our app
* remove select and deselect action creators and types
* we also remove them from reducer
* we add binds to redux in shareplace. we import PlaceInput component to embed it in the screen (imort and render) we need to pass a handler (dispatch action)
* so we wrap SharePlace with connect()
```
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
  }
};

export default connect(null,mapDispatchToProps)(SharePlaceScreen);
```
* in FindPlaces we embed the PlaceList and connect to redux
```
const mapStateToProps = state => {
  return {
    places: state.places.places
  };
} ;

export default connect(mapStateToProps)(FindPlaceScreen);
```
* we remove selectedPlace from reducer

### Lecture 74 - Pushing Pages (Navigating "Forward")

* in our app after navigation when we click a place on the list we get an error . we have no selectplace implemented now
* our aim is to push a new screen on the stack of screens when the user presses on teh item 
* the screen we will push will embed the PlaceDetail component (modal)
* we dont want to treat it as a modal so we remove the wrapping
* as we want to treat PlaceDetail as a  Screen we move it to /screens/PlaceDetail
* it is a functional component and not a class but thats ok
* we register it as a Screen in App.js
* we now have to find a way to push it on the stack of screens we will use react-native-navigation Screen API push() method
* react-native-navigator maintains a stack of screens for every app it manages
* th lib gives us a prop 'navigator' exposing this method
* in onItemSelected method in PlaceList i want to call this method using the key that gets captured by the selection. so we implement it in FindPlace as a handler
```
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  }

```
* it Works

### Lecture 75 - Popping Pages (Navigating "Backwards")

* we will transform the PlaceDetail to a class component to connect it to Redux so that we can dispatch the delete action from there (touchable)
we refactor the component. mod the navigation. registration and add the redux binding
* deleteplace action connector now needs a key. also we mod the reducer
* op is happening on the PlaceDetail delete handler 
```
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop();
  }
```

### Lecture 76 - More Navigator Methods

* popToRoot() method pops all screens except the root
* showModals and dismissModals can be used for Modals in navigator

### Lecture 77 - Adding a Side Drawer

* we add a new screen/screens/SideDrawer/SideDrawer.js and in there we add a simple react component (functional or class)
* we add boilerplate JSX
* we register it as scree in App.js `Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);
`
* we will now use it in startMainTabs using drawer configuration
```
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      }
```
* in iOs it works out of the box. for android not. so we will add menu buttons. for each tab screen that will show in the nav bar on top
* we first get the icon `Icon.getImageSource("ios-menu",30)`
* we then add the nav buttons in tabs object
```
tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu"
              }
            ]
          }
        },
```
* our app Crashes. navigator dows not know that the button should toggle the side drawer
* we need t om naually wire the button to the side drawer in screen reloading

### Lecture 78 - Using Navigation Events and Toggling the Drawer

* we implement a constructor in SharePlaceScreen to register our custom handler as a listener on NavigationEvents at an eraly stage of the component lifecycle
```
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);
  }
```
* the events logged in the console are 
  * bottomTabSelected
  * willAppear
  * didAppear
* React component lifecycle methods might not be called when using navigator. navigation events will appear though
* SideDrawer button also emits events
* we need to give our buttons ids that will come in event to see which was pressed
* in statMainTab we add in both tabs `,id: "sideDrawerToggle"`
* in the event handler we check event and use navigation obekect toggleDrawer method
```
  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonpress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }
```
* for android to work we need to explicitly se t a wdth to SideDrawer using react-native Dimensions to get the dim of device and pass it in the style `<View style={{width: Dimensions.get("window").width }}>`

### Lecture 79 - Finishing the Drawer

* we add some styling in SideDrawer for android as StyleSheet and use an array of styles to use both inline and object stuyles 
```
style={[
          styles.container, 
          {width: Dimensions.get("window").width * 0.8 }
        ]}
```
* we need to cp SideDrwer showing handler in every page (findplaces)

## Section 7 - Styling & Animating React Native Apps (Correctly)


### Lecture 82 - Module Introduction

* we will hanlde orientation changes
* we will style based on OS

### Lecture 83 - Using StyleSheet vs Normal JS Objects

* StyleSheet creates a styles object in the end but
  * it validates the styles
  * it sends them to native code more efficiently
* we  should use StyleSheets whenever possible

### Lecture 84 - Vanilla CS vs React Native Styles

* View items use flexbox
* main stylable componets are View and Text
* we use the RN  version of CSS styling
* using stings to pass css style properies is not valid. RN syntax is a must

### Lecture 85 - Flexbox in Action

* we start styling with AuthScreen
* we add 3 text inputs and 2 buttons
* we use flexbox for styling
* if we add flex: 1 to container it expands to all avaialbel space (no siblings)
* flexbox justifyCOntnet distributes allog the main axis (flexDirection)
* alignItems: "center" aligns on cross axis the center od items

### Lecture 86 - Styling with Relative Units

* in AuthScreen stylesheet we add an input object to style text inputs using fixed width
* fixed width is not the best choice. we can try 80%
* an alternative is to wrap inputs in a view and style it. in that way inputs become reusable

### Lecture 87 - "Global Styles" with Custom Components

* we add styling in the input stylesheet object for TextInputs
* we also remove the default android styling with a prop
* our style is in the AuthScreen so non reusable from other Screens or Components
* we add a Component to make it Resusable 'DefaultInput' (a functional component)
* we use the {...props} spread operator to use the props
```
import React from 'react';
import { TextInput,StyleSheet } from 'react-native';
const defaultInput = props => (
  <TextInput 
    style={styles.input} 
    underlineColorAndroid="transparent"
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
```
* we have a reusable styled TextInput which we import and use in AuthScreen

### Lecture 88 - Synthetic Cascading of Styles

* sometimes we want to use our reusable input but customize the style
* in the parent component (the one that calls it we set a stylesheet object with the same name as in the Reusable component and pass it as prop). it gets passed and takes effect and overwrites the stylking. this is because we use {..props} which distributes and overwrites the props of default input with same name
* if we move props destructuring before sth styles in default input. the local styles get applied in the end
* to merge them we use an array `style={[styles.input, props.style]}` (order is important in the array)
* if we pass an array of styles as prop it still works

### Lecture 89 - Styling Text

* to style text we can use StyleSheet
* text elements take different styles from view elemnets
* we follow the same pattern creating a reusable Header compoent 'HeadingText' as functional component rendering`<Text {...props} style={[styles.textHeading,props.style]}>{props.children}</Text>` to use all its props and children props (things inside the <>)

### Lecture 90 - Cascading Text Styles

* we want to use cascading text styles application wise like in web apps
* we will use a MainText component to serve this purpose which we will use instead of text setting the base
* if we wrap with text other elements the styles will cascade!!!!!!!!!
```
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
  <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainText: {
    color: "#bbb"
  }
});

export default mainText;
```
* in AuthScreen we wrap our HeadingText with that 
```
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
```
* BEWARE that in Android a Text element cannot wrap a View element. we have to use it to wrap Texts

### Lecture 91 - Adding a Background Image

* in AuthScreen we ll use a backgroundimage with the ImageBackground react-0native element
* we import and wrap the whole View passing as source the file which we import for optimization
* we also have to set a width and set to flex 1 as view parent is not screen any more (screen sets under the hood flex: 1)
* to fix for iOS we set in MainText background color to transparent
* we also have to style the button (DefaultInput). explicitly setting color does not work. we need our own custom vbbutton

### Lecture 92 - Creating a Re-Usable Custom Button

* we will do it in /UI/ButtonWithBackground
* we will customize TouchableHighlight element wrapping View and Text (we have done it in the past)
```
import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5
  }
});

export default buttonWithBackground;
```
* this code accepts the background color as prop and the onPress handler as prop. tesxt is passed inside as children
* we replace th e button in AuthScreen with that

### Lecture 93 - Editing the "SharePlace" Screen

* we ll repeat what we ve learned to restyle SharePlaceScreen
* we render now only a PlaceInput componet
* we want an image picker, map picker and then the PlaceInput Component restyled
* we ll remove the Button from PlaceInput and add it to the overall form
* we add a TextInput and Button to import image and same for map also the elements of PlaceInput we plavce them here and remove PlaceInput
```
      <View>
        <Text>Share a Place with Us!</Text>
        <View><Text>Image Preview!</Text></View>
        <Button title="Pick Image" />
        <View><Text>Map</Text></View>
        <Button title="locate Me"/>
        <TextInput placeholder="Place Name" />
        <Button title="Share a Place" />
      </View>
```
* TExt always has to be wrapped from <Text>
* we need to style the text adding style to view
* we give height to simulate map.. we need a scrollview as its big we import and apply it
* we cannot add stylesheet to scrollview as it has infinite space. we need to use the `contentContainerStyle={styles.container}` for styles
* we cannot scroll in android. so this props is problematic in android. to fix it we nest a View and add therer ethe stylesheet
* it works now
* we add our DefaultInput as textinput
* to add margin around buttons we wrap the m in a View (buttons cannot be styled directly)
* we use MainText and HeadingText
* we add an Image instead of placeholder and style it
* our final render() method
```
render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>
          <View style={styles.placeholder}>
            <Image source={imagePlaceholder} style={styles.previewImage} />
          </View>
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>
          <View style={styles.placeholder}>
            <Text>Map</Text>
          </View>
          <View style={styles.button}>
            <Button title="locate Me"/>
          </View>
          <DefaultInput placeholder="Place Name" />
          <View style={styles.button}>
            <Button title="Share a Place" />
          </View>
        </View>
      </ScrollView>
    );
  }
```

### Lecture 94 - Syling & Splitting the "Share Place" screen

* we gut out `<DefaultInput placeholder="Place Name" />` and place it in PlaceInput render replacing all JSX and removing all styles
* we dont need the submitt handler as button is not there and leave only the changeHandler to capture text inpuyt change
* defaultinput distributes all props in the wrapped textinput so we pass in the state and the handler
* we import the PlaceInput in SharePlace and use it
* we add a PickImage component as class based
* we put in the render all image related JSX from SharePlace 
```
  render() {
    return (
      <View>
        <View style={styles.placeholder}>
          <Image source={imagePlaceholder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => alert('Pick Image!')}/>
        </View>
      </View>
    );
```
* we import the component and use it in SharePlaceScreen
* we do the same for PickLocation component
* our view is broken as we added child elements to flex that are unstyles (extra views). we style them  in stylesheets

### Lecture 95 - Finishing the "Share Place" Screen

* we add a state to SharePlaceScreen keeping the placeName (why??? it is in PlaceInput) we convert PlaceInput ot a functional componet and do it all in SharePlaceScreen
* value and handler are communicated as props
```
          <PlaceInput 
            placeName={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler}
          />
```

### Lecture 96 - Your Change!

* style the sidedrawer

### Lecture 97 - Styling the Side Drawer

* it shoudl be touchable. we import TouchableOpacity and wrap View and add an Icon for logout
* we want icon and text in same line and view uses flexbox

### Lecture 99 - Intro: Cross Platform Styles & Responsiveness

* we are developing for 2 platforms. RN does not provide platform default styles so no-automatic cross-platform styling 
* we ve seen only button to be autostyled
* we also have to cover screen rotation. RN has no built-in responsiveness. flexbox helps but does not solve the problem

### Lecture 100 - Cross-Platform Styling Made Easy

* THere are 2 main tools to use:
  * we have 2 index files. one per platform 'index.ios.js' and 'index.android.js'. these files start the app. in these diffferent starting points we can load different layouts or even lauch different App components
  * Use the Platform API. provided by RN offers tools to detect OS at Runtime and use hooks to alter the render per OS

### Lecture 101 - Using the Platform API

* a good use for Platform API is on icons. Ionicons have different icons for IOS and Android and Buttons
* in ButtonWithBackground we ll use Android only TouchableNativeFeedback RN component. we import it and Platform API
* we use it in conditional rendering
```
.............
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.children}</Text>
    </View>
  );

  if(Platform.OS === "android"){
    return(
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
..........
```

### Lecture 102 - Loading Different Icons for Different Platforms

* in startMainTabs Screen we load and use some icons
* we do an OS based choice using Platform API using a terniary expression `Icon.getImageSource(Platform.OS === 'android'? "md-map" : "ios-map",30),`
* we do the same for sidedrawer

### Lecture 103 - Using Diferent Entry Points (into the App)

* in our app we have the same entry point (App Component)

### Lecture 104 - Cross Platform UI Libraries

* react-native-navigations is a cross-platform lib adjusting the feats to the  specific Platform
* example cross-platform UI libs doing the heavy lifting for us are very few and not well maintained:
  * [NativeBase](https://nativebase.io/#)
* Building such a lib is nottrivial. RN is fast evolving

### Lecture 105 - The "responsive Sytling" Problem

* in login screen flexbox tries to fit in all but has issue with all margins
* limiting orientation in configuration is a cheap way to avoid doing the work

### Lecture 106 - Responsive Design Solutions

* by default  we have no scrollview
* to detect orientation we can use the Dimensions API
* it gives the get() method to get for window or screen. window in android does not inclide the soft menu bar. screen does
* usually we use window.
* to detect orientation change we need to call get all the time. no way
* the API emits events on dimension changes to which we can listen `addEventListener("change")`

### Lecture 107 - Using the Dimensions API

* we will test it in the AusthScreen
* in landscape mode we will rearrabge the screen 
* we do conditional rendering based on Dimensions
```
    if(Dimensions.get("window").height > 500) {
      headingText = (         
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
```
* to syle textinputs side by side i wrap them in a view which will get conditional styling
```
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row"
  }
```
* to change each input width we wrap each in its own view that gets conditional styling

### Lecture 108 - Adjusting Styles Dynamically (to changing Width / Height)

* we have no responsive design as it does not change doruring change
* we add the event Listener to Contructor
* we use state to register orientation to use it in conditional rendering
* in state we set inline styles,,, to use in React comps
```
  state = {
    respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    }
  }
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change",(dims)=>{
      this.setState({
        respStyles: {
          pwContainerDirection: Dimensions.get("window").height > 500 ? "column" : "row",
          pwContainerJustifyContent: Dimensions.get("window").height > 500 ? "flex-start" : "space-between",
          pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    })
  }
```
* and we use it in style prop
```
            <View 
              style={{
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerJustifyContent
              }}
            >
```

### Lecture 109 - A Better Responsive Solution

* we are currently handling rensponsiveness in React component state
* in this way we miss the optimizations Stylesheet API does in native code
* we can solve this by adding different rules in stylesheet and then load different rules based on orientation
```
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
```
* our constructor and state become
```
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  }
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change",(dims)=>{
      this.setState({
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
      });
    })
  }
```
* in jsx we just do conditinal stylesheet loading based on state
```
<View 
              style={
                this.state.viewMode === "portrait" 
                  ? styles.portraitPasswordContainer 
                  : styles.landscapePasswordContainer
              }
            >
```
* for perfect center allignement in portrait mode with Flexbvox in Default Input we set margin only Top and Bottom to 8

### Lecture 111 - Cleaning Up Dimensions Listeners

* When we click on a list item in find places we get a warning: that cant perform a react state update in an unmounted component 
* this is becaouse we attached an event listener in AuthScreen constructor but we never detached it (this causes mem leak)
* wo detach it in componetWillUnmount lifecycle method
```
  componentWillUnmount() {
    Dimensions.removeEventListener("change",(dims)=>{
      this.setState({
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
      });
    })
  }
```
* note that we need to remove the exact function we mounted

### Assignment 2 - Make Place Detail Screen Responsive

* we put text in a separate view
* we set a constructor to add the listener to update styles and a lifecycle method 'componentWillUnmount' to remove it
* we add a nested view to wrap text and icons for flebox styling
* we do stylesheet sytling adding flexbox: 1 to contianer and subcontainers
* we do the same pattern with state and conditional styling like in Auth screen

### Lecture 112 - Styling Navigation Items (react-native-navigation)

* we want to add custom styling to react-native-navigation  elem,ents
* whenn we start our navigation apps we can pass styling objects (see the docs)
* e,g in startTabBasedApp we can pass
```
      tabsStyle: {
        tabBarSelectedButtonColor: "orabge"
      },
```
* for android instead of tabsStyle we use appStyle
* in meny bar added in FIndPlaceScreen and SharePlaceScreen we pass styling as static aclass attribute
```
  static navigatorStyle = {
    navBarButtonColor: "orange"
  }
```

### Lecture 113 - Preparing The App for Animations

* we want interaction in Find Places while we are loading the list. 
* it will be asynchronous so it will make sense for the wait time
* we will render a button instead of the list if the data are not loaded yet (conditional rendering)
* the data fetch status that controls ther ndering is added to state
* when we press the button we want to start the animation fade away the button and show the list so we add a press handler on touchable
* we do conditional styling on container based on state

### Lecture 114 - Using the Animated API

* RN provides Animations API which hooks in the native animations
* `Animated.Value` will change over time so adding it to React State we can use it in sytles and get animation
```
  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1)
  }
```
* to remove a prop we pass an initial val of 1 that will go to 0 over time
* we trigger the animation in the onpress handler. usign the timing() method to set animation timing params and config. and chain the start of thee aniamtion
```
    placesSearchHandler = () => {
      Amimated.timing(this.state.removeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    };
```
* we apply the animation in JSXX by wrapping the component we want to animate with the tag Animated.View. this container can be styles using the changing param we se tin state to control animation
```
<Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0,1],
                outputRange: [12,1]
              })
            }
          ]
        }}
      >
```
* to apply the animation changing value to a different attribute with different nees we use interpolate passing in the new configuration. timing is universal but interpolate applie only to the element that uses it

### Assignemnt 3 - Animations

* when we use start to start an animation (we have done it) we can pass in a callback to be called when the animation is done. 
* in it we change state (so that list is rendered) and we call a hadnler
```
.start(() => {
        this.setState({
          placesLoaded: true
        });
        this.placesLoadedhandler();
      });
```
* we want to fade in th elist

### Lecture 115 - Animations Summary

* we can animate only non-layout properties

## Section 8 - Handling user Input

### Lecture 118 - Module Introduction

* Topics covered
  * Dynamically Render Forms
  * Handle User Input
  * Handle the Soft Keyboard

### Lecture 119 - Managing Input/ Control State

* React dows not include form validation
* We have to do it ourserves
* We have to collect all the form data to an object that we will add to the state
* we could use Redux but the form state relates only to the AuthScreen Component.
* our state with all the form validation hooks becomes becomes
```
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      }, 
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  }
```
* we add onTextChange event handler to the DefaultInput and it will be passed downstream
We use the new state attr in the JSXand asdd a handler for when tesxt changes
```
            <DefaultInput 
              placeholder="Your E-Mail Address" 
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={(val) => this.updateInputState("email",val)}
            />
```
* we use an arrow method to wrap the handler as we want to pass in arguments and return the val which is expected by textInputHandler
* we impement a parametrical text handler to use in all 3 inputs
* we use [key] to interpolate object attributes based on input arg and also we use the prevState callback to have control before we actualy set the state
```
  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value
          }
        }
      }
    });
  }
```
* we repeat for password and confirmPassword

### Lecture 120 - Adding Custom Validation Logic

* our our goal is look at the ruels in state and update them accordingly based on bvalu and also change valid status
* we will add a file in /src/utility folder named validation.js and add validation methods
* we implemente a validate method that gets the value and the rules. we ll do the validation of the val based on the rules passed
* GOOD TIP: we iterate in an object literal with for loop and use switch based on attributes. SWEET
based on rule we call the appropriate method
* treating the obj literal as a Python dictionary we can get the value with `objname[key]`
* our validator
```
const validate = (val, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch(rule){
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(val, rules[rule]);
        break;
      default:
        isValid = true;
    }

    return isValid;
  }
```
* for email valifdation we use regEx wrapping it in / and using the test() method
```
const emailValidator = val => {
   return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
   .test(val);
}
```
* we import validate in Auth and use it to determine valid attr in state in the handler
* we refactor the handler and teh validation method adding the connectedValue concept which we pass as 3rd param in validate() to use it there `isValid = isValid && equalToValidator(val, connectedValue[rule]);`
* getting this value is complex and hackish
```
let connectedValue = {};
    if(this.state.controls[key].validationRules.equalTo){
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalCOntrol].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
```
* so our vlidate method used in auth looks like
```
this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            valid: validate(value,prevState.controls[key].validationRules, connectedValue),
            value
          }
        }
      };
    });
```
* we do all this as we want to use the value of equalTo for validation
* this is done because we used the name of the property as value.. so we used the key and not the value
* we test using debuger to check react check
* validation does not work perfectly because if after validating confirm i change the password is remains valid
* we mod the handler is again a hackish code
* our state setter becomes
```
this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            valid: validate(value,prevState.controls[key].validationRules, connectedValue),
            value
          },
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password' 
              ? validate(
                prevState.controls.confirmPassword.value,
                prevState.controls.confirmPassword.validationRules, 
                connectedValue)
              : prevState.controls.confirmPassword.valid,
            value
          }
        }
      };
    });
```
* a more elegant way would be to put an if statement before setState and add the extra code only for password mods
* we test and it works

### Lecture 121 - Using the Validation State

* we want to use the is Valid state to give optical feedback to user through styling
* in DefaultInput we will do conditional styling in DefaultInput
```
const defaultInput = props => (
  <TextInput 
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style, props.valid? null : styles.invalid]} 
  />
);
```
* we add in state a new attr for each input to know if it has been touched or not
* in the handler we set it to true
* we pass it in DefaultInput for styling
* if anything is invalid we disable the submit button using again conditional styling
* wea lso remove the touchable

### Lecture 122 - Dispatching an Auth Action

* when we click submit we goto MainTabs (no auth logic)
* we ll prepare to proper auth flow with adding an auth action to redux (TRY_AUTH) an auth action controler file auth.js and add a boilerplate action
```
import { TRY_AUTH } from './actionTypes';

 export const tryAuth = (authData) => {
  return {
    type: TRY_AUTH,
    authData
  };
}
```
* our AuthScreen is already connected to redux in App.js regiserCOmponent
* we just have to mapDispatchTOProps and import the action from /action/index
* our login handler with the action dispatch  becomes
```
  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value,
      confirmPassword: this.state.controls.confirmPassword.value
    }
    this.props.onLogin(authData);
    startMainTabs();
  }
```

### Lecture 123 - Switching Form (Auth) Modes

* we ll now work on the switch to login button
* we want it to work as a toggle button rendering the confirmPassword DefaultInput only when  we are in signup mode
* we add a new state state attr in AUth Comp `authMode: "login",`
* we add a handler to control it and bind it to the Switch TO Loging Button onPress event `onPress={this.switchAuthModeHandler}`
* we do conditional rendering of confirmPassword Input
* if we rotate ... we want when in login mode password to take 100% so we mod the condition for applying the styles
* we also have to check our submission button render condition 

### Lecture 124 - Configuring Text Input Components

* 