import { FaAddressBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsCount } from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contactsOps";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContactsCount);

  return (
    <div>
      <h1>
        <span>
          <FaAddressBook color="gray" />
        </span>
        Contact Book
        <sub>[{contacts}]</sub>
      </h1>
      <ContactForm />
      <hr></hr>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
