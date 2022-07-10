import moment from 'moment';

export const parseDateToString = (date: Date) => {
    return moment(date).fromNow();
  };
  