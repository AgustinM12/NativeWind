import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-red-500 font-bold">
        Try editing me! 🎉
      </StyledText>


      <StyledText className="text-blue-500 font-bold">
        ou chit
      </StyledText>

    </StyledView>
  );
}

export default withExpoSnack(App);