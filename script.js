const initProfileCard = () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (!timeElement) {
    return;
  }

  const updateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const formattedTime = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    timeElement.textContent = `${formattedDate} • ${formattedTime}`;
    timeElement.dateTime = now.toISOString();
  };

  updateTime();
  setInterval(updateTime, 200);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProfileCard);
} else {
  initProfileCard();
}
