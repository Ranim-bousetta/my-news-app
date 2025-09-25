import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <div>
      <Header>
        <main>
          <AppRouter />
        </main>
      </Header>
    </div>
  );
}

export default App;
