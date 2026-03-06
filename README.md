# Countries Explorer

## Commands:
Run: `npm run dev`  

Test: `npm run test`  

## Any decisions or trade-offs you made:
The project was pre-loaded with `vitest`, which I'm not familiar with (I have used mocha and react testing library in the past).  
I had the testing suite working, until I needed to test render code with react.  I added `vitest-browser-react` to the project and it was not compatable with the included version of `vitest` so I upgraded `vitest`.  I then ran into issues and got the error `Error: vitest/browser can be imported only inside the Browser Mode. Your test is running in forks pool. Make sure your regular tests are excluded from the "test.include" glob pattern.` I tried to solve the testing framework errors, but decided to move on after about 30 mins as I had already spent a lot of time on the error.  

I opted to use `@tanstack/react-query` as I'm very familiar with that library.  It solves the client side cache problem (and many others), so multiple requests are not made while navigating the site.  One thing I would do differently if give more time to explore the countries api, is I don't think when navigating to the single country page, I needed to make a new request.  I think all the data I needed to display the additional properties was in the initial query.  

## Anything I would do with more time:
1. Hover display is not good for mobile users, I would have added some icon/button to show user they can click on each row.  
2. TONS of styles work (number formatting, margin/padding, lables, headers, etc...)  
3. Explore the countries api more and determine if all the data I needed was in the initial query.  If so, re-worked that so an additonal query is not ran when clicking into a single country.  
4. pagination  
5. filters  
6. sorting  
7. better loading indicator  
