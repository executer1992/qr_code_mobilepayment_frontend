import * as moment from 'moment';

export interface Product {
  product_id: string;
  product_name: string;
  product_price: number;
  user_id: string;
  created_date: moment.Moment;
  modified_date: moment.Moment;
}
