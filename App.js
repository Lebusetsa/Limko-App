import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign, FontAwesome , FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      
      <View style={styles.logoArea}>

      <Image
           style={styles.logo}
           source={require("./limkokwingLogo.png")}
           />

      </View>

      <View style={styles.toolbar}>

     <TouchableOpacity>
     <FontAwesome name="home" size={35} color="white" />
            </TouchableOpacity>

            <TextInput 
        style={styles.textinput}
        placeholder="                Search Courses"
        onChangeText={(text)=>(text)}
          />

            <TouchableOpacity>
                <AntDesign name="bars" size={35} color="white"  />
            </TouchableOpacity>

      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>

      <Image
      style={styles.pic}
      source={require("./bsit.jpg")}
      />

      <View style={styles.courseBox}>

      <Text style={styles.course}>Bachelor of Science (Hons) in Software Engineering with Multi-Media</Text>

      <Text style={styles.contant}>This programme will assist students to develop and use multimedia systems. Students 
        are exposed and trained in the relevant programming skills with use of the multimedia 
        applications..... #High level programming languages C++ & JAVA...
      </Text>
      </View>

      <View style={styles.share}>

        <TouchableOpacity>
      <FontAwesome5 name="share" size={24} color="#29B6F6" />
      </TouchableOpacity>
          </View>

      <Image
         style={styles.pic}
         source={require("./IT.jpg")}
         />

         <View style={styles.courseBox}>
           <Text style={styles.course}>Bachelor of Science (Hons) in Iformation Technology</Text>
            <Text style={styles.contant}>A broad-based program of IT studies, which aims to acquaint students with a wide range 
            of problems that arise in the computing & Information Technology, together with diffent methods
             and technologies available as solutions</Text>
         </View>

         <View style={styles.share}>

           <TouchableOpacity>
         <FontAwesome5 name="share" size={24} color="#29B6F6" />
         </TouchableOpacity>

          </View>

         <Image
            style={styles.pic}
            source={require("./art.jpg")}
            />
      
        <View style={styles.courseBox}>

          <Text style={styles.course}>Bachelor of Arts (Hons) in Industrial Design</Text>

          <Text style={styles.contant}>The BA (Hons) in Industrial Design offers a strong curriculum
          that will give students an opportunity to explore and meet demands for innovation for a better living.
          The programme also enables graduates to contribute and support the development of the manufacturing
          industry. </Text>
        </View>

        <View style={styles.share}>

        <TouchableOpacity>
        <FontAwesome5 name="share" size={24} color="#29B6F6" />
        </TouchableOpacity>

        </View>
          
        </ScrollView>
        </SafeAreaView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    
  },
   
  scroll:{
    backgroundColor:"black",
    marginHorizontal:1,
  },

logoArea:{
  
  backgroundColor: 'black',
  width:'100%',
  justifyContent: 'center',
  alignItems: 'center',
},
logo:{
  width:120,
  height:65,
},
  toolbar:{
    backgroundColor:"black",
    width:'100%',
    height:70,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  textinput:{backgroundColor:'#E3F2FD',
  height:35,
  width:'60%',
  borderRadius:10,
  borderColor:'#CE93D8',
  alignItems:'center',
justifyContent:'center',
},

courseBox:{
  width:'100%',
  backgroundColor: '#263238',
  padding:10,
 
},

pic:{
  width:'100%',
  height: 250,
},

course:{
  fontSize: 20,
  color: '#E3F2FD',
  fontWeight: 'bold',
margin:10,
},

contant:{
  color: '#E3F2FD',
  fontSize: 18,
  margin: 10,
},

share:{
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor:'#E1F5FE',
},
});
