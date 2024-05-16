import { useContext, createContext } from "react";

export const ContactContext = createContext();

export const ContactProvider = ContactContext.Provider;

export default function useContact() {
  return useContext(ContactContext);
}
