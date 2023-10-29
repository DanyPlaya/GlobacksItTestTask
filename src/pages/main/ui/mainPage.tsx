import { UserCardList } from "@/widgets/userCard";
import { Box } from "@chakra-ui/react";
import cls from "./mainPage.module.css";
export const MainPage = () => {
  return (
    <Box className={cls.main} overflowX={"hidden"}>
      <UserCardList />
    </Box>
  );
};
