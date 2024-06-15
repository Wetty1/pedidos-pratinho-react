import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

export default function NavBarCart() {
	return (
		<Box
			position={"fixed"}
			top={0}
			left={0}
			height={"60px"}
			w={"100%"}
			m={"0 auto"}
			zIndex={2}
			background="linear-gradient(180deg, #0004, #0002)"
			p={"10px"}
			alignContent={"center"}
		>
			<Flex
				justifyContent={"space-between"}
				alignItems={"center"}
				maxW={"800px"}
				m={"0 auto"}
				p={"0 10px"}
				w={"100%"}
			>
				<Flex>
					<MdShoppingCart />
					<span>Total: R$ 0,00</span>
				</Flex>
				<span>Itens: 0</span>
			</Flex>
		</Box>
	);
}
