import {
  account,
  appwriteConfig,
  avatars,
  databases,
} from "@/lib/appwrite/config.ts";
import { INewUser } from "@/types";
import { ID, Query } from "appwrite";
import { handleErrors } from "../utils";

export const createUser = handleErrors(async (user: INewUser) => {
  const newAccount = await account.create(
    ID.unique(),
    user.email,
    user.password,
    user.name,
  );

  if (!newAccount) {
    throw new Error("No account created");
  }

  const avatarUrl = avatars.getInitials(user.name);

  const newUser = await saveUserToDB({
    accountId: newAccount.$id,
    name: newAccount.name,
    email: newAccount.email,
    username: user.username,
    imageUrl: avatarUrl,
  });

  return newUser;
});

export const saveUserToDB = handleErrors(
  async (user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
  }) => {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    );

    return newUser;
  },
);

export const signInAccount = handleErrors(
  async (user: { email: string; password: string }) => {
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  },
);

export const getAccount = handleErrors(async () => {
  return await account.get();
});

export const getCurrentUser = handleErrors(async () => {
  const currentAccount = await getAccount();

  if (!currentAccount) throw new Error("No account found");

  const currentUser = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    [Query.equal("accountId", currentAccount.$id)],
  );

  if (!currentUser) throw new Error("No user found");

  return currentUser.documents[0];
});
