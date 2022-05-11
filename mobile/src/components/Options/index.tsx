import React from "react";
import { View, Text } from "react-native";

import { feedbackTypes } from "../../utils/utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { FeedbacksType } from "../Widget";

import { styles } from "./styles";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbacksType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe o seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object.
          entries(feedbackTypes).
          map(([key, value]) => (
            <Option
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbacksType)}
            />
          ))
        }
      </View>
      <Copyright />
    </View>
  )
}