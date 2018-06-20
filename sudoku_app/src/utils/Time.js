export default function Time(seconds) {
  let second, minute, hour;
  let time = "";

  hour = Math.floor(seconds / 3600);
  minute = Math.floor((seconds % 3600) / 60);
  second = seconds % 60;

  if ( hour > 0 ) {
    time = time + `${hour}h `;
  }

  if ( minute > 0 ) {
    time = time + `${minute}m `;
  }

  if ( second > 0 ) {
    time = time + `${second}s`;
  }

  return time;
}
