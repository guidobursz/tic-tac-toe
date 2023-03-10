import Layout from "./components/Layout";

function App() {
  return (
    <div className="absolute inset-0">
      <div className="w-full h-full bg-slate-800 flex justify-center items-center relative">
        <div className="w-[90%] flex justify-center">
          <Layout />
          <div className="absolute bottom-2 left-2/4 -translate-x-2/4">
            <div className="text-white text-lg flex justify-center">
              <p>Done by: </p>
              <a
                href="https://github.com/guidobursz"
                className="ml-2 italic underline text-xl"
              >
                guidobursz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
