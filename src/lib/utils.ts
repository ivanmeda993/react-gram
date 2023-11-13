import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function handleErrors<T extends any[]>(
//   fn: (...args: T) => Promise<any>,
// ): (...args: T) => Promise<any> {
//   return async (...args: T) => {
//     try {
//       return await fn(...args);
//     } catch (error: any) {
//       console.error(error.message);
//       throw error; // or handle it in some other way
//     }
//   };
// }

export function handleErrors<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  errorHandler: (error: any) => void = console.error,
): T {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  } as T;
}
