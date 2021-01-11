import React, {useState, useEffect} from 'react';

function App() {
  // Marking the device as whether it is a mobile or desktop based on the width.
  // The structure is SAME but ORDER of the layout is different for Mobile and Desktop devices.
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth <= 600);

  // determines the device (ie mobile or desktop).
  const detectDevice = () => {
    setIsMobileDevice(window.innerWidth <= 600);
  }

  // detects window resizing and determines the device.
  useEffect(() => {
    window.addEventListener("resize", detectDevice);
  }, [isMobileDevice]);

  // render either layout order for mobile or desktop.
  if (isMobileDevice) {
    return (
      <h2>Mobile Device</h2>
    );
  }
  else {
    return (
      <h2>Desktop Device</h2>
    );
  }
}

export default App;
