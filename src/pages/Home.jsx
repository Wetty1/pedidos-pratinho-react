import { Box, Flex, Stack, VStack, Img, Text } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";

import data from "../tmp/tmp-basedata";
import { FiClock, FiMapPin } from "react-icons/fi";
import { MdDirectionsBike } from "react-icons/md";

import ItemContext from "../contexts/ItemSelected";
import Logo from "../assets/logo.jpg";

export default function Home() {
	const navigate = useNavigate();
	const [itemSelected, setItemSelected] = useContext(ItemContext);

	const handleDetails = useCallback(
		(data) => {
			console.log("chamou");
			setItemSelected(data);
			navigate("/product/" + data.id);
		},
		[setItemSelected]
	);

	return (
		<Box w="100%">
			<Flex
				h={"250px"}
				background={"#e1e2ea"}
				flexDir={"column"}
				justifyContent={"space-evenly"}
				alignContent={"center"}
				alignItems={"center"}
			>
				<Img height={"180px"} src={Logo} alt="" />
				<Text
					fontFamily={"roboto, sans-serif"}
					fontSize={"2xl"}
					fontWeight={"600"}
				>
					{data.shop.name}
				</Text>
			</Flex>

			<Box
				w={"100%"}
				p={"0 10px"}
				maxW={"800px"}
				backgroundColor={"white"}
				m={"0 auto"}
			>
				<Flex
					justifyContent={"space-between"}
					h={"110px"}
					mb={"16px"}
					p={"0 2%"}
				>
					<Flex
						h={"100%"}
						flexDir={"column"}
						justifyContent={"space-evenly"}
						alignContent={"center"}
						alignItems={"flex-start"}
						fontSize={"sm"}
					>
						<span>
							<FiClock />
							{data.shop.opening_hours}{" "}
						</span>
						<span>
							<FiMapPin />
							{data.shop.address}{" "}
						</span>
						<span>
							<MdDirectionsBike /> {data.shop.delivery_time}
						</span>
					</Flex>
					<Box
						pos={"relative"}
						top={"10px"}
						fontSize={"sm"}
						border={0}
					>
						<span>
							{new Date().getHours() > 19
								? "•Aberto"
								: "•Fechado"}
						</span>
					</Box>
				</Flex>

				<Stack spacing="24px" direction={"column"}>
					{data.categories.map((category) => (
						<VStack key={category.name} dir="column" gap={2}>
							<Text fontWeight={"500"} fontSize={"lg"}>
								{category.name}
							</Text>
							{data.menu
								.filter(
									(item) => item.category == category.name
								)
								.map((item) => (
									<Flex
										key={item.name}
										cursor={"pointer"}
										onClick={() => handleDetails(item)}
										justifyContent={"stretch"}
										alignItems={"center"}
										w={"100%"}
										p={"55px 4px"}
										height={"96px"}
										borderTop={"1px solid #e1e2ea"}
										_hover={{
											backgroundColor: "#e1e2ea33",
										}}
										_last={{
											borderBottom: "1px solid #e1e2ea",
										}}
									>
										<Flex
											justifyContent={"space-between"}
											pl={"8px"}
											w={"100%"}
										>
											<Flex
												flexDir="column"
												justifyContent={"space-evenly"}
												alignItems={"flex-start"}
											>
												<Text
													m={0}
													fontWeight={"500"}
													fontSize={"lg"}
													className="title"
												>
													{item.name}
												</Text>
												<Text
													m={0}
													fontWeight={"400"}
													fontSize={"sm"}
													className="description"
												>
													{item.description}
												</Text>
												<Text
													m={0}
													fontWeight={"500"}
													fontSize={"lg"}
													className="price"
												>
													{item.price.toLocaleString(
														"pt-br",
														{
															style: "currency",
															currency: "BRL",
														}
													)}
												</Text>
											</Flex>
											<Img
												src={item.img}
												alt="image"
												h={"80px"}
												margin={"auto 0"}
												border={"1px solid #e1e2ea"}
												borderRadius={"10px"}
											/>
										</Flex>
									</Flex>
								))}
						</VStack>
					))}
				</Stack>
			</Box>
		</Box>
	);
}
