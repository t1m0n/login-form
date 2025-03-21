// eslint-disable-next-line import/named
import { css, RuleSet } from 'styled-components';

export const onMobile = (styles: RuleSet) => {
  return css`
    @media all and (width < 768px) {
      ${styles}
    }
  `;
};
