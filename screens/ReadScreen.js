import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Once upon a time, there lived a shepherd boy who was bored watching his flock of sheep on the hill. To amuse himself, he shouted, “Wolf! Wolf! The sheep are being chased by the wolf!” The villagers came running to help the boy and save the sheep. They found nothing and the boy just laughed looking at their angry faces.
                      “Don’t cry ‘wolf’ when there’s no wolf boy!”, they said angrily and left. The boy just laughed at them.
                      After a while, he got bored and cried ‘wolf!’ again, fooling the villagers a second time. The angry villagers warned the boy a second time and left. The boy continued watching the flock. After a while, he saw a real wolf and cried loudly, “Wolf! Please help! The wolf is chasing the sheep. Help!”
                      But this time, no one turned up to help. By evening, when the boy didn’t return home, the villagers wondered what happened to him and went up the hill. The boy sat on the hill weeping. “Why didn’t you come when I called out that there was a wolf?” he asked angrily. “The flock is scattered now”, he said.An old villager approached him and said, “People won’t believe liars even when they tell the truth. We’ll look for your sheep tomorrow morning. Let’s go home now”.
                      Moral
                      Lying breaks trust. Nobody trusts a liar, even when he is telling the truth.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    displayText:{
      fontSize: 25,
      textDecorationLine: 'underline',
      marginTop: 20,
      marginLeft: 20,
      textAlign: 'center',
      fontFamily: 'Georgia'
    }
  });