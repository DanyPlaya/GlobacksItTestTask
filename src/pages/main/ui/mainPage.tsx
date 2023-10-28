import { Box } from "@chakra-ui/react";
import cls from "./mainPage.module.css";
import { UserCard } from "@/entities/userCard/ui/userCard";
import { PostSearchBar } from "@/features/postFilter";
export const MainPage = () => {
  return (
    <Box className={cls.main}>
      <PostSearchBar />
      <UserCard phone="234234" email="234234234" name="asdrfasdf" />
    </Box>
  );
};
