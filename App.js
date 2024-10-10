import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TextInput, Alert, Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './style.js';


function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [city, setCity] = useState('');
  const [coursetraining, setCourseTraining] = useState('');
  const [comments, setComments] = useState('');

  const handleCallPress = () => {
    Linking.openURL('tel:9602242949');
  };

  const handleSendMessage = () => {
    if (!name || !email || !mobileno || !city || !coursetraining || !comments) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      Alert.alert('Success', 'Your message has been sent!');
      setName('');
      setEmail('');
      setMobileNo('');
      setCity('');
      setCourseTraining('');
      setComments('');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.fixedHeader}>
        <Text style={styles.companyName}>Keen Infotech</Text>
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={styles.banner}>
          <Text style={styles.text}>
            6 month industrial training for MCA and B.Tech students in Udaipur.
            We are happy to assist your career-oriented 6 months industrial training for MCA and B.Tech students.
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.white} onPress={handleCallPress}>
            <Text style={styles.call}>Call: 9602242949</Text>
          </TouchableOpacity>
        </View>
        <ImageSection />
        <Descriptions />
        <ImageSections />
        <Description />
        <Courses />
        <SoftwareFeatures />
        <EnquiryForm
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          mobileno={mobileno} setMobileNo={setMobileNo}
          city={city} setCity={setCity}
          coursetraining={coursetraining} setCourseTraining={setCourseTraining}
          comments={comments} setComments={setComments}
          onSendMessage={handleSendMessage}
        />
        <ContactDetails />
      </ScrollView>
      <View style={styles.overlayContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => Linking.openURL('https://wa.me/9602242949')}>
          <Image style={styles.whtsp} source={require('./whtsp.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const AboutScreen = () => (
  <ScrollView>
    <Text style={styles.about}>About Keen Infotech</Text>
    <Text style={styles.text2}>
      KEEN INFOTECH Technologies is a Leading Software-Website-Mobile Apps development & IT Training Provider Company.
      KEEN INFOTECH Technologies is also leading IT Training Service Provider in Udaipur that provides comprehensive education
      and training in various fields of Information Technology, Software - Website & Mobile Apps Developments.
      KEEN INFOTECH is providing Winter Training / Summer Training / Live Project Internship Program 2022 in Udaipur
      for B.Tech/M.Tech/BCA/MCA/Bsc/Msc students in own Training-Development Centre with Live Projects.
      KEEN INFOTECH is registered by Govt. of Rajasthan & ISO 9001:2008 Certified Training Institute in Udaipur. (Certificate No. 21502041521)
    </Text>
  </ScrollView>
);

const ServiceScreen = () => (
  <ScrollView>
    <Text style={styles.about}>Services</Text>
    <Text style={styles.text2}>
      We provide a wide range of services including software development, website development, mobile app development, and IT training.
    </Text>
  </ScrollView>
);

const TrainingScreen = () => (
  <ScrollView>
    <Text style={styles.about}>Training</Text>
    <Text style={styles.text2}>
      We offer various training programs including 6 months industrial training, summer training, and live project internships for students.
    </Text>
  </ScrollView>
);

const CoursesScreen = () => (
  <ScrollView>
    <Courses />
  </ScrollView>
);

const DevelopmentScreen = () => (
  <ScrollView>
    <Text style={styles.about}>Development</Text>
    <Text style={styles.text2}>
      Our development services include software development, website development, and mobile app development.
    </Text>
  </ScrollView>
);

const ContactScreen = () => (
  <ScrollView>
    <ContactDetails />
  </ScrollView>
);

const ContactFormScreen = () => (
  <ScrollView>
    <EnquiryForm />
  </ScrollView>
);

const Descriptions = () => (
  <View>
    <Text style={styles.about}>About Keen Infotech</Text>
  </View>
);

const ImageSection = () => (
  <View style={styles.cardHeader}>
    <Image style={styles.image} source={require('./22.png')} />
  </View>
);

const ImageSections = () => (
  <Image style={styles.largeImage} source={require('./01.jpg')} />
);

const Description = () => (
  <View>
    <Text style={styles.text2}>
      KEEN INFOTECH Technologies is a Leading Software-Website-Mobile Apps development & IT Training Provider Company.
      KEEN INFOTECH Technologies is also leading IT Training Service Provider in Udaipur that provides comprehensive education
      and training in various fields of Information Technology, Software - Website & Mobile Apps Developments.
      KEEN INFOTECH is providing Winter Training / Summer Training / Live Project Internship Program 2022 in Udaipur
      for B.Tech/M.Tech/BCA/MCA/Bsc/Msc students in own Training-Development Centre with Live Projects.
      KEEN INFOTECH is registered by Govt. of Rajasthan & ISO 9001:2008 Certified Training Institute in Udaipur. (Certificate No. 21502041521)
    </Text>
  </View>
);

const Courses = () => (
  <>
    <Course
      imageSource={require('./icon2.png')}
      title="Summer Training"
      description="Keen Infotech provides 30 to 45 days summer training in various technologies including PHP, Java, .NET, etc."
    />
    <Course
      imageSource={require('./icon1.png')}
      title="Industrial Training"
      description="Keen Infotech offers 6 months industrial training for MCA and B.Tech students. This includes real-time project work and practical exposure."
    />
    <Course
      imageSource={require('./icon3.png')}
      title="Live Project Training"
      description="Keen Infotech provides live project training to help students gain hands-on experience in software development."
    />
  </>
);

const Course = ({ imageSource, title, description }) => (
  <>
    <View>
      <Image style={styles.keen} source={imageSource} />
    </View>
    <View>
      <Text style={styles.feature}>{title}</Text>
      <Text style={styles.text2}>{description}</Text>
    </View>
  </>
);

const SoftwareFeatures = () => (
  <View>
    <Text style={styles.about}>Features Of The Software</Text>
    <Text style={styles.text2}>
      College students of the MCA/BE/BTech/MTech/BCA/BSc IT stream have to develop software applications or websites.
      In this duration of 6 months, training in Udaipur MCA students can expect to complete their live project training
      with the following features:
    </Text>
  </View>
);

const EnquiryForm = ({ name, setName, email, setEmail, mobileno, setMobileNo, city, setCity, coursetraining, setCourseTraining, comments, setComments, onSendMessage }) => (
  <>
    <View>
      <Text style={styles.about}>General Enquiry or Apply for Free Demo</Text>
    </View>
    <InputField placeholder="Name*" value={name} onChangeText={setName} />
    <InputField placeholder="Email*" value={email} onChangeText={setEmail} />
    <InputField placeholder="MobileNo*" value={mobileno} onChangeText={setMobileNo} />
    <InputField placeholder="City*" value={city} onChangeText={setCity} />
    <InputField placeholder="Course/Training*" value={coursetraining} onChangeText={setCourseTraining} />
    <InputField placeholder="Comments*" value={comments} onChangeText={setComments} />
    <View style={styles.Button}>
      <Button color='blue' title='Send Message' onPress={onSendMessage} />
    </View>
    <View>
      <Text style={styles.about}>Get in Touch</Text>
      <Text style={styles.info}>All communications will be answered within 24 hours. Please fill up the below form, and you will get an email or phone call from our course coordinator in the next 24 hours who will answer all your questions and help you choose the right career option!</Text>
    </View>
  </>
);

const InputField = ({ placeholder, value, onChangeText }) => (
  <View style={styles.TextInput}>
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);

const ContactDetails = () => (
  <>
    <View>
      <Text style={styles.about}>Keen Infotech Udaipur</Text>
      <Text style={styles.contactDetails}>Address: 3rd floor, Mehta Sadan, Durga Nursery Road, near Sukhadia Memorial, Udaipur-313001, Rajasthan(INDIA)</Text>
      <Text style={styles.contactDetails}>Phone: 0294-6501415</Text>
      <Text style={styles.contactDetails}>Mobile: 9602242949</Text>
    </View>
  </>
);


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Services" component={ServiceScreen} />
        <Drawer.Screen name="Training" component={TrainingScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Development" component={DevelopmentScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="ContactForm" component={ContactFormScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
