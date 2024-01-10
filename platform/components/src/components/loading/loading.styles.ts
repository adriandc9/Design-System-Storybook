import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
  }

  .loading {
    animation: spin 1s linear infinite;
    display: flex;
    transform: rotate(0);
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }

    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
