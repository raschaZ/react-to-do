import EN from "../lang/EN.json";
const Spinner = () => {
  return (
    <>
      <div className="spinner-border" role="status">
        <span className="sr-only">{EN.loading}</span>
      </div>
    </>
  );
};

export default Spinner;
