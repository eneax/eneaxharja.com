import React, { Component } from 'react'

const UPDATE_CHECKING_INTERVAL = 30 * 60 * 1000 // Check for updates every 30 minutes

export default class UpdateButton extends Component {
  state = {
    showButton: false,
    updateHandler: null,
  }

  componentDidMount() {
    this.registerServiceWorker()
  }

  registerServiceWorker = () => {
    if (
      typeof window === 'undefined' ||
      typeof navigator === 'undefined' ||
      !navigator.serviceWorker
    ) {
      return
    }

    navigator.serviceWorker.register('/sw.js').then(reg => {
      if (!navigator.serviceWorker.controller) {
        return
      }

      // Check for SW update every X ms
      setInterval(() => {
        reg.update()
      }, UPDATE_CHECKING_INTERVAL)

      if (reg.waiting) {
        this.updateReady(reg.waiting)
      } else if (reg.installing) {
        this.trackInstalling(reg.installing)
      } else {
        reg.addEventListener('updatefound', () => {
          this.trackInstalling(reg.installing)
        })
      }
    })

    // Listen for the controlling service worker changing
    // and reload the page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  }

  trackInstalling = worker => {
    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed') {
        this.updateReady(worker)
      }
    })
  }

  updateReady = worker => {
    this.setState({
      showButton: true,
      updateHandler: () => {
        this.setState({ showButton: false })
        // Tell the service worker to skipWaiting
        worker.postMessage({ action: 'skipWaiting' })
      },
    })
  }

  handleUpdate = () => {
    if (typeof this.state.updateHandler === 'function') {
      this.state.updateHandler()
    }
  }

  render() {
    if (!this.state.showButton) return null

    return (
      <button onClick={this.handleUpdate} type='button'>
        Click to Update App
      </button>
    )
  }
}