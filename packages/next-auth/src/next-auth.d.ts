// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      role?: string | null; // Add your custom field here
      emailVerified?: Date | null;
      createdAt?: Date;
      updatedAt?: Date;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    role?: string | null; // Add your custom field here
    emailVerified?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role?: string | null; // Add your custom field here
    emailVerified?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
