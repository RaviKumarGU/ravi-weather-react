function Loader({ loading }) {
  return (
    <div className="flex h-screen items-center justify-center">
      {loading && (
        <div className="loader h-16 w-16 rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
      )}
    </div>
  );
}

export default Loader;
