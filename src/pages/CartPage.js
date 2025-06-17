import React from 'react';
import { useCart } from '../context/CartContext.js'; // Adjusted path
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container as PageContainer } from '../components/misc/Layouts.js'; // Adjusted path, aliased
import Header from '../components/headers/light.js'; // Adjusted path

// Styled Components
const MainContent = tw.main`mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8 pb-12`;
const Heading = tw.h1`text-3xl sm:text-4xl font-bold text-center text-primary-500 my-8`;
const EmptyCartContainer = tw.div`text-center py-12`;
const EmptyCartMessage = tw.p`text-xl text-gray-600 mb-6`;
const StyledLink = tw(Link)`text-primary-500 hover:text-primary-700 font-semibold text-lg transition duration-300`;

const CartItemsContainer = tw.div`mt-8`;
const CartItem = styled.div`
  ${tw`flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-6`}
  &:last-child {
    ${tw`border-b-0`}
  }
`;

const ItemImage = styled.img`
  ${tw`w-24 h-24 object-cover rounded-lg shadow-md mb-4 sm:mb-0 sm:mr-6`}
`;

const ItemDetails = tw.div`flex-grow text-center sm:text-left`;
const ItemName = tw.h3`text-lg font-semibold text-gray-800`;
const ItemPrice = tw.p`text-gray-600`;

const ItemQuantityControls = tw.div`flex items-center my-3 sm:my-0 mx-4`;
const QuantityButton = tw.button`px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition duration-300`;
const QuantityDisplay = tw.span`px-4 py-1 border-t border-b border-gray-200`;
const ItemInputQuantity = styled.input`
  ${tw`w-12 text-center border border-gray-300 rounded-md mx-2 py-1`}
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield; /* Firefox */
`;


const ItemTotalPrice = tw.p`font-semibold text-gray-800 w-24 text-center sm:text-right`;
const RemoveButton = tw.button`ml-4 text-red-500 hover:text-red-700 font-semibold transition duration-300`;

const CartSummary = tw.div`mt-12 p-6 bg-gray-100 rounded-lg shadow-md`;
const TotalAmount = tw.h2`text-2xl font-bold text-gray-800 text-right mb-6`;
const ActionButtonsContainer = tw.div`flex flex-col sm:flex-row justify-between items-center mt-6 gap-4`;
const PrimaryButton = tw.button`px-6 py-3 bg-primary-500 text-gray-100 rounded-md font-semibold hover:bg-primary-700 transition duration-300 w-full sm:w-auto`;
const SecondaryButton = tw(Link)`px-6 py-3 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition duration-300 text-center w-full sm:w-auto`;
const ClearCartButton = tw.button`text-red-500 hover:text-red-700 font-semibold transition duration-300 mt-4 sm:mt-0`;


export default function CartPage() {
  const {
    cartItems,
    removeItemFromCart,
    updateItemQuantity,
    getCartTotal,
    clearCart,
    getCartItemsCount
  } = useCart();

  const handleQuantityChange = (itemId, currentQuantity, delta) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity > 0) {
      updateItemQuantity(itemId, newQuantity);
    } else {
      // Optionally, could remove item if quantity becomes 0, or just prevent going below 1 with +/-
      // updateItemQuantity will handle removal if newQuantity <= 0 based on its internal logic
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const handleInputChange = (itemId, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity)) { // only update if it's a number
        updateItemQuantity(itemId, quantity);
    } else if (value === "") {
        // Allows users to clear the input, effectively setting quantity to 0 (which should remove the item)
        updateItemQuantity(itemId, 0);
    }
  };


  return (
    <>
      <Header />
      <PageContainer>
        <MainContent>
          <Heading>Your Shopping Cart</Heading>
          {cartItems.length === 0 ? (
            <EmptyCartContainer>
              <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
              <StyledLink to="/#MenuCards">Continue Shopping</StyledLink> {/* Updated link */}
            </EmptyCartContainer>
          ) : (
            <>
              <CartItemsContainer>
                {cartItems.map((item) => (
                  <CartItem key={item.id}>
                    <ItemImage src={item.imageSrc} alt={item.name} />
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>${item.price.toFixed(2)} each</ItemPrice>
                    </ItemDetails>
                    <ItemQuantityControls>
                      <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</QuantityButton>
                      <ItemInputQuantity
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleInputChange(item.id, e.target.value)}
                        min="0" // Allow 0 for removal via updateItemQuantity logic
                      />
                      <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</QuantityButton>
                    </ItemQuantityControls>
                    <ItemTotalPrice>${(item.price * item.quantity).toFixed(2)}</ItemTotalPrice>
                    <RemoveButton onClick={() => removeItemFromCart(item.id)}>Remove</RemoveButton>
                  </CartItem>
                ))}
              </CartItemsContainer>
              <CartSummary>
                <TotalAmount>Total: ${getCartTotal().toFixed(2)}</TotalAmount>
                <ActionButtonsContainer>
                  <SecondaryButton to="/#MenuCards">Continue Shopping</SecondaryButton> {/* Updated link */}
                  <PrimaryButton onClick={() => console.log("Proceeding to checkout with items:", cartItems, "Total:", getCartTotal())}>
                    Proceed to Checkout
                  </PrimaryButton>
                </ActionButtonsContainer>
                <div tw="text-center mt-6">
                  <ClearCartButton onClick={() => clearCart()}>Clear Cart</ClearCartButton>
                </div>
              </CartSummary>
            </>
          )}
        </MainContent>
      </PageContainer>
    </>
  );
}
