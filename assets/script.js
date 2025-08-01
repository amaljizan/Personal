
  function shareSite() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Check this out!",
        url: window.location.href
      }).then(() => {
        console.log("Shared successfully");
      }).catch((err) => {
        console.error("Error sharing", err);
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  }