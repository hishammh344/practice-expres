const init = () => {
  console.log('notification');
  return {
    email: 'test@gmail.com',
  };
};

const sendNotification = {
  name: 'sendNotification',
  execute: init,
  repeat: 10000,
  now: false,
};
export default sendNotification;
