This Projects is a Front-End hiring challenge for [`Yasna Team`](https://yasna.team/). 

- [Demo](https://yasna-challenge2.vercel.app/)
- [UI Prototype](https://www.figma.com/file/KA9Bnv3srb9sgpJZ53QqM5/spotify-profile)


it's bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`Reactjs`](https://reactjs.org). also it makes heavy use of css modules and css's custom properties. each components has a `[component].module.css` that holds its styles.

``` bash
├── lib # modules, components and everything else...
	├── components #various components used in apps.
		├── artist # artist's page and related components
		├── auth # authentication page
		├── common # commonly used components like Button and Col
		├── error # error page
		├── layout # layout and backdrop
		├── loading #initial loading in artist page
	├── icons #svg icons exported from here
	├── service #services and http middlewares
	├── utils #utility functions
├── pages # pages and views
	├── _app.js # render custom layout of app using next's _app component
	├── _document.js # render custom layout of document using next's document
	├── artist.js # artist's profile page
	├── index.js # homepage. point to authentication
├── public # public folder to serve static files.
├── styles # global styles used in all pages. imported inside _app.js
	├── fonts # fonts configurations
```

# Development

Clone this repo and install dependecies. then start development server:
```bash
git clone https://github.com/faraadi/yasna-challenge2.git
cd yasna-challenge2
npm install
npm run dev
```

now head to [`localhost:3000`](http://localhost:3000) and see the app.


# Deployment
The easiest way to deploy this app, is to use [`Vercel`](https://vercel.com/) Cloud Platform. read the docs at [`here`](https://vercel.com/) and [`here`](https://nextjs.org/docs/deployment)

# Configuration
## ENV configs
Some configurations can be customized through `env` files placed at project's root directory. this app uses two env files to read these configs:
- `.env.development` for development stage.
- `.env.production` for production stage.

both share the same variables. here's a list of available env variables:

| env | Description  |
| ----------- | ----------- |--- |
| `NEXT_PUBLIC_BASE_URL` | basic url of the app. only changes SEO related stuffs.  |
| `NEXT_PUBLIC_API_URL` | Spotify's API base url. you probably won't going to change this one |
| `NEXT_PUBLIC_CLIENT_ID` | by default this app uses my Spotify Client ID. you can use your own aslo. but make sure that `NEXT_PUBLIC_REDIRECT_URL` points to one of redirect urls in your Spotify Developer Dashboard, Otherwise spotify won't give you authentication token. |
| `NEXT_PUBLIC_REDIRECT_URL` | the url that spotify will redicrect user after he/she authorizes this app to connects to his/her Spotify Account. must ends with `/artist`. |
| `NEXT_PUBLIC_ARTIST_ID` | you can change the default artist profile to show. just replace it with `artist_id` of any artist on Spotify. |
| `NEXT_PUBLIC_ARTIST_USER_ID` | if you change `NEXT_PUBLIC_ARTIST_ID`, to display Artist's own playlists, you need to find artist's `user_id` and replace it with default value. |

## Escape Hatches
> make sure you are aware of configuration affects of these files. changes may break build and complie workflow.

Other configuration and customization are available through various escape hatches like `next.config.js`, `.babelrc` and etc. generally i don't recommend you to change any of these tools behavior (especially port number!).

# A Note on Browsers Compatibility
This App uses css's `backdrop-filter` property for background blurness effect of various parts. unfortunately, FireFox Desktop doesn't have built-in support for this property out-of-the-box. so you may miss some effect if you're gonig to see it inside Firefox browser.

# License
The source code is distributed under the MIT License.