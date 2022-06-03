import React from "react";

function Form({firstName, lastName, newsletter, handleFirstNameChange, handleLastNameChange, handleNewsletterChange}) {

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} /><br></br>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      /><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
