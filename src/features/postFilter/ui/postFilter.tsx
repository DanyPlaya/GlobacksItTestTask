import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent } from "react";
type PostSearchBarType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const PostSearchBar = (props: PostSearchBarType) => {
  const { onChange, value } = props;
  return (
    <InputGroup width="1120px" height="48px" marginBottom={"32px"}>
      <InputRightElement children={<SearchIcon />} />
      <Input
        value={value}
        onChange={(e) => onChange(e)}
        border="1px solid #D4DEFE"
        borderRadius="24px"
      />
    </InputGroup>
  );
};
