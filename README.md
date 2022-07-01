# Next.js JWT Auth Example
## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Problem
Where to store JWT? In cookies sure (Local Storage is vulnerable to XSS). But cookies without `httpOnly` attribute are still vulnerable to XXS attacks. The most straightforward solution in this case is to manage cookies on the backend. But what if we have no control on it? In this case we have to create it by ourself!

## Concept
Next.js has built in feature called [API Routes](https://nextjs.org/docs/api-routes/introduction). Using this feature alongside with `http-proxy` package we are able to create proxy which allow us to manage cookies on the server side and thus setup `httpOnly` flag to make our cookies secure.

## Endpoints
* `POST /api/auth/login` - A route that proxies login request to our API and then takes access and refresh tokens from the response and saves them in cookies on server side.
* `DELETE /api/auth/logout` - Route that removes access and refresh tokens from cookies.
* `POST /api/auth/refresh` - Route that proxies refresh access token request to our API, attaching refresh token from cookies to it and saves new access and refresh tokens from the response to cookies on server side.
* `GET /api/auth/status` - Route that reads cookies and returns if user currently authorized or not.
* `[...path]` - Proxy for all outcoming requests which takes access token from cookies and attaches it to `Authorization` header of request.
