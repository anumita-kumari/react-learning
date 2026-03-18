-AppContainer

    -Header
        -Logo
        -Navigation Bar
        -LogOut
    -Body
        -Search
        -Filter
        -Restaurant Container
            -Restaurant Card
    -Footer
        -Link
        -CopyRight
        -Address
        -Contact

-Whenever useState variable changes Reconciliation process triggers(re-render happens).
-useEffect-By default when no dependency array- Each time renders when components re-renders
when empty array- renders only once at the time of initialization
when a dependency array- renders with change in array
-hooks can be called inside component body
-never use hooks inside if else condition

-Routing

-install react-router-dom@6
-import {createBrowserRouter} from react-router-dom
--instead of <app> wrap inside <RouterProvider> and inject appRouter in <RouterProvider router={appRouter}>
-Outlet when you want to conditional rendering like navigation button then outlet help you
-Link when you need to navigate like on button click without refreshing a page,like SPA. It is a wrapper to anchor tag but because of react router it gives you a special benefit like SPA

two type of components-

-Functional Components- A function that return some piece of JSX
-Class-based Components- A class (extends React.Component)is having render method that return some piece of JSX

Lazy loading
-import through import(./path)
lazy(()=>{import(./path)})

    -suspense
    <Suspense fallback={<h1>Loading</h1>}></Suspense>

-Higher Order Components
A functional component that can enhance an existing component.
also return a component(a component also returns some JSX)
also excepts a component as input

-Lifting State Up(revise again)
If you want to change state variable of parent from child then you can do indirectly by using this.

Uncontrolled & Uncontrolled Components

    When child component actions controlled by parent known as controlled component else uncontrolled component

    Props Drilling-(To avoid this we use React context(use context))

    If we need to pass data from one parent to another grand child or some higher label to lower label is know as props drilling.
    That means we are drilling data from one component to another.

React context(use context)-
Sharing data globally among components

    Context -where we can store global data and can access from any component of your project.

    -Subscriber and Provider model

    -create user context using createContext from react
        const LoggedContext=createContext({
            loggedInUser:"DefaultUser"
        })


    -Two ways to access it(userContext hook and <User.Consumer></User>)
    const {loggedInUser}=useContext(UserContext);
    -in case of Class based component
        <User.Consumer>
        </User>

Redux Store-  
 Write operation
component----> Dispatch(Action) ----->Reducer function------> Store(slice)

                                                                                ^
                    ^                                                            |
                    |  ________________   Selector(Subscribe)    Read operation

-Import @reduxjs/toolkit & react-redux
-create a store
-connect store to the app
-create cart slice
-Dispatch action
-react selector method
