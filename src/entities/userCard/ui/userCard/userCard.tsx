import EmailIcon from "@/shared/assets/EmailIcon.svg?react";
import PhoneIcon from "@/shared/assets/PhoneIcon.svg?react";
import { Box, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import cls from "./userCard.module.css";
import { useUserStore } from "../../model/userStore";
import { memo } from "react";
type UserCardPropsType = {
  phone: string;
  email: string;
  name: string;
  id: number;
  onOpen: () => void;
};
export const UserCard = memo((props: UserCardPropsType) => {
  const { phone, email, name, onOpen, id } = props;
  const setPostId = useUserStore((state) => state.setUserPostId);
  const onClick = () => {
    onOpen();
    setPostId(id);
  };
  return (
    <Card onClick={onClick} className={cls.card}>
      <CardHeader className={cls.cardHeader}>
        <Text>{name}</Text>
      </CardHeader>
      <CardBody className={cls.cardBody}>
        <Box className={cls.cardBodyItem}>
          <PhoneIcon />
          <Text className={cls.cardItem}>{phone}</Text>
        </Box>
        <Box className={cls.cardBodyItem}>
          <EmailIcon />
          <Text className={cls.cardItem}> {email}</Text>
        </Box>
      </CardBody>
    </Card>
  );
});
