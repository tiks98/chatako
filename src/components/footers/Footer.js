import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/Chataako_Logo.jpg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-white text-gray-800 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider text-gray-900`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-700 hocus:border-gray-400 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
	${tw`cursor-pointer inline-block text-gray-700 hover:text-gray-500 transition duration-300 mx-4`}
	svg {
		${tw`w-5 h-5`}
	}
`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-500`;

export default () => {
	return (
		<Container>
			<Content>
				<Row>
					<Divider />
					<LogoContainer>
						<LogoImg src={logo} />
						{/* <LogoText>Chataako</LogoText> */}
					</LogoContainer>
					<LinksContainer>
						<Link href="#">Home</Link>
						<Link href="#">Menu</Link>
						<Link href="#">Contact Us</Link>
					</LinksContainer>
					<SocialLinksContainer>
						<SocialLink href="https://facebook.com">
							<FacebookIcon />
						</SocialLink>
						<SocialLink href="https://twitter.com">
							<TwitterIcon />
						</SocialLink>
						{/* <SocialLink href="https://youtube.com">
							<YoutubeIcon />
						</SocialLink> */}
					</SocialLinksContainer>
					<CopyrightText>
						&copy; {new Date().getFullYear()}, Chataako. All Rights Reserved.
					</CopyrightText>
				</Row>
			</Content>
		</Container>
	);
};
