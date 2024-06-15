import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

import ItemContext from "../contexts/ItemSelected";

export default function ProductDetail() {
	const [itemSelected, setItemSelected] = useContext(ItemContext);
	return (
		<Box>
			<Box
				w={"100%"}
				maxW={"800px"}
				m={"0 auto"}
				p={"0 10px"}
				pb={"60px"}
				backgroundColor={"white"}
			>
				<Flex alignItems={"center"} h={"30px"}>
					<Link to="/" onClick={() => setItemSelected({})}>
						<FiArrowLeft size={16} /> Voltar
					</Link>
					<Flex>Detalhe do produto</Flex>
				</Flex>

				<Flex>
					<img src={itemSelected.img} alt="Teste img produto" />
				</Flex>

				<Flex>
					<Box className="infos">
						<span>
							<strong>Produto: </strong> {itemSelected.name}
						</span>
						<span>
							<strong>Descrição: </strong>{" "}
							{itemSelected.description}
						</span>
						<span>
							<strong>Valor: </strong>{" "}
							{itemSelected.price.toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</Box>
				</Flex>

				<Flex>
					<h2>Misturas</h2>
					<input type="checkbox" name="mistura" id="mistura" />
					<input type="checkbox" name="mistura" id="mistura" />
					<input type="checkbox" name="mistura" id="mistura" />
					<input type="checkbox" name="mistura" id="mistura" />
					<h2>Guarnição</h2>
					<label htmlFor="arroz branco">Arroz Branco</label>
					<input type="radio" value="Arroz Branco" name="guarnicao" />
					<label htmlFor="arroz a grega">Arroz à Grega</label>
					<input
						type="radio"
						value="Arroz a Grega"
						name="guarnicao"
					/>
					<h2>Salada</h2>
					<label htmlFor="salada de maionese">
						salada de maionese
					</label>
					<input
						type="radio"
						value="salada de maionese"
						name="guarnicao"
					/>
					<label htmlFor="salada de repolho">Arroz à Grega</label>
					<input
						type="radio"
						value="salada de repolho"
						name="guarnicao"
					/>
					<h2>Outros</h2>
				</Flex>

				<Flex>
					<Box>
						<span>Informações Adicionais</span>
					</Box>
					<textarea
						name="desc"
						onChange={(e) => setObservation(e.target.value)}
						cols="30"
						rows="10"
					></textarea>
				</Flex>
			</Box>

			<Flex>
				<Box>
					<button
						className="quantify"
						// onClick={() => handleChangeQuantity(1)}
					>
						<FaPlus size={18} />
					</button>
					<span>1</span>
					<button
						className="quantify"
						// onClick={() => handleChangeQuantity(-1)}
					>
						<FaMinus size={18} />
					</button>
				</Box>
				<Box>
					<button className="add">
						<FiShoppingBag size={18} /> ADICIONAR
					</button>
				</Box>
			</Flex>
		</Box>
	);
}
