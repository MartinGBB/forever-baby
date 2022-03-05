function Input(props) {
  const { type, name, pleaceholder, disabled } = props;
  return (
    <div>
      <input
        type={ type }
        name={ name }
        placeholder={ pleaceholder }
        disabled={ disabled }
       />
    </div>
  );
}

export default Input;
