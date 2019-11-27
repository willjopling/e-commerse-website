import styled from "@emotion/styled";
import { css } from "@emotion/core";

const checkoutItemSpanWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  ${checkoutItemSpanWidth}
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${checkoutItemSpanWidth}
`;

export const Quantity = styled.span`
  ${checkoutItemSpanWidth}
  padding-left: 20px;
`;

export const Price = styled.span`
  ${checkoutItemSpanWidth}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
