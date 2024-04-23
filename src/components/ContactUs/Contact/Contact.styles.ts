import styled from '@emotion/styled';
import { Grid, Divider } from '@mui/material';

import { COLORS } from '@/constants/colors';
export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
    width: 40px;
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
    width: 40px;
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.span`
  font-size: 52px;
  font-weight: bolder;
  text-align: center;
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  padding-left: 0px;
`;

export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR_BLUE};
  min-height: 450px;
  width: 100%;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
