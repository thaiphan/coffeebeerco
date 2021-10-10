# Coffee Beer Co

This repo demonstrates how I would set up a React project for a product grid showcasing a variety of alcohol beverages.

I chose to use Next.js because I assume that this would be an eCommerce / content-heavy website. Next.js is great for SEO and for high performance content-heavy websites. I might still use Next.js for admin portals because of how easy it is to use but I would also consider Create React App or the new Vite. CRA is very opininated and difficult to customise whereas Vite provides more options and is a lot faster.

I went with Tailwind as I have become something of a fanboy (I've been stuck using MUI for several years now but I have never been a fan). Tailwind allows developers to rapidly smash out consistent interfaces. The fact that it's all global utility classes means that it's super high performance compared to the popular CSS-in-JSS solutions like styled-components (which I'm personally a fan of as well).

For data fetching and global state management, I went with Redux Toolkit Query. RTK Query provides dead simple abstrations for setting up a Redux store as well as fetching and caching data from a remote API. There are alternatives like swr and react-query. However, RTK Query is a full-on integrated solution and it really easy to use.

For folder structure, I'm been using Brad Frost's Atomic Design for components. Personally, I would also consider shifting a lot of components into a separate repository or co-locating them with the main component. I'm a fan of a simple folder structure like:

```bash
/src/api/ # or /src/services
/src/components/atoms
/src/components/molecules
/src/components/organisms
/src/components/templates
/src/contexts/ # maybe
/src/hooks/
/src/pages/
/src/store/apis
/src/store/slices
/src/util/ # or /src/helpers
```

The final folder structure depends on the project but I have never run into an issue with the above.

## Getting started

```bash
git clone git@github.com:thaiphan/coffeebeerco.git
cd coffeebeerco
yarn
yarn dev
```

You can then access the app using your browser by accessing https://localhost:3000

## Known issues

I didn't build out a search input field. My solution would've looked like the following:

```tsx
const [searchQuery, setSearchQuery] = React.useState('');

const [data = []] = useGetProductsQuery({
  searchQuery,
  filter,
});

const handleChange = (value) => {
  setSearchQuery(value);
};

return <input type="text" onChange={handleChange} value={searchQuery} />;
```

## Testing

I am a huge fan of React Testing Library and the one test that I added shows the kind of tests that I write. Essentially the user provides a bunch of inputs and we test if React renders the correct output. In a large project, it's normally more sophisticated, e.g. mock data, setting up test providers (Redux, authentication, etc). One important test that I always write is whether a form contains the correct payload when the user submits.
