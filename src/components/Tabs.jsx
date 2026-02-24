export default function Tabs({ children, buttons }) {
  // buttons = slot - for the tab buttons
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
