import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilterQuery } from "./filterSlice";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

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
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.hasError = { state: true, error: payload };
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("addContact.fulfilled.push:payload :>> ", payload);
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.hasError = { state: true, error: payload };
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items?.filter((contact) => contact.id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.hasError = { state: true, error: payload };
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
