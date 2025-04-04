export const onClickRef = (setIsOpen, formRef, event) => {
  if (formRef.current && !formRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};
