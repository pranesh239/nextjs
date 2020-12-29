import timezones from './timezones.json';

type GetCurrentTime = {
  (timeZone: string): string;
};

export const getCurrentTime: GetCurrentTime = (utcTimezoneString) => {
  const timeZone = timezones.find((zone) => {
    return zone.text.includes(utcTimezoneString);
  });

  return new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone?.utc[0],
    // issue in TS, timeStyle is not added to DateTimeFormatOptions type
    // @ts-ignore
    timeStyle: 'short',
  }).format();
};
