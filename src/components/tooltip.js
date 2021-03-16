import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { MdInfo } from 'react-icons/md';

const TooltipContainer = styled.span`
  svg {
    margin-bottom: -0.3rem;
  }

  .customTheme {
    color: var(--text) !important;
    background-color: var(--bodyLighter) !important;
  }
`;

const Tooltip = ({ info }) => (
  <TooltipContainer>
    <MdInfo data-tip={info} />
    <ReactTooltip className="customTheme" />
  </TooltipContainer>
);

Tooltip.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Tooltip;
