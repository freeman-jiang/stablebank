import {
  Box,
  FlatList,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useRef, useState } from "react";
import { Dimensions, ListRenderItem, ViewToken } from "react-native";

import Card1 from "../../assets/card-1.png";
import Card2 from "../../assets/card-2.png";
import Card3 from "../../assets/card-3.png";

import Pix from "../../assets/pix.png";
import AppleWalletLogo from "../../assets/apple-wallet.png";
import { Dot } from "../../components/Dot";
import { AntDesign } from "@expo/vector-icons";
import { useLang } from "../../context/lang";

const Cards = [Card1, Card2, Card3];
const screenWidth = Dimensions.get("window").width;

interface onViewableItemsChangedProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const Spend = () => {
  const { isEN } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem: ListRenderItem<any> = ({ index, item }) => (
    <Image
      key={index}
      mt={3}
      justifyContent={"center"}
      w={screenWidth}
      h={"100%"}
      source={item}
      alt="Credit Card"
      resizeMode="contain"
    />
  );

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: onViewableItemsChangedProps) => {
      setActiveIndex(viewableItems[0].index!);
    }
  );

  return (
    <VStack w="100%" h="100%" safeArea alignItems="center" space={0} pt={6}>
      <Heading color="gray.900" fontSize={32} alignSelf="flex-start" ml={6}>
        {isEN ? "Your Cards" : "Suas Cartas"}
      </Heading>
      <Box h={260}>
        <FlatList
          data={Cards}
          renderItem={renderItem}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={screenWidth}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={1}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </Box>
      <HStack mb={4} space={2}>
        {Cards.map((card, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </HStack>
      <HStack mt={2} mx={6}>
        <Pressable
          bg="gray.900"
          w="100%"
          py={4}
          rounded="xl"
          _pressed={{
            bg: "gray.800",
          }}
        >
          <HStack justifyContent={"center"}>
            <Image
              source={AppleWalletLogo}
              alt="Apple Wallet Logo"
              h="100%"
              w={8}
              resizeMode="contain"
            />
            <Text ml={2} fontSize={16} fontWeight={500} color="white">
              {isEN ? "Add to Apple Wallet" : "Adicionar à Apple Wallet"}
            </Text>
          </HStack>
        </Pressable>
      </HStack>

      <VStack space={4}>
        <HStack mt={4} mx={6}>
          <Pressable
            bg="gray.900"
            w="100%"
            py={4}
            rounded="xl"
            _pressed={{
              bg: "gray.800",
            }}
          >
            <HStack justifyContent={"center"} alignItems="center">
              <Image
                source={Pix}
                alt="Pix Logo"
                h="100%"
                w={12}
                resizeMode="contain"
              />
              <Text ml={2} fontSize={16} fontWeight={500} color="white">
                {isEN ? "Pay with PIX" : "Pagar com PIX"}
              </Text>
            </HStack>
          </Pressable>
        </HStack>
        <HStack mx={6}>
          <Pressable
            bg="gray.900"
            w="100%"
            py={4}
            rounded="xl"
            _pressed={{
              bg: "gray.800",
            }}
          >
            <HStack justifyContent={"center"} alignItems="center" space={1}>
              <Text fontSize={16} fontWeight={600} color="white">
                {isEN ? "Pay with" : "Pagar com"}
              </Text>
              <HStack space={0} alignItems="center">
                <Icon
                  //@ts-ignore
                  as={<AntDesign name="apple1" />}
                  color="white"
                  size="sm"
                />
                <Text fontSize={16} fontWeight={600} color="white">
                  Pay
                </Text>
              </HStack>
            </HStack>
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  );
};
