import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./Contactlist.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <p>
        <b>contacts:</b> ({filteredContacts.length}) of {contacts.length}
      </p>
      <hr></hr>
      <ul className={css["contact-list"]}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
