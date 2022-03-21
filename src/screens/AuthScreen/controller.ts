import { useState } from "react";
import IMask from "imask";

export default function useController() {
  const PhoneMask = IMask.createMask({
    mask: "+{7}(000)-000-00-00",
  });

  const [inputValue, setInputValue] = useState("+7");

  const onChangeText = (text: string) => {
    setInputValue(PhoneMask.resolve(text));
  };

  return {
    inputValue,
    onChangeText,
  };
}
