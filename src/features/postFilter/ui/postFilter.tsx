import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const PostSearchBar = () => {
  return (
    <InputGroup width="1120px" height="48px" marginBottom={"32px"}>
      <InputRightElement children={<SearchIcon />} />
      <Input border="1px solid #D4DEFE" borderRadius="24px" />
    </InputGroup>
  );
};
