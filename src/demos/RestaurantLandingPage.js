import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/Features.js";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import MenuCards from "components/cards/MenuCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/Footer";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import ContactUs from "components/forms/Contact";

export default () => {
	// const Subheading = tw.span`tracking-wider text-sm font-medium`;
	const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
	// const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
	// const Description = tw.span`inline-block mt-8`;
	const imageCss = tw`rounded-4xl`;
	return (
		<AnimationRevealPage>
			<Hero
				heading={
					<>
						Welcome to <HighlightedText>Chataako</HighlightedText>
					</>
				}
				description="Experience the taste of tradition and the spice of street food with our freshly prepared Indian delicacies. Whether you're hosting a party, celebrating a special event, or just craving home-style comfort food, we've got something to satisfy every palate."
				imageSrc="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				imageCss={imageCss}
				imageDecoratorBlob={true}
				primaryButtonText="See Full Menu"
				primaryButtonUrl="/Menu_wo_price.png"
			/>
			{/* <MainFeature
				subheading={<Subheading>Established Since 2014</Subheading>}
				heading={
					<>
						We've been serving for
						<wbr /> <HighlightedText>over 5 years.</HighlightedText>
					</>
				}
				description={
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						<br />
						<br />
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</Description>
				}
				buttonRounded={false}
				textOnLeft={false}
				primaryButtonText="Latest Offers"
				imageSrc={
					"https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
				}
				imageCss={imageCss}
				imageDecoratorBlob={true}
				imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
			/> */}
			{/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
			<section id="MenuCards">
				<MenuCards
					heading={
						<>
							Checkout our <HighlightedText>menu.</HighlightedText>
						</>
					}
				/>
			</section>
			<Features
				heading={
					<>
						Amazing <HighlightedText>Services.</HighlightedText>
					</>
				}
				cards={[
					{
						imageSrc: shopIconImageSrc,
						title: "Authentic Home-Style Flavors",
						description:
							"Enjoy the warmth of traditional Indian cooking, just like it's made at home.",
						// url: "https://google.com",
					},
					{
						imageSrc: chefIconImageSrc,
						title: "Freshly Made, Always",
						description:
							"Every dish is prepared fresh to order using hand-picked ingredients, ensuring deliciousness in every bite",
						// url: "https://timerse.com",
					},
					{
						imageSrc: celebrationIconImageSrc,
						title: "Catering for Every Occasion",
						description:
							"Parties, weddings, religious functions, or office events",
						// url: "https://reddit.com",
					},
				]}
				imageContainerCss={tw`p-2!`}
				imageCss={tw`w-20! h-20!`}
			/>
			{/* <MainFeature2
				// subheading={<Subheading>A Reputed Brand</Subheading>}
				heading={
					<>
						Why <HighlightedText>Choose Us ?</HighlightedText>
					</>
				}
				statistics={[
					{
						key: "Orders",
						value: "94000+",
					},
					{
						key: "Customers",
						value: "11000+",
					},
					{
						key: "Chefs",
						value: "1500+",
					},
				]}
				primaryButtonText="Order Now"
				primaryButtonUrl="https://order.now.com"
				imageInsideDiv={false}
				imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
				imageCss={Object.assign(tw`bg-cover`, imageCss)}
				imageContainerCss={tw`md:w-1/2 h-auto`}
				imageDecoratorBlob={true}
				imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
				textOnLeft={true}
			/> */}
			{/* <Testimonial
				subheading=""
				heading={
					<>
						Customers <HighlightedText>Love Us.</HighlightedText>
					</>
				}
			/> */}
			<section id="ContactUs">
				<ContactUs />
			</section>
			<Footer />
		</AnimationRevealPage>
	);
};
