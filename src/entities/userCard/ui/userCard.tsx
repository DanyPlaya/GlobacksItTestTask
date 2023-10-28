import { Box, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { UserData } from "../types/types";
import cls from "./userCard.module.css";
import EmailIcon from "@/shared/assets/EmailIcon.svg?react";
import PhoneIcon from "@/shared/assets/PhoneIcon.svg?react";
type UserCardPropsType = {
  phone: string;
  email: string;
  name: string;
};
export const UserCard = (props: UserCardPropsType) => {
  const { phone, email, name } = props;
  return (
    <Card className={cls.card}>
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
};
