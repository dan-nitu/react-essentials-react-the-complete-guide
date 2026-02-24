export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // buttons = slot - for the tab buttons

  // ButtonsContainer = must start with capital letter - used as custom component
  // the alternative is to start with lower case but remap it (for buttonsContainer it would be const buttonsContainer = ButtonsContainer)

  // ButtonsContainer = 'menu' - default value for the ButtonsContainer prop, if not provided it will use 'menu' as the default container for the buttons
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
