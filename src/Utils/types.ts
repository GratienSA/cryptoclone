
export interface AuthProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  firstName: string;
  lastName: string;
  pseudo: string;
  age: number;
  password: string;
  confirmPassword: string;
  email: string;
  city: string;
  promoCode?: string;
}

export enum Roles {
  admin = 'ADMIN',
  user = 'USER',
  moderator = 'MODERATOR',
}

export enum Status {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  pending = 'PENDING',
}

export interface CryptoProps {
  id: string;
  image: string;
  name: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  value: number;
}

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: CryptoProps;
};

export interface UserHasCrypto {
  Crypto: CryptoProps;
  amount: number;
}

export interface User {
  firstName: string;
  lastName: string;
  pseudo: string;
  dollarAvailables: number;
  UserHasCrypto: UserHasCrypto[];
}

export interface TradesProps {
  Giver: {
    firstName: string;
    lastName: string;
    pseudo: string;
    dollarAvailables: number;
  };
  Receiver: {
    firstName: string;
    lastName: string;
    pseudo: string;
    dollarAvailables: number;
  };
  Crypto: CryptoProps;
  id: string;
}

export interface Role {
  id_role: string;
  name_role: string;
}

export interface PromoCode {
  id: string;
  name: string;
  value: number;
}

export interface HistoricProps {
  id: string;
  id_crypto: string;
  value: number;
  created_at: string;
  updated_at: string;
  image: string;
  name: string;
}
