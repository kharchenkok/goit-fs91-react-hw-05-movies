export const formatDateString = dateString => {
  const dateObject = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    // timeZoneName: 'short',
  };

  return new Intl.DateTimeFormat('en-US', options).format(dateObject);
};
