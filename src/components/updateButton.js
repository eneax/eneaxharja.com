import React from 'react';
import styled from 'styled-components';

// styles
const BtnContainer = styled.div`
  position: sticky;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--body);
  padding: 1.5rem 2rem;
  border: 1px solid transparent;
  border-radius: 5rem;
  background-image: linear-gradient(
    45deg,
    var(--primary) 0%,
    var(--secondary) 100%
  );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      45deg,
      var(--secondary) 0%,
      var(--primary) 100%
    );
  }

  &:focus,
  &:active {
    color: var(--text);
    outline: none;
    box-shadow: 0 0 0 1px var(--primaryDarker);
  }
`;

const UPDATE_CHECKING_INTERVAL = 30 * 60 * 1000; // Check for updates every 30 minutes

const UpdateButton = () => {
  const [state, setState] = React.useState({
    showButton: false,
    updateHandler: null,
  });

  const updateReady = worker => {
    setState({
      showButton: true,
      updateHandler: () => {
        setState({ showButton: false });
        // Tell the service worker to skipWaiting
        worker.postMessage({ action: 'skipWaiting' });
      },
    });
  };

  const trackInstalling = worker => {
    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed') {
        updateReady(worker);
      }
    });
  };

  const registerServiceWorker = () => {
    if (
      typeof window === 'undefined' ||
      typeof navigator === 'undefined' ||
      !navigator.serviceWorker
    ) {
      return;
    }

    navigator.serviceWorker.register('/sw.js').then(reg => {
      if (!navigator.serviceWorker.controller) {
        return;
      }

      // Check for SW update every X ms
      setInterval(() => {
        reg.update();
      }, UPDATE_CHECKING_INTERVAL);

      if (reg.waiting) {
        updateReady(reg.waiting);
      } else if (reg.installing) {
        trackInstalling(reg.installing);
      } else {
        reg.addEventListener('updatefound', () => {
          trackInstalling(reg.installing);
        });
      }
    });

    // Listen for the controlling service worker changing and reload the page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (navigator.serviceWorker.refreshing) return;
      navigator.serviceWorker.refreshing = true;
      window.location.reload();
    });
  };

  const handleUpdate = () => {
    if (typeof state.updateHandler === 'function') {
      state.updateHandler();
    }
  };

  React.useEffect(() => {
    registerServiceWorker();
  });

  return (
    <>
      {state.showButton && (
        <BtnContainer>
          <Btn type="submit" onClick={handleUpdate}>
            Update App
          </Btn>
        </BtnContainer>
      )}
    </>
  );
};

export default UpdateButton;
