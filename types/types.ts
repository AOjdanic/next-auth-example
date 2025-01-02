import { Model, Types } from "mongoose";

export type UserType = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  address: string;
  username: string;
  password: string;
  active?: boolean;
  birthdate: string;
  role: "admin" | "user";
  passwordConfirm?: string;
  changedPasswordAt?: Date;
  passwordResetToken?: string;
  passwordResetTokenExpires?: number;
};

export type UserStaticMethods = {
  comparePasswords: (inputPass: string, userPass: string) => Promise<boolean>;
  createPasswordResetToken: () => string;
  changedPasswordAfterIssuedToken: (jwtTimestamp: number) => boolean;
};

export type UserModel = Model<UserType, object, UserStaticMethods>;
