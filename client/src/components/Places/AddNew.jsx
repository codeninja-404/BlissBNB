const AddNew = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className="primary" type="submit ">
        s
      </button>
    </form>
  );
};

export default AddNew;
