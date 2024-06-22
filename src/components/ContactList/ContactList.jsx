import { useSelector } from "react-redux";
import { selectContacts, selectContactItems } from "../../redux/contactsSlice";
import css from "./Contactlist.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const contactItems = useSelector(selectContactItems);

  return (
    <>
      <p>
        <b>contacts:</b> ({contacts.length}) of {contactItems.length}
      </p>
      <hr></hr>
      <ul className={css["contact-list"]}>
        {contacts?.map((item) => (
          <Contact key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
