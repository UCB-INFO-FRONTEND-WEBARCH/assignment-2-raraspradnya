# create template
npm create vite@latest task-manager-react -- --template react

# move assets
move assets to src/assets

# create component
 1. create folder src/components 
 2. create file MyFirstComponent.jsx

```
function MyFirstComponent(){
    return (
        <div>
            <h2>My First Component</h2>
        </div>
    )
}

export default MyFirstComponent 
```

3. Import and include in the App.jsx
```
import MyFirstComponent from './components/MyFirstComponent'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Hello Class!</h1>
        <MyFirstComponent />
      </div>
    </>
  )
}
```