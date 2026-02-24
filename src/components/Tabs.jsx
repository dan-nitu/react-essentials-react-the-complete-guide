export default function Tabs({ children, buttons, ButtonsContainer }) {
  // buttons = slot - for the tab buttons

  // ButtonsContainer = must start with capital letter - used as custom component
  // the alternative is to start with lower case but remap it (for buttonsContainer it would be const buttonsContainer = ButtonsContainer)
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
