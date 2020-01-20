import * as moment from 'moment';

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  created_date?: moment.Moment | string;
  modified_date?: moment.Moment | string;
}
