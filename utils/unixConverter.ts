import moment from 'moment';

export const unixConverter = (unix: number) => moment.unix(unix).format('HH:mm');
