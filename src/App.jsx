import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { FaAddressBook } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>
        <span>
          <FaAddressBook color="gray" />
        </span>
        Contact Book
        {/* <span>({contacts.count})</span> */}
      </h1>
      <ContactForm />
      <hr></hr>
      {/* <h2>Contacts</h2> */}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
