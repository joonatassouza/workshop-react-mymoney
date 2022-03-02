import { useEffect, useState } from "react";
import { Container } from "./styles";

interface InputProps<T> {
  flex?: boolean;
  width?: number;
  placeholder?: string;
  value: T;
  onValueChange: (value: T) => void;
}

type Acceptable = string | number;

export const Input = <T extends Acceptable>({
  flex,
  width,
  placeholder,
  value,
  onValueChange,
}: InputProps<T> & React.HTMLProps<HTMLInputElement>): JSX.Element => {
  const [inputValue, setInputValue] = useState(
    value ? String(value) : undefined
  );

  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(String(value));
    }
  }, [value, inputValue]);

  return (
    <Container
      flex={flex}
      width={width}
      placeholder={placeholder}
      value={inputValue}
      onChange={({ target }) => onValueChange(target.value as T)}
    />
  );
};
