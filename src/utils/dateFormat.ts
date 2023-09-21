import moment from 'moment';

export const formatDate = (date: any) => moment(date).format('MMMM Do, YYYY');
