import { User } from './user';
import { Product } from './product';

export interface TransactionModal {
  products?: Product[];
  transaction_price: string;
  user: User;
}

export interface TransactionData {
  sender_id: string;
  transaction_amount: string;
}
