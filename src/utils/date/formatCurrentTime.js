// Helper function that formats the time
function formatCurrentTime(time) {
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString();
  const seconds = time.getSeconds().toString();

  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

export default formatCurrentTime;
