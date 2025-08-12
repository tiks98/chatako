import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700 transform transition duration-300 hover:scale-125`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
	motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
	motion.a
)`bg-gray-200 rounded-xl block max-w-xs mx-auto sm:max-w-none sm:mx-0 transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`;
const CardImageContainer = styled.div`
	${(props) =>
		css`
			background-image: url("${props.imageSrc}");
		`}
	${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-xl rounded-b`}
`;
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
// 	${tw`mr-1 text-sm font-bold flex items-end`}
// 	svg {
// 		${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
// 	}
// `;

// const CardHoverOverlay = styled(motion.div)`
// 	${tw`absolute inset-0 flex justify-center items-center`}
// `;
// const CardButton = tw(PrimaryButtonBase)`text-sm`;

// const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
// const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
	${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
	heading = "Checkout the Menu",
	tabs = {
		Snacks: getSnacksCard(),
		Main: getMainCards(),
		// Soup: getFastFoodCards(),
		Desserts: getDessertsCards(),
	},
}) => {
	/*
	 * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
	 * as the key and value of the key will be its content (as an array of objects).
	 * To see what attributes are configurable of each object inside this array see the example above for "Starters".
	 */
	const tabsKeys = Object.keys(tabs);
	const [activeTab, setActiveTab] = useState(tabsKeys[0]);

	return (
		<Container>
			<ContentWithPaddingXl>
				<HeaderRow>
					<Header>{heading}</Header>
					<TabsControl>
						{Object.keys(tabs).map((tabName, index) => (
							<TabControl
								key={index}
								active={activeTab === tabName}
								onClick={() => setActiveTab(tabName)}>
								{tabName}
							</TabControl>
						))}
					</TabsControl>
				</HeaderRow>

				{tabsKeys.map((tabKey, index) => (
					<TabContent
						key={index}
						variants={{
							current: {
								opacity: 1,
								scale: 1,
								display: "flex",
							},
							hidden: {
								opacity: 0,
								scale: 0.8,
								display: "none",
							},
						}}
						transition={{ duration: 0.4 }}
						initial={activeTab === tabKey ? "current" : "hidden"}
						animate={activeTab === tabKey ? "current" : "hidden"}>
						{tabs[tabKey].map((card, index) => (
							<CardContainer key={index}>
								<Card
									className="group"
									href={card.url}
									initial="rest"
									// whileHover="hover"
									animate="rest">
									<CardImageContainer imageSrc={card.imageSrc}>
										{/* <CardRatingContainer>
											<CardRating>
												<StarIcon />
												{card.rating}
											</CardRating>
											<CardReview>({card.reviews})</CardReview>
										</CardRatingContainer> */}
										{/* <CardHoverOverlay
											variants={{
												hover: {
													opacity: 1,
													height: "auto",
												},
												rest: {
													opacity: 0,
													height: 0,
												},
											}}
											transition={{ duration: 0.3 }}>
											<CardButton>Buy Now</CardButton>
										</CardHoverOverlay> */}
									</CardImageContainer>
									<CardText>
										<CardTitle>{card.title}</CardTitle>
										<CardContent>{card.content}</CardContent>
										{/* <CardPrice>{card.price}</CardPrice> */}
									</CardText>
								</Card>
							</CardContainer>
						))}
					</TabContent>
				))}
			</ContentWithPaddingXl>
			<DecoratorBlob1 />
			<DecoratorBlob2 />
		</Container>
	);
};

