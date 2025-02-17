// React imports

// Modules imports
import styled from "styled-components";

// Custom imports
import { CurrencyIconImageProps } from "../../types";


const CurrencyIconImage = styled.img.attrs<CurrencyIconImageProps>(({ iconISO, alt }) => ({
    src: iconISO,
    alt: alt || "Currency Icon"
}))`

    height: ${({ height }) => height ? height + "px" : "40px"};
`;

export { CurrencyIconImage };
