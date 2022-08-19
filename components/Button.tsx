

// export const Button = styled.button`
//     border: ${props => props.theme.main};
//     backgroundColor: ${props => props.theme.main};
// `;

import { styled } from "../styles/theme";

export const Button = styled("button", {
  backgroundColor: "$backgroundWhite",
  border: 'solid 1px black',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: "#eee",
  }
});
