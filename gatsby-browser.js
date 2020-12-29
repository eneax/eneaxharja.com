import { wrapRootElement as wrap } from './root-wrapper';

export const wrapRootElement = wrap;

export const onServiceWorkerUpdateReady = () => {
  // Set window.___swUpdated to prevent update on page navigation
  window.___swUpdated = false;
};
