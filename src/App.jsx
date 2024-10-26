import AddNewBlog from "./blog-app/add-new-blog"
import BlogList from "./blog-app/blog-list"
// import CounterButton from "./counter-example/counter-button"
// import COunterValue from "./counter-example/counter-value"

function App() {


  return (
    <div className="min-h-screen bg-gray-50 py-10">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    <span className="text-5xl inline-block align-middle">🅱️</span>log App 
    </h1>
    <AddNewBlog />
    <BlogList />
    {/* <CounterButton />
    <CounterValue /> */}
</div>
  )
}

export default App
