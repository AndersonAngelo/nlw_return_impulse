import { Trash, Camera } from "phosphor-react-native";
import React from "react";
import {
  View,
  TouchableOpacity
} from "react-native";
import { theme } from "../../theme/theme";

import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onRemoveShot, onTakeShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot
          ?
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
          :
          <Camera 
            size={24}
            color={theme.colors.text_secondary}
            weight="bold"
          />
      }
    </TouchableOpacity>
  )
}