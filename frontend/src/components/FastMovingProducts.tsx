'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

// ✅ Define Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
}

// Styled Components
const FastMovingSection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

const ViewAll = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for cleaner look */
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  flex-shrink: 0;
  position: relative;
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #1abc9c;
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
`;

const ImageSlider = styled.div`
  position: relative;
  height: 150px;
  background-color: #eee;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// ✅ Accept active prop in Dot
const SliderDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
`;

const Dot = styled.span<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#fff' : '#ccc')};
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

const ProductName = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  padding: 0 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
`;

const Star = styled.span`
  color: #f39c12;
  font-size: 14px;
`;

const ReviewCount = styled.span`
  color: #7f8c8d;
  font-size: 14px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #7f8c8d;
  font-size: 14px;
`;

const DiscountedPrice = styled.span`
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
`;

const CartIcon = styled.span`
  color: #7f8c8d;
  font-size: 20px;
  cursor: pointer;
`;

// Main Component
export default function FastMoving() {
  const [products, setProducts] = useState<Product[]>([]); // ✅ Add Product type here

  useEffect(() => {
    // Fetch product data from the backend API
    fetch('http://localhost:8000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <FastMovingSection>
      <Head>
        <title>Fast Moving - DriveProX</title>
      </Head>
      <Header>
        <Title>Fast Moving</Title>
        <ViewAll href="/fast-moving">
          View All <span>→</span>
        </ViewAll>
      </Header>
      <ScrollContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <DiscountBadge>{product.discount}%</DiscountBadge>
            <ImageSlider>
              <SliderImage src={product.image} alt={product.name} />
              <SliderDots>
                <Dot active />
                <Dot active={false} />
                <Dot active={false} />
              </SliderDots>
            </ImageSlider>
            <HorizontalLine />
            <ProductName>{product.name}</ProductName>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i}>★</Star>
              ))}
              <ReviewCount>({product.reviews})</ReviewCount>
            </Rating>
            <PriceSection>
              <PriceWrapper>
                <OriginalPrice>LKR {product.originalPrice}</OriginalPrice>
                <DiscountedPrice>LKR {product.discountedPrice}</DiscountedPrice>
              </PriceWrapper>
              <CartIcon>🛒</CartIcon>
            </PriceSection>
          </ProductCard>
        ))}
      </ScrollContainer>
    </FastMovingSection>
  );
}
