const getRockets = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await request.json();
  return rockets;
};

export default getRockets;
