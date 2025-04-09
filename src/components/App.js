import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Importing data

function App() {
  return (
    <div className="App">
      {/* Header with name */}
      <header>
        <Header name={blogData.name} />
      </header>

      {/* About section with image and description */}
      <aside>
        <About image={blogData.image} about={blogData.about} />
      </aside>

      {/* Main section with a list of articles */}
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;

