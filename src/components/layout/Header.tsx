import { memo, useCallback, VFC } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickUserManage = useCallback(
    () => history.push("/home/user_manage"),
    [history]
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), [
    history
  ]);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManage}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManage={onClickUserManage}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
