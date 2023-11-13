import { createUser, signInAccount } from "@/lib/appwrite/api.ts";
import { INewUser } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserAccountMutation = () =>
  useMutation({
    mutationFn: (user: INewUser) => createUser(user),
  });

export const useSignInAccountMutation = () =>
  useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