const getSnacksCard = () => {
	const cards = [
		{
			imageSrc:
				"https://www.spiceupthecurry.com/wp-content/uploads/2017/09/fafda-recipe-9-500x500.jpg",
			title: "Bhavnagari Fafda",
			content:
				"Traditional Gujarati snack, crispy and served with spicy chutneys.",
			price: "$8.99",
			rating: "4.6",
			reviews: "12",
			url: "#",
		},
		{
			imageSrc:
				"https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
			title: "Vada Pav",
			content:
				"Mumbai’s iconic spicy potato fritter sandwich, served with chutneys.",
			price: "$7.99",
			rating: "4.9",
			reviews: "89",
			url: "#",
		},
		{
			imageSrc:
				"https://indianvegrecipe.com/wp-content/uploads/2019/08/kutchi-dabeli-recipe.jpg",
			title: "Dabeli",
			content:
				"A Gujarati street-food delicacy filled with spicy mashed potatoes, pomegranate, and peanuts.",
			price: "$8.99",
			rating: "4.6",
			reviews: "12",
			url: "#",
		},
		{
			imageSrc:
				"https://content.jdmagicbox.com/comp/ahmedabad/v8/079pxx79.xx79.140705122003.k9v8/catalogue/mri-panipuri-new-vadaj-ahmedabad-street-food-49b1126.jpg",
			title: "Panipuri",
			content:
				"A burst of flavors with crunchy puris, spicy water, and tangy fillings.",
			price: "$2.99",
			rating: "4.8",
			reviews: "32",
			url: "#",
		},
		{
			imageSrc:
				"https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC08208-1300x731.jpg?v=1699513010",
			title: "Khasta Kachori",
			content:
				"Crispy golden kachori served with a tangy, flavorful chaat twist.",
			price: "$5.99",
			rating: "5.0",
			reviews: "87",
			url: "#",
		},
		{
			imageSrc:
				"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1.jpg",
			title: "Veg Hakka Noodles",
			content: "Indo-Chinese fusion with stir-fried veggies and bold sauces.",
			price: "$9.99",
			rating: "4.6",
			reviews: "13",
			url: "#",
		},
	];

	return cards;
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getMainCards = () => {
	const cards = [
		{
			imageSrc: "https://static.toiimg.com/photo/52446409.cms",
			title: "Paneer Sabji",
			content: "Fresh cottage cheese cooked in a traditional spiced gravy.",
			price: "$10.99",
			rating: "4.7",
			reviews: "18",
			url: "#",
		},
		{
			imageSrc:
				"https://cookingfromheart.com/wp-content/uploads/2016/10/Paneer-Butter-Masala-3.jpg",
			title: "Paneer Butter Masala",
			content: "Creamy, rich, and mildly spiced, this is a crowd-pleaser.",
			price: "$11.99",
			rating: "4.8",
			reviews: "24",
			url: "#",
		},
		{
			imageSrc:
				"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/10/Jain-hobby1-copy.jpg?fm=webp&w=750&h=500&dpr=1",
			title: "Paneer Tikka (Smoky / Non-smoky)",
			content:
				"Char-grilled paneer infused with aromatic spices, available in smoky and non-smoky options.",
			price: "$12.49",
			rating: "4.6",
			reviews: "15",
			url: "#",
		},
		{
			imageSrc:
				"https://img-global.cpcdn.com/recipes/0c365071dcbaf79b/1200x630cq70/photo.jpg",
			title: "Bhungala Bateta",
			content:
				"A Kathiyawadi classic, featuring crispy fried potatoes and spicy sev.",
			price: "$9.99",
			rating: "4.5",
			reviews: "10",
			url: "#",
		},
		// {
		// 	imageSrc:
		// 		"https://thewhiskaddict.com/wp-content/uploads/2021/02/IMG_7290-1-1024x996.jpg",
		// 	title: "Ringan Bataka Nu Shaak",
		// 	content: "A beloved eggplant and potato curry seasoned to perfection.",
		// 	price: "$9.49",
		// 	rating: "4.4",
		// 	reviews: "8",
		// 	url: "#",
		// },
		{
			imageSrc:
				"https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png",
			title: "Chhole",
			content: "Punjabi-style chickpeas cooked in a bold and hearty masala.",
			price: "$9.99",
			rating: "4.7",
			reviews: "17",
			url: "#",
		},
		{
			imageSrc:
				"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/sabudana-khichdi-recipe.jpg",
			title: "Rajwadi Sabudana Khichdi",
			content:
				"A royal take on a classic fasting dish, full of flavor and tradition.",
			price: "$10.49",
			rating: "4.6",
			reviews: "11",
			url: "#",
		},
		{
			imageSrc:
				"https://blog.swiggy.com/wp-content/uploads/2024/11/Image-2_Jain-pav-bhaji-1024x538.png",
			title: "Pav Bhaji",
			content: "Butter-laden mashed veggie curry served with toasted buns.",
			price: "$9.49",
			rating: "4.8",
			reviews: "26",
			url: "#",
		},
	];

	// Shuffle array
	return cards;
};

// const getFastFoodCards = () => {
// 	const cards = [
// 		{
// 			imageSrc:
// 				"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 			title: "Samosa",
// 			content:
// 				"Crispy golden samosas served with a tangy, flavorful chaat twist.",
// 			price: "$5.99",
// 			rating: "5.0",
// 			reviews: "87",
// 			url: "#",
// 		},
// 		{
// 			imageSrc: "https://static.toiimg.com/photo/75831269.cms",
// 			title: "Panipuri",
// 			content:
// 				"A burst of flavors with crunchy puris, spicy water, and tangy fillings.",
// 			price: "$2.99",
// 			rating: "4.8",
// 			reviews: "32",
// 			url: "#",
// 		},
// 		{
// 			imageSrc:
// 				"https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
// 			title: "Vada Pav",
// 			content:
// 				"Mumbai’s iconic spicy potato fritter sandwich, served with chutneys.",
// 			price: "$7.99",
// 			rating: "4.9",
// 			reviews: "89",
// 			url: "#",
// 		},
// 		{
// 			imageSrc:
// 				"https://indianvegrecipe.com/wp-content/uploads/2019/08/kutchi-dabeli-recipe.jpg",
// 			title: "Dabeli",
// 			content:
// 				"A Gujarati street-food delicacy filled with spicy mashed potatoes, pomegranate, and peanuts.",
// 			price: "$8.99",
// 			rating: "4.6",
// 			reviews: "12",
// 			url: "#",
// 		},
// 	];

// 	// Shuffle array
// 	return cards;
// };

const getDessertsCards = () => {
	const cards = [
		{
			imageSrc:
				"https://www.cookingwithsiddhi.com/wp-content/uploads/2018/12/sukhadi-gur-papdi.jpg",
			title: "Sukhadi",
			content:
				"A wholesome Gujarati sweet made with jaggery, ghee, and wheat flour.",
			price: "$5.99",
			rating: "5.0",
			reviews: "87",
			url: "#",
		},
		{
			imageSrc:
				"https://sinfullyspicy.com/wp-content/uploads/2015/08/1200-by-1200-images.jpg",
			title: "Kaju Draksh Ice-cream",
			content:
				"A creamy delight ice-cream loaded with rich cashews and juicy raisins.",
			price: "$5.99",
			rating: "5.0",
			reviews: "87",
			url: "#",
		},
		{
			imageSrc:
				"https://static.toiimg.com/thumb/75760325.cms?imgsize=1225826&width=800&height=800",
			title: "Kesar Pista Ice-cream",
			content:
				"An infusion of fragrant saffron and crunchy pistachios into creamy goodness of an ice-cream.",
			price: "$5.99",
			rating: "5.0",
			reviews: "87",
			url: "#",
		},
	];

	// Shuffle array
	return cards;
};
