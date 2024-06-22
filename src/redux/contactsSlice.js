import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilterQuery } from "./filterSlice";
import { fetchContacts, addContact, deleteContact } from "../Api/contactsApi";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    hasError: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = { state: true, error: action.payload };
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = { state: true, error: action.payload };
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = { state: true, error: action.payload };
      });
  },
});

export const selectContactItems = (state) => state.contacts.items;
export const selectContacts = createSelector(
  [selectContactItems, selectFilterQuery],
  (contacts, name) =>
    contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    )
);
export const selectContactsCount = createSelector(
  [selectContactItems],
  (contacts) => contacts?.length
);

export default contactsSlice.reducer;
