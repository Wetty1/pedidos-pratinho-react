import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./Routes";
import NavBarCart from "./components/NavBarCart";

import ItemContext from "./contexts/ItemSelected";
import CartContext from "./contexts/CartContext";

function App() {
	const [itemSelected, setItemSelected] = useState({});
	const [cart, setCart] = useState([]);

	return (
		<>
			<ItemContext.Provider value={[itemSelected, setItemSelected]}>
				<CartContext.Provider value={[cart, setCart]}>
					<ChakraProvider>
						<NavBarCart />
						<Routes />
					</ChakraProvider>
				</CartContext.Provider>
			</ItemContext.Provider>
		</>
	);
}

export default App;
