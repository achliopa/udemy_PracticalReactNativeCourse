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

### Switching Away from create-react-native-app

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

### Lecture 18 -  Running our App on a Real Android Device

### Lecture 19 - Preparing XCode (for iOS)

### Lecture 20 - Running our App on an iOS Simulator

### Lecture 21 - Running our App on an iOS Device