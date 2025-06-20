import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
	tw`md:w-7/12 mt-16 md:mt-0`,
	props.textOnLeft
		? tw`md:mr-12 lg:mr-16 md:order-first`
		: tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
	SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-xl md:text-base lg:text-2xl font-medium leading-relaxed text-secondary-300`;

// const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`;
// const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

// const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`;

const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
	${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
	subheading = "Contact Us",
	heading = (
		<>
			Feel free to <span tw="text-primary-500">get in touch</span>
			<wbr /> with us.
		</>
	),
	description = "Contact No: +1 (732) 306-1897",
	submitButtonText = "Contact Me",
	formAction = "#",
	formMethod = "get",
	textOnLeft = true,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{/* {subheading && <Subheading>{subheading}</Subheading>} */}
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						{/* <Description>Email: john.doe@example.com</Description> */}
						{/* <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Your Email Address" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form> */}
					</TextContent>
				</TextColumn>
				<DecoratorBlob2 />
			</TwoColumn>
		</Container>
	);
};
