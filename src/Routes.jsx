import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import { Box } from "@chakra-ui/react";

export default function Routes() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/cart",
			element: <Cart />,
		},
		{
			path: "/product/:id",
			element: <ProductDetail />,
		},
	]);

	return (
		<Box w={"100%"} mt={"60px"}>
			<RouterProvider router={router} />
		</Box>
	);
}
