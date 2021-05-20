# The official web application for EnCluster

## To run locally

### Clone the repository
```
git clone git@github.com:EnCluster/EnclusterWeb.git
```
### Populate a .env.local file with firebase credentials using the following environment variable names
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

### Run the development server
```
yarn
yarn dev
```
##Production builds will be on [this repository](http://github.com/samrath2007/EnClusterWeb/)
