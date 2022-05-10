import React from "react";
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import { FeedbacksType } from "../Widget";
import { feedbackTypes } from "../../utils/utils/feedbackTypes";

import { styles } from "./styles";
import { theme } from "../../theme/theme";
import { ScreenshotButton } from "../ScreenshotButton";


interface Props {
  feedbackType: FeedbacksType;
}

export function Form({ feedbackType }: Props) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput 
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveShot={()=>{}}
          onTakeShot={()=>{}}
          screenshot=''
        />
      </View>
    </View>
  )
}