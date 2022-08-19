interface Props {
  children: JSX.Element;
}

export const PageTile = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          width: "100vw",
          height: "100vh",
        }}
      >
        {children}
      </div>
    </>
  );
};
