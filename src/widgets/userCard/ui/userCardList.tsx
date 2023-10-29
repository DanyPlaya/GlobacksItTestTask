import { UserCard, useGetUserByName } from "@/entities/userCard";

import { PostSearchBar } from "@/features/postFilter";
import { UserCardModal } from "@/features/userCardDetails";
import { useDebounce } from "@/shared/lib/useDebounce";
import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const UserCardList = () => {
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 500);
  const { data, refetch } = useGetUserByName({ name: debounceSearchValue });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    refetch();
  }, [debounceSearchValue, refetch]);
  return (
    <Box>
      <PostSearchBar value={searchValue} onChange={onChange} />
      <SimpleGrid columns={3} spacing="25px">
        {data?.map((user) => (
          <UserCard
            id={user.id}
            onOpen={onOpen}
            email={user.email}
            name={user.name}
            phone={user.phone}
            key={user.email}
          />
        ))}
        <UserCardModal isOpen={isOpen} onClose={onClose} />
      </SimpleGrid>
    </Box>
  );
};
