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
