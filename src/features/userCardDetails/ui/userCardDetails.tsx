import CloseIcon from "@/shared/assets/CloseIcon.svg?react";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import cls from "./userCardDetails.module.css";
import { useGetUserById, useUserStore } from "@/entities/userCard";
import { useEffect } from "react";
type UserCardInfoProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const UserCardModal = (props: UserCardInfoProps) => {
  const { isOpen, onClose } = props;
  console.log(isOpen, onClose);
  const postId = useUserStore((state) => state.postId);
  const { data, refetch } = useGetUserById({ id: postId });
  useEffect(() => {
    refetch();
  }, [postId, refetch]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className={cls.modal}>
        <ModalHeader>{data?.name}</ModalHeader>
        <ModalCloseButton marginTop={"24px"} marginRight={"24px"} as={"button"}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <SimpleGrid columns={2} spacingY={"14px"} spacingX={"40px"}>
            <Text className={cls.modalTextMain}>Телефон: </Text>
            <Text className={cls.modalTextProps}>{data?.phone}</Text>

            <Text className={cls.modalTextMain}>Почта:</Text>
            <Text className={cls.modalTextProps}>{data?.email}</Text>

            <Text className={cls.modalTextMain}>Дата Приема:</Text>
            <Text className={cls.modalTextProps}>{data?.hire_date}</Text>

            <Text className={cls.modalTextMain}>Должность:</Text>
            <Text className={cls.modalTextProps}>{data?.position_name}</Text>

            <Text className={cls.modalTextMain}>Подразделение:</Text>
            <Text className={cls.modalTextProps}>{data?.department}</Text>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
