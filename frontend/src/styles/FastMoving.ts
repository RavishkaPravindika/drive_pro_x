import styled from 'styled-components';

export const FastMovingSection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

export const ViewAll = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  flex-shrink: 0;
  position: relative;
`;

export const DiscountBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #1abc9c;
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
`;

export const ImageSlider = styled.div`
  position: relative;
  height: 150px;
  background-color: #eee;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
`;

export const Dot = styled.span<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#fff' : '#ccc')};
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

export const ProductName = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  padding: 0 10px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
`;

export const Star = styled.span`
  color: #f39c12;
  font-size: 14px;
`;

export const ReviewCount = styled.span`
  color: #7f8c8d;
  font-size: 14px;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #7f8c8d;
  font-size: 14px;
`;

export const DiscountedPrice = styled.span`
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
`;

export const CartIcon = styled.span`
  color: #7f8c8d;
  font-size: 20px;
  cursor: pointer;
`;
