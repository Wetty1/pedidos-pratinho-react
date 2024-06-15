export default {
	shop: {
		name: "Pratinho Mãe e Filhas",
		img: "pmefLogo",
		opening_hours: "Seg-Sex 19:00-22:00",
		address: "Rua Curitiba 1080",
		delivery_time: "Entrega de 20 à 40 min",
	},
	categories: [
		{
			name: "Pratinho",
		},
		{
			name: "Bebidas",
		},
		{
			name: "Sobremesas",
		},
	],
	menu: [
		{
			id: 1,
			name: "Pratinho 1 Opção",
			img: "https://cdn.awsli.com.br/800x800/446/446822/produto/19915414/shopping---2023-07-05t144853-788-39sm6dfoom.jpg",
			description: "Pratinho com uma opção",
			category: "Pratinho",
			price: 9.0,
			fixed_price: false,
			choice: [
				{
					description: "1 Litro",
					value: 5.5,
				},
				{
					description: "2 Litros",
					value: 7,
				},
				{
					description: "Lata 350ml",
					value: 3.6,
				},
			],
			options: [],
		},
		{
			id: 2,
			name: "Pratinho 2 Opções",
			img: "https://cdn.awsli.com.br/800x800/446/446822/produto/19915414/shopping---2023-07-05t144853-788-39sm6dfoom.jpg",
			description: "Pratinho com duas opções",
			category: "Pratinho",
			price: 12.0,
			fixed_price: false,
			choice: [
				{
					description: "1 Litro",
					value: 5.5,
				},
				{
					description: "2 Litros",
					value: 7,
				},
				{
					description: "Lata 350ml",
					value: 3.6,
				},
			],
			options: [],
		},
		{
			id: 2,
			name: "Pratinho 3 Opções",
			img: "https://cdn.awsli.com.br/800x800/446/446822/produto/19915414/shopping---2023-07-05t144853-788-39sm6dfoom.jpg",
			description: "Pratinho com três opções",
			category: "Pratinho",
			price: 14.0,
			fixed_price: false,
			choice: [
				{
					description: "1 Litro",
					value: 5.5,
				},
				{
					description: "2 Litros",
					value: 7,
				},
				{
					description: "Lata 350ml",
					value: 3.6,
				},
			],
			options: [],
		},
		{
			id: 3,
			name: "Coca-cola",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuGSTKM8cDpPkmy57f4SO6tTexNWqPYOF2g&s",
			description: "",
			category: "Bebidas",
			price: 7.0,
			fixed_price: false,
			choice: [
				{
					description: "1 Litro",
					value: 5.5,
				},
				{
					description: "2 Litros",
					value: 7,
				},
				{
					description: "Lata 350ml",
					value: 3.6,
				},
			],
			options: [],
		},
		{
			id: 4,
			name: "Whopper",
			img: "https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.br/files/500x540px-Whopper_Rebel.png",
			description: "",
			category: "Sobremesas",
			price: 7.0,
			fixed_price: true,
			choice: [
				{
					description: "Pão arabe",
					value: 7,
				},
				{
					description: "Pão bola",
					value: 5,
				},
			],
			options: [
				{
					description: "Molho cheddar",
					value: 2,
				},
				{
					description: "Ovos",
					value: 1,
				},
				{
					description: "Molho Barbecue",
					value: 2,
				},
			],
		},
		{
			id: 5,
			name: "MEGA STACKER CHEDDAR 2.0",
			img: "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.br/files/300x270px-MS_Cheddar_2.png",
			description:
				"O Mega Stacker Cheddar voltou! Carne grelhada no fogo, bacon e muito queijo cheddar.",
			category: "Hamburguer",
			price: 7.0,
			fixed_price: true,
			choice: [],
			options: [
				{
					description: "Molho cheddar",
					value: 2,
				},
				{
					description: "Ovos",
					value: 1,
				},
				{
					description: "Molho Barbecue",
					value: 2,
				},
			],
		},
	],
};
