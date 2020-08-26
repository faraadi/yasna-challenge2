This Projects is a Front-End hiring challenge for [`Yasna Team`](https://yasna.team/). it's bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`Reactjs`](https://reactjs.org).

- [`Demo`](https://yasna-challenge2.vercel.app/)
- [`UI Prototype`](https://www.figma.com/file/KA9Bnv3srb9sgpJZ53QqM5/spotify-profile)

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
Some configurations can be customized through `env` files placed at project's root directory. this app uses two env files to read these configs:
- `.env.development` for development stage.
- `.env.production` for production stage.

both share the same variables. here's a list of available env variables:

- `NEXT_PUBLIC_BASE_URL`: basic url of the app. only changes SEO related stuffs.
- `NEXT_PUBLIC_API_URL`: Spotify's API base url. you probably won't going to change this one
- `NEXT_PUBLIC_CLIENT_ID`: by default this app uses my Spotify Client ID. you can use your own aslo. but make sure that `NEXT_PUBLIC_REDIRECT_URL` points to one of redirect urls in your Spotify Developer Dashboard, Otherwise spotify won't give you authentication token.
- `NEXT_PUBLIC_REDIRECT_URL`: the url that spotify will redicrect user after he/she authorizes this app to connects to his/her Spotify Account.
- `NEXT_PUBLIC_ARTIST_ID`: you can change the default artist. just replace it with `artist_id` of any artist on Spotify.
- `NEXT_PUBLIC_ARTIST_USER_ID`: if you change `NEXT_PUBLIC_ARTIST_ID`, to display Artist's own playlists, you need to find artist's `user_id` and replace it with default value.

# A note on browsers compatibility
This App uses css's `backdrop-filter` property for background blurness effect of various parts. unfortunately, FireFox Desktop doesn't have built-in support for this property out-of-the-box. so you may miss some effect if you're gonig to see it inside Firefox browser.

# License
The source code is distributed under the MIT License.